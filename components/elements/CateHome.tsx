import React from "react";
import { View, Text, StyleSheet, Dimensions, Image, ImageBackground } from "react-native";
import CarouselCards from "./CarouselCards";

export const SLIDER_WIDTH = Dimensions.get("window").width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const CateHome = ({ item }: any): React.JSX.Element | null => {
  return (
    <View style={styles.container} key={item}>
      <Text style={styles.headerText}>{item.title.toUpperCase()}</Text>
      <CarouselCards item={item}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: ITEM_WIDTH,
    marginTop: 30,
  },
  headerText: {
    color: 'black',
    marginLeft: 10,
    fontSize: 23,
    fontWeight: "bold",
    marginBottom: -15
  },
});

export default CateHome;
