import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight, useWindowDimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../ReduxStore/Action";

const Settings: React.FC = ({ navigation }: any) => {
  const { width: screenWidth } = useWindowDimensions();
  const [currentUser, setCurrentUser] = useState<any>(null);
  const user = useSelector((state: any) => state.userObj);
  const dispatch = useDispatch();

  useEffect(() => {
    setCurrentUser(user);
  }, [user, navigation]);

  const logOut = () => {
    dispatch(logout());
    navigation.reset({
      index: 0,
      routes: [{ name: "Home" }]
    });
  };

  return (
    <View style={styles.container}>
      <View style={{
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 16
      }}>{currentUser === null ?
        <TouchableHighlight onPress={() => navigation.navigate("Login")} underlayColor="#400B96FF"
                            style={{
                              backgroundColor: "green",
                              width: 160,
                              height: 40,
                              justifyContent: "center",
                              borderRadius: 8
                            }}>
          <Text style={{ textAlign: "center", color: "white", fontSize: 18 }}>{"Đăng nhập".toUpperCase()}</Text>
        </TouchableHighlight> : <View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
              Xin chào: {currentUser.fullName}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("UserProfile")}
              style={{ flexDirection: 'row', alignItems: 'center', marginLeft:40 }}>
              <Icon name={"id-card"} size={20} color="blue" style={{ marginRight: 5 }} />
              <Text style={{ fontSize: 18, color: 'blue', textDecorationLine: 'underline' }}>Chỉnh sửa</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 10 }}>
            <TouchableHighlight
              onPress={() => logOut()}
              underlayColor="#400B96FF"
              style={{
                backgroundColor: 'green',
                width: 160,
                height: 40,
                justifyContent: 'center',
                borderRadius: 8,
                marginLeft: (screenWidth - 290) / 2,
                marginTop: 20
              }}
            >
              <Text style={{ textAlign: 'center', color: 'white', fontSize: 18 }}>
                {'Đăng xuất'.toUpperCase()}
              </Text>
            </TouchableHighlight>
          </View>
        </View>}
      </View>
      {currentUser === null ? "" : <TouchableOpacity onPress={() => navigation.navigate("History")}>
        <View style={styles.settingOption}>
          <Icon color="blue"
                name={"save"}
                style={{ fontSize: 22, marginRight: 10 }} />
          <Text style={{ color: "black" }}>Bài viết đã lưu</Text>
        </View>
      </TouchableOpacity>}
      <TouchableOpacity onPress={() => navigation.navigate("History")}>
        <View style={styles.settingOption}>
          <Icon color="green"
                name={"history"}
                style={{ fontSize: 22, marginRight: 10 }} />
          <Text style={{ color: "black" }}>Đã đọc gần đây</Text>
        </View>
      </TouchableOpacity>
      {/* Add more setting options as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16
  },
  settingOption: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 16
  }
});

export default Settings;
