/* eslint-disable prettier/prettier */

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import Navigate from "./components/tabs/Navigate";
import { View } from "react-native";


function App(): JSX.Element {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{ minHeight: "100%", width: "100%" }}>
      <Navigate />
    </View>
  );
}

export default App;
