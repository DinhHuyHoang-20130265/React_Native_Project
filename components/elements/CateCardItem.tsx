import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback, Alert
} from "react-native";
import Animated from "react-native-reanimated";
import { useDispatch } from "react-redux";
import { removeItem } from "../../ReduxStore/Action";
import Icon from "react-native-vector-icons/FontAwesome";

export function CateCardItem(props: any) {
  const dispatch = useDispatch();
  // const showAlert = () => {
  //   Alert.alert(
  //     "Xoá bài viết",
  //     "Xoá bài viết này ?",
  //     [{
  //       text: "Huỷ",
  //       style: "cancel"
  //     }, {
  //       text: "Xoá",
  //       onPress: () => {
  //         dispatch(removeItem(props.itemNews));
  //       },
  //       style: "default"
  //     }]
  //   );
  // };


  return (
    <TouchableNativeFeedback
      // onPress={() => props.navigation.navigate("Details", { item: props.itemNews, screen: props.screen })}
      // onLongPress={() => {
      //   if (props.screen === "History")
      //     return showAlert();
      // }}
      // delayLongPress={650}
    >

      {props.cate ? <Animated.View style={styles.root}>
        <View style={styles.container}>
          <View style={styles.left}>
            <View style={{ height: "90%", justifyContent: "center" }}>
              <Text style={styles.title}>
                Tên danh mục: {props.cate.name}
              </Text>
              <Text style={[styles.desc, {color: props.cate.isDelete? "red": "green"}]}>
                Trạng thái: {props.cate.isDelete ? "Đã ẩn" : "Đang Hoạt Động"}
              </Text>
              <Text style={styles.desc}>
                Người tạo: {props.cate.createdBy}
              </Text>
              <Text style={[styles.desc]}>
                Ngày tạo: {props.cate.createdDate}
              </Text>
            </View>
          </View>
        </View>
      </Animated.View> : ""}
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  root: {
    marginHorizontal: 10,
    height: 100,
    marginBottom: 5
  },
  left: {
    paddingTop: 5,
    paddingLeft: 30,
    width: "100%"
  },
  image: {
    borderRadius: 15
  },
  right: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    flexDirection: "column",
    height: "100%"
  },
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    alignItems: "flex-start",
    marginVertical: 7,
    borderRadius: 15,
    backgroundColor: "rgb(255,255,255)",
    shadowColor: "#000",
    shadowOffset: {
      width: 4,
      height: 4
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 4
  },
  desc: {
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Inter",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "400"
  },
  title: {
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Inter",
    fontSize: 13,
    fontStyle: "normal",
    fontWeight: "800"
  },
  date: {
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Inter",
    fontSize: 11,
    fontStyle: "italic",
    fontWeight: "bold"
  }
});
