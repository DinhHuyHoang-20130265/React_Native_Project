/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { View, Text, Switch, StyleSheet, TouchableOpacity, Button, TouchableHighlight } from "react-native";
import { theme } from "../components/elements/theme";

const Settings: React.FC = ({ navigation }: any) => {

  const [notificationSwitch, setNotificationSwitch] = useState<boolean>(false);
  const [darkModeSwitch, setDarkModeSwitch] = useState<boolean>(false);

  const onNotificationSwitchChange = () => {
    setNotificationSwitch(!notificationSwitch);
  };

  const onDarkModeSwitchChange = () => {
    setDarkModeSwitch(!darkModeSwitch);
  };

  return (
    <View style={styles.container}>
      <View style={{
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 16
      }}>
        <TouchableHighlight onPress={() => navigation.navigate("Login")} underlayColor="#400B96FF"
                            style={{
                              backgroundColor: theme.colors.primary,
                              width: 160,
                              height: 40,
                              justifyContent: "center",
                              borderRadius: 8
                            }}>
          <Text style={{ textAlign: "center", color: "white", fontSize: 18 }}>{"Đăng nhập".toUpperCase()}</Text>
        </TouchableHighlight>
      </View>

      <View style={styles.settingOption}>
        <Text style={{ color: "black" }}>Enable Notifications</Text>
        <Switch
          value={notificationSwitch}
          onValueChange={onNotificationSwitchChange}
        />
      </View>

      <View style={styles.settingOption}>
        <Text style={{ color: "black" }}>Dark Mode</Text>
        <Switch value={darkModeSwitch} onValueChange={onDarkModeSwitchChange} />
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
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16
  }
});

export default Settings;
