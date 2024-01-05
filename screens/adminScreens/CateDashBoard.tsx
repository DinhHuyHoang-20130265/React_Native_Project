import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView, StyleSheet, Text, FlatList
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { dataCate } from "../../components/sortSelect";
import { useRoute } from "@react-navigation/native";
import { CateCardItem } from "../../components/elements/CateCardItem";
import { allCates } from "../../apiCalls/allCates";
import { useSelector } from "react-redux";

const CateDashBoard: React.FC = (props: any) => {
  const route = useRoute();

  const [listCateg, setListCate] = useState<any[]>([]);
  // @ts-ignore
  const [selected, setSelected] = useState<any>(dataCate.at(0).key);
  const admin = useSelector((state: any) => state.userObj);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (admin) {
          const cateData = await allCates();
          setListCate(cateData.filter((item: any) => {
            switch (selected) {
              case "1": {
                return item.isDelete;
              }
              case "2": {
                return !item.isDelete;
              }
              case "0": {
                return item;
              }
            }
          }));
        }
      } catch (error) {
        console.error("Error fetching cate dashboard:", error);
      }
    };
    fetchData();
  }, [props, selected, admin]);

  console.log(admin);

  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 60 }}>
        <SelectList
          setSelected={setSelected}
          data={dataCate}
          inputStyles={{ color: "black" }}
          boxStyles={{ marginTop: 10, marginBottom: 5, marginHorizontal: 10, backgroundColor: "white" }}
          dropdownStyles={{ marginVertical: 5, marginHorizontal: 10, backgroundColor: "white" }}
          notFoundText={""}
          dropdownTextStyles={{ color: "black" }}
          searchPlaceholder={""}
          defaultOption={dataCate.at(0)}
        />
        <FlatList
          data={listCateg}
          keyExtractor={(item, index) => index.toString()}
          horizontal={false}
          renderItem={({ item, index }) => {
            return (
              <CateCardItem cate={item} screen={"CateDashBoard"}
                            navigation={props.navigation} />
            );
          }}
          contentContainerStyle={{ alignItems: "center", justifyContent: "center" }}

        />
      </View>
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

export default CateDashBoard;
