import React, { useState } from "react";
import { View, Text, TextInput, Switch, Button, Alert, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

const AddNews: React.FC = (props: any) => {
  const Router = useRoute();
  const [isActive, setIsActive] = useState(true);
  const [value, setFieldValue] = useState("");
  const _editor: any = React.createRef();
  const handleSave = () => {
  };
  const handleDelete = () => {
    Alert.alert("Xác nhận xóa", "Bạn có chắc chắn muốn xóa danh mục này không?", [
      { text: "Hủy", style: "cancel" },
      { text: "Xóa", style: "destructive", onPress: () => console.log("Xóa danh mục") }
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Tên bài báo:</Text>
      <TextInput
        style={styles.input}
        // value={NewsName}
        // onChangeText={setCategoryName}
        placeholder="Nhập tên bài báo"
      />
      <Text style={styles.label}>Mô tả:</Text>
      <TextInput
        style={styles.input}
        // value={NewsName}
        // onChangeText={setCategoryName}
        placeholder=""
      />
      <Text style={styles.label}>Nội dung:</Text>
      <Text style={styles.label}>Ảnh:</Text>
      <TextInput
        style={styles.input}
        placeholder=""
      />
      <View style={styles.switchContainer}>
        <Text style={styles.label}>Trạng thái:</Text>
        <Switch value={isActive} onValueChange={setIsActive} />
      </View>
      <Button title="Lưu" onPress={handleSave} />
      <Text style={{ marginTop: -5 }} />
      <Button title="Xóa danh mục" onPress={handleDelete} color={"red"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16
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
    marginBottom: 16
  }
});

export default AddNews;
