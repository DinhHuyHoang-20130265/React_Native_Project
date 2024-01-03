import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView, StyleSheet, Text
} from "react-native";


const UserDashBoard: React.FC = ({ navigation }: any) => {

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.gridContainer}>
          <Text>UserDashBoard</Text>
        </View>
      </ScrollView>
    </View>
  )
    ;
};

const styles = StyleSheet.create({
  container: {
    minHeight: "100%",
    paddingBottom: 80,
    top: 20
  },
  scrollViewContent: {
    alignItems: "center"
  },
  gridContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16
  }
});

export default UserDashBoard;
