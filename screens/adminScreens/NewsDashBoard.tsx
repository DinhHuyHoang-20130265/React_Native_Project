import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView, StyleSheet, Text, FlatList
} from "react-native";
import { listCate } from "../../apiCalls/listCate";
import { CateCard } from "../../components/elements/CateCard";
import { useRoute } from "@react-navigation/native";
import { data } from "../../components/sortSelect";
import { listNews } from "../../apiCalls/listNews";
import { allNews } from "../../apiCalls/allNews";
import { SelectList } from "react-native-dropdown-select-list";
import { ListNewsCardItem } from "../../components/elements/ListNewsCardItem";



const NewsDashBoard: React.FC = (props: any) => {

  const [listData, setListData] = useState<any[]>([]);
  // @ts-ignore
  const [selected, setSelected] = useState<any>(data.at(0).key);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const newsData = await allNews();
        newsData.sort((a: any, b: any) => {
          switch (selected) {
            case "1": {
              return new Date(b.createdDate).valueOf() - new Date(a.createdDate).valueOf();
            }
            case "2": {
              return new Date(a.createdDate).valueOf() - new Date(b.createdDate).valueOf();
            }
            case "3": {
              return a.title.localeCompare(b.title);
            }
            case "4": {
              return b.title.localeCompare(a.title);
            }
            case "0": {
              return new Date(b.createdDate).valueOf() - new Date(a.createdDate).valueOf();
            }
          }
        });
        setListData(newsData);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

      fetchData();
  }, [props, selected]);

  return (
    <View style={{ marginBottom: 60 }}>
      <SelectList
        setSelected={setSelected}
        data={data}
        inputStyles={{ color: "black" }}
        boxStyles={{ marginTop: 10, marginBottom: 5, marginHorizontal: 10, backgroundColor: "white" }}
        dropdownStyles={{ marginVertical: 5, marginHorizontal: 10, backgroundColor: "white" }}
        notFoundText={""}
        dropdownTextStyles={{ color: "black" }}
        searchPlaceholder={""}
        defaultOption={data.at(0)}
      />
      <FlatList
        data={listData}
        keyExtractor={(item, index) => index.toString()}
        horizontal={false}
        renderItem={({ item, index }) => {
          return (
            <ListNewsCardItem itemNews={item} screen={"NewsDashBoard"}
                              navigation={props.navigation} />
          );
        }}
        contentContainerStyle={{ alignItems: "center", justifyContent: "center" }}

      />
    </View>
    // <View style={styles.container}>
    //   <ScrollView contentContainerStyle={styles.scrollViewContent}>
    //     {/*<View style={styles.gridContainer}>*/}
    //     {/*  <Text>NewsDashBoard</Text>*/}
    //     {/*</View>*/}
    //     <View style={styles.gridContainer}>
    //
    //     </View>
    //   </ScrollView>
    // </View>
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

export default NewsDashBoard;
