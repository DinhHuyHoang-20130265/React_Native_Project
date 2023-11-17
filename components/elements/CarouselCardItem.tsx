import React from "react";
import { View, Text, StyleSheet, Dimensions, Image, ImageBackground } from "react-native";

export const SLIDER_WIDTH = Dimensions.get("window").width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const CarouselCardItem = ({ item, index }: any): React.JSX.Element | null => {
  if (!item || !item.title || !item.body || !item.imgUrl) {
    console.error("Invalid item data:", item);
    return null;
  }
  return (
    <View style={styles.container} key={index}>
      <ImageBackground
        source={{ uri: item.imgUrl }}
        style={{
          height: "100%",
          width: "100%",
          borderRadius: 20
        }}
        imageStyle={{ borderRadius: 20 }}
      >
        <View style={{
          flex: 1,
          backgroundColor: "rgba(72,57,57,0.6)",
          borderRadius: 20
        }}>
          <Text style={styles.timer}>20/12/2023</Text>
          <View style={styles.content}>
            <Text style={styles.header}>{item.title}</Text>
            <Text style={styles.body}>{item.body}</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: ITEM_WIDTH,
    borderRadius: 20,
    paddingHorizontal: 2,
  },
  timer: {
    position: "absolute",
    marginTop: "5%",
    marginLeft: "65%",
    fontSize: 15
  },
  content: {
    marginTop: "17%"
  },
  header: {
    color: "#e7dede",
    fontSize: 24,
    fontWeight: "bold",
    paddingLeft: 10
  },
  body: {
    color: "#e7dede",
    fontSize: 12,
    paddingLeft: 10,
    paddingRight: 20
  }
});

export default CarouselCardItem;
