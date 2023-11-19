import React from "react";
import {
  View,
  ScrollView, Text
} from "react-native";

const BookMarks: React.FC = () => {

  return (
    <View style={{ minHeight: "100%" }}>
      <ScrollView>
        <View style={{ alignItems: "center", justifyContent: "center", marginBottom: 70 }}>
          <Text style={{ color: "black" }}>This is BookMarks Screen</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default BookMarks;
