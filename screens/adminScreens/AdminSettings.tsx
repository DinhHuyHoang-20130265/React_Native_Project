/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { View, Text, Switch, StyleSheet, TouchableOpacity, Button, TouchableHighlight } from "react-native";
import { theme } from "../../components/elements/theme";
import Icon from "react-native-vector-icons/FontAwesome";

const AdminSettings: React.FC = ({ navigation }: any) => {

  return (
    <View style={styles.container}>
      <View style={{
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 16
      }}>
      </View>
      <Text>Admin setting</Text>
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
