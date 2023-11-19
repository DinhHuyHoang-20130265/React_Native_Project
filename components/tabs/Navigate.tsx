import BottomNavigation from "./BottomNavigation";
import Settings from "../../screens/Settings";
import { getFocusedRouteNameFromRoute, NavigationContainer } from "@react-navigation/native";
import React from "react";
import { CardStyleInterpolators, createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/FontAwesome";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { ImagesAssets } from "../../assets/img/ImagesAssets";
import AboutUs from "../../screens/AboutUs";
import Login from "../../screens/Login";
import SignUp from "../../screens/SignUp";
import ForgotPassword from "../../screens/ForgotPassword";

const Stack = createStackNavigator();

function getHeaderTitle(route: any) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "home";

  switch (routeName) {
    case "home":
      return "Trang chủ".toUpperCase();
    case "search":
      return "Tìm kiếm".toUpperCase();
    case "list":
      return "Danh mục".toUpperCase();
  }
}

export default function Navigate() {
  return (<NavigationContainer>
    <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <Stack.Screen
        name="Home"
        component={BottomNavigation}
        options={({ route, navigation }) => ({
          title: getHeaderTitle(route),
          headerTitleStyle: styles.headerTitle,
          headerStyle: {
            elevation: 100,
            borderBottomWidth: 0.5
          },
          headerShow: true,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate("AboutUs")}>
              <Image
                source={ImagesAssets.logo}
                style={{ marginLeft: 10, width: 40, height: 40, borderRadius: 8 }} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <Icon
              onPress={() => navigation.navigate("Settings")}
              color="black"
              name={"gear"}
              style={{ fontSize: 26, marginRight: 10 }} />
          )
        })}
      />
      <Stack.Screen name="Settings" component={Settings} options={({ navigation }) => ({
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
      <Stack.Screen name="AboutUs" component={AboutUs} options={({ navigation, screenProps }: any) => ({
        title: "Về ứng dụng này".toUpperCase(),
        headerTitleStyle: styles.headerTitle,
        cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
        headerStyle: {
          elevation: 100,
          borderBottomWidth: 0.5
        }
      })} />
      <Stack.Screen name="Login" component={Login} options={({ navigation }: any) => ({
        title: "Đăng nhập".toUpperCase(),
        headerTitleStyle: styles.headerTitle,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerStyle: {
          elevation: 100,
          borderBottomWidth: 0.5
        }
      })} />
      <Stack.Screen name="SignUp" component={SignUp} options={({ navigation }: any) => ({
        title: "Đăng ký".toUpperCase(),
        headerTitleStyle: styles.headerTitle,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerStyle: {
          elevation: 100,
          borderBottomWidth: 0.5
        }
      })} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={({ navigation }: any) => ({
        title: "Quên mật khẩu".toUpperCase(),
        headerTitleStyle: styles.headerTitle,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerStyle: {
          elevation: 100,
          borderBottomWidth: 0.5
        }
      })} />
    </Stack.Navigator>
  </NavigationContainer>);
}

const styles = StyleSheet.create({
  headerTitle: {
    fontWeight: "400",
    fontSize: 20
  }
});
