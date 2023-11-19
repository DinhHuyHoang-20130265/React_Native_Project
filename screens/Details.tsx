import React from "react";
import {
  View,
  ScrollView, Text
} from "react-native";

const Details: React.FC = () => {

  return (
    <View style={{ minHeight: "100%" }}>
      <ScrollView>
        <View style={{ alignItems: "center", justifyContent: "center", marginBottom: 70 }}>
          <Text style={{color: 'black'}}>This is Details Screen</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Details;
