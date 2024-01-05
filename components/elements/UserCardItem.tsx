import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableNativeFeedback, Alert
} from "react-native";
import Animated from "react-native-reanimated";
import { useDispatch, useSelector } from "react-redux";
import { lockUser, removeItem } from "../../ReduxStore/Action";
import Icon from "react-native-vector-icons/FontAwesome";
import { ImagesAssets } from "../../assets/img/ImagesAssets";
import React from "react";
import { color } from "react-native-elements/dist/helpers";

export function UserCardItem(props: any) {
  const dispatch = useDispatch();
  const showAlert = () => {
    Alert.alert(
      "Tuỳ chọn",
      "Chọn thao tác",
      [{
        text: "Huỷ",
        style: "cancel"
      }, {
        text: props.user.status ? "Khóa tài khoản" : "Mở tài khoản",
        onPress: () => {
          dispatch(lockUser(props.user.id));
        },
        style: "default"
      }, {
        text: "Sửa",
        onPress: () => {
        },
        style: "default"
      }]
    );
  };


  return (
    <TouchableNativeFeedback
      onPress={() => props.navigation.navigate("UserModify", { user: props.user })}
      onLongPress={() => {
        if (props.screen === "UserDashBoard" || props.screen === "History")
          return showAlert();
      }}
      delayLongPress={650}
    >

      {props.user ? <Animated.View style={styles.root}>
        <View style={styles.container}>
          <View style={styles.right}>
            <Image source={ImagesAssets.user} style={{ width: 70, height: 70}} />
          </View>

          <View style={styles.left}>
            <View style={{ height: "90%", justifyContent: "center" }}>
              <Text style={styles.title}>
                Username: <Text style={[{fontWeight: "bold"}]}> {props.user.email} </Text>
              </Text>
              <Text style={styles.desc}>
                Họ tên: <Text style={[styles.content]}> {props.user.fullName} </Text>
              </Text>
              <Text style={[styles.desc, ]}>
                Trạng thái: <Text style={[styles.content,{ color: props.user.status ? "green" : "red" }]}> {props.user.status ? "Đang Hoạt Động" : "Đã khóa"} </Text>
              </Text>
              <Text style={styles.desc}>
                Vai trò: <Text style={[styles.content,{ color: props.user.admin ? "red" : "blue" }]}> {props.user.admin ? "Admin" : "Người dùng"} </Text>
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
    width: "70%"
  },
  image: {
    borderRadius: 15
  },
  right: {
    justifyContent: "center",
    alignItems: "center",
    width: "30%",
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
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "bold"
  },
  title: {
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Inter",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "800"
  },
  content: {
    fontWeight: "normal",
  },
  date: {
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Inter",
    fontSize: 11,
    fontStyle: "italic",
    fontWeight: "bold"
  }
});
