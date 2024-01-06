import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Switch,
  Button,
  Alert,
  StyleSheet,
  SafeAreaView,
  Image,
  Modal,
  ScrollView, ToastAndroid
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { launchImageLibrary } from "react-native-image-picker";
import QuillEditor, { QuillToolbar } from "react-native-cn-quill";
import { uploadImageToImgBB } from "../../apiCalls/imgUploadServer";
import { useSelector } from "react-redux";
import CheckboxList from 'rn-checkbox-list';

const AddNews: React.FC = (props: any) => {
  const Router = useRoute();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [isActive, setIsActive] = useState(true);
  const _editor = React.createRef<QuillEditor>();
  const [selectedImg, setSelectedImg] = useState<any>({ uri: null, base64: null });
  const [isLoading, setIsLoading] = useState(false);
  const admin = useSelector((state: any) => state.userObj);




    const [modalVisible, setModalVisible] = useState(false);
    const [checkedItems, setCheckedItems] = useState([]);

    const data = [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
      // Add more options as needed
    ];

    const handleSave1 = () => {
      console.log('Checked items:', checkedItems);
      // Do something with the checked items
      setModalVisible(false);
    };


  const imagePicker = () => {
    launchImageLibrary({
      mediaType: "photo",
      includeBase64: true,
      maxWidth: 700,
      maxHeight: 500
    }, async (response: any) => {
      setIsLoading(true);
      if (!response.didCancel) {
        const imageData = `${response.assets[0].base64}`;
        setSelectedImg({ uri: response.assets[0].uri, base64: imageData });
      }
      setIsLoading(false);
    });
  };
  const handleSave = async () => {
    setIsLoading(true);
    const content: any = await getContents();
    if (!content.trim()) {
      setIsLoading(false);
      ToastAndroid.showWithGravity(
        "Yêu cầu nhập nội dung tin tức",
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
      return;
    }
    if (!selectedImg.uri) {
      setIsLoading(false);
      ToastAndroid.showWithGravity(
        "Yêu cầu chọn một bức ảnh cho tin tức",
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
      return;
    }
    if (title.length < 1 || desc.length < 1) {
      setIsLoading(false);
      ToastAndroid.showWithGravity(
        "Không được bỏ trống tiêu đề hoặc mô tả",
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
      return;
    }
    console.log("success");
    setIsLoading(false);
  };
  const getContents = async () => {
    if (_editor && _editor.current) {
      return await _editor.current.getHtml();
    }
  };
  const handleDelete = () => {
    Alert.alert("Xác nhận xóa", "Bạn có chắc chắn muốn xóa danh mục này không?", [
      { text: "Hủy", style: "cancel" },
      { text: "Xóa", style: "destructive", onPress: () => console.log("Xóa danh mục") }
    ]);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ height: "150%" }}>
        <Text style={styles.label}>Tên bài báo:</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={setTitle}
          placeholder="Nhập tên bài báo"
        />
        <Text style={styles.label}>Mô tả:</Text>
        <TextInput
          style={styles.input}
          value={desc}
          onChangeText={setDesc}
          placeholder="Nhập mô tả"
        />
        <Text style={styles.label}>Nội dung:</Text>
        <SafeAreaView style={{
          height: 500,
          width: "100%",
          marginBottom: 10
        }}>
          <QuillEditor
            style={{
              flex: 1,
              padding: 0,
              borderColor: "gray",
              borderWidth: 1,
              marginHorizontal: 10,
              marginVertical: 5,
              backgroundColor: "white"
            }}
            ref={_editor}
            initialHtml="Viết nội dung tin tức của bạn"
          />
          <View style={{ width: "100%" }}>
            <QuillToolbar editor={_editor} options="full" theme="light" />
          </View>
        </SafeAreaView>
        <Text style={styles.label}>Ảnh:</Text>
        {selectedImg.uri && <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: 200
          }}>
          <Image style={{ minHeight: 150, minWidth: 300 }} resizeMode={"contain"}
                 source={{ uri: selectedImg.uri }} />
        </View>}
        <Button title={selectedImg.uri ? "Chọn lại hình ảnh" : "Chọn hình ảnh"} onPress={imagePicker} />

          <Modal
            animationType="slide"
            transparent={false}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(false);
            }}
          >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ backgroundColor: 'white', padding: 100, borderColor: '#26292E', borderWidth: 1 }}>
                <Text>Select Options</Text>
                <CheckboxList
                 listItems={data}

                />

                <Button title="Save" onPress={handleSave1} />
                <Button title="Close" onPress={() => setModalVisible(false)} />
              </View>
            </View>
          </Modal>
          <Button title="Open Modal" onPress={() => setModalVisible(true)} />

        <View style={styles.switchContainer}>
          <Text style={styles.label}>Trạng thái:</Text>
          <Switch value={isActive} onValueChange={setIsActive} />
        </View>
        <Button title="Lưu" onPress={handleSave} />
        <Text style={{ marginTop: -5 }} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    width: "100%",
    minHeight: "100%"
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    marginLeft: 2,
    color: "black"
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
    fontSize: 16
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
    marginTop: 16
  }
});

export default AddNews;
