/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { logout } from "../../ReduxStore/Action";

const AdminSettings: React.FC = ({ navigation }: any) => {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const user = useSelector((state: any) => state.userObj);
  const dispatch = useDispatch();

  useEffect(() => {
    setCurrentUser(user);
  }, [user, navigation]);

  const logOut = () => {
    dispatch(logout());
  };
  return (
    <View style={styles.container}>
      <View style={{
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 16
      }}>
      </View>
      {currentUser ? <View>
        <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 20 }}>Xin chào: {currentUser.fullName}</Text>
        <TouchableHighlight onPress={() => logOut()} underlayColor="#400B96FF"
                            style={{
                              backgroundColor: "green",
                              width: 160,
                              height: 40,
                              justifyContent: "center",
                              borderRadius: 8
                            }}>
          <Text style={{ textAlign: "center", color: "white", fontSize: 18 }}>{"Đăng xuất".toUpperCase()}</Text>
        </TouchableHighlight>
      </View> : <View></View>}
      <View style={styles.settingOption}>
        <Text style={{ color: "black" }}>Dark Mode</Text>
      </View>

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

export default AdminSettings;
