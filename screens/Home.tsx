/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from "react";
import {
  View,
  ScrollView
} from "react-native";
import CateHome from "../components/elements/CateHome";
import CarouselParallax from "../components/elements/CarouselParallax";

const newsCategories = [
  { id: 1, title: "Thời sự" },
  { id: 2, title: "Thể thao" },
  { id: 3, title: "Giải trí" },
  { id: 4, title: "Khoa học" }
];

const Home: React.FC = () => {

  return (
    <View style={{ minHeight: "100%" }}>
      <ScrollView>
        <View style={{ alignItems: "center", justifyContent: "center", marginBottom: 70 }}>
          <CarouselParallax />
          {
            newsCategories.map((item) => <CateHome item={item} key={item.id} />)
          }
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
