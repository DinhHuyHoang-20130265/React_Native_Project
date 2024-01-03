import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/FontAwesome";
import { StyleSheet } from "react-native";
import BottomNavigationAdmin from "./BottomNavigationAdmin";
import AdminSettings from "../../screens/adminScreens/AdminSettings";

const Stack = createStackNavigator();

function getHeaderTitle(route: any) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "user";

  switch (routeName) {
    case "user":
      return "Quản lý tài khoản".toUpperCase();
    case "list-ul":
      return "Quản lý danh mục".toUpperCase();
    case "newspaper-o":
      return "Quản lý tin tức".toUpperCase();
  }
}

export default function NavigateAdmin() {

  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <Stack.Screen
        name="UserDashBoard"
        component={BottomNavigationAdmin}
        options={({ route, navigation }) => ({
          title: getHeaderTitle(route),
          headerTitleStyle: styles.headerTitle,
          headerStyle: {
            elevation: 100,
            borderBottomWidth: 0.5
          },
          headerShow: true,
          headerRight: () => (
            <Icon
              onPress={() => navigation.navigate("AdminSetting")}
              color="black"
              name={"gear"}
              style={{ fontSize: 26, marginRight: 10 }} />
          )
        })}
      />
      <Stack.Screen name="AdminSetting" component={AdminSettings} options={({ navigation }) => ({
        title: "Cài đặt".toUpperCase(), headerTitleStyle: styles.headerTitle,
        headerStyle: {
          elevation: 100,
          borderBottomWidth: 0.5
        },
        cardStyleInterpolator: ({ current, layouts }: any) => {
          return {
            cardStyle: {
              transform: [
                {
                  translateX: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [layouts.screen.width, 0]
                  })
                }
              ]
            }
          };
        }
      })} />
    </Stack.Navigator>);
}

const styles = StyleSheet.create({
  headerTitle: {
    fontWeight: "400",
    fontSize: 20
  }
});
