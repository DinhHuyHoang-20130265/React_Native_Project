import React from "react";
import { StyleSheet, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import CarouselCardItem, { ITEM_WIDTH } from "./CarouselCardItem";
import { data } from "./data";

const CarouselCards = ({item} : any) => {
  const [index, setIndex] = React.useState(0);

  return (
    <View style={styles.container}>
      <Carousel
        loop
        width={ITEM_WIDTH}
        height={ITEM_WIDTH / 2}
        autoPlay={false}
        data={data}
        style={{
          backgroundColor: "rgba(1,1,1,0)", paddingLeft: 2,
          paddingRight: 2
        }}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => console.log("current index:", index)}
        renderItem={({ index }) => <CarouselCardItem item={data.at(index)} index={index} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    paddingLeft: 2,
    paddingRight: 2
  }
});

export default CarouselCards;
