import React from "react";
import { View, Text, StyleSheet, Dimensions, Image, ImageBackground } from "react-native";

export const SLIDER_WIDTH = Dimensions.get("window").width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const FirstCarouselCardHome = ({ item, index }: any): React.JSX.Element | null => {
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
          width: "100%"
        }}
      >
        <View style={{
          flex: 1,
          backgroundColor: "rgba(72,57,57,0.6)"
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
    width: SLIDER_WIDTH,
    paddingHorizontal: 2,
  },
  timer: {
    position: "absolute",
    marginTop: "5%",
    marginLeft: "65%",
    fontSize: 20
  },
  content: {
    marginTop: "17%"
  },
  header: {
    color: "#e7dede",
    fontSize: 28,
    fontWeight: "bold",
    paddingLeft: SLIDER_WIDTH/8
  },
  body: {
    color: "#e7dede",
    fontSize: 14,
    paddingLeft: SLIDER_WIDTH/8,
    paddingRight: SLIDER_WIDTH/8
  }
});

export default FirstCarouselCardHome;
