import React, { useState } from "react";
import { View, Text, Switch, StyleSheet, TouchableOpacity, Button, TouchableHighlight } from "react-native";
import { theme } from "../components/elements/theme";
import Icon from "react-native-vector-icons/FontAwesome";
import {useSelector} from "react-redux"

const Settings: React.FC = ({ navigation }: any) => {
  const user = useSelector((state:any)=> state.userObj)

  return (
    <View style={styles.container}>
      <View style={{
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 16
      }}>{user === null ? <TouchableHighlight onPress={() => navigation.navigate("Login")} underlayColor="#400B96FF"
                                             style={{
                                               backgroundColor: theme.colors.primary,
                                               width: 160,
                                               height: 40,
                                               justifyContent: "center",
                                               borderRadius: 8
                                             }}>
        <Text style={{ textAlign: "center", color: "white", fontSize: 18 }}>{"Đăng nhập".toUpperCase()}</Text>
      </TouchableHighlight>: <View>
        <Text style={{fontSize: 20, fontWeight: "bold", marginBottom:20}}>Xin chào: {user.fullName}</Text>
        <Button title={"Đăng xuất"}/>
      </View>}
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("History")}>
        <View style={styles.settingOption}>
          <Icon color="green"
                name={"history"}
                style={{ fontSize: 22, marginRight: 10 }} />
          <Text style={{ color: "black" }}>Đã đọc gần đây</Text>
        </View>
      </TouchableOpacity>
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

export default Settings;
