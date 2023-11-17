/* eslint-disable prettier/prettier */

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerNavigation from './components/tabs/DrawerNavigation';

const Stack = createStackNavigator();

function App(): JSX.Element {

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{minHeight: '100%', width: '100%'}}>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="DrawerNavigation">
        <Stack.Screen
          name="DrawerNavigation"
          component={DrawerNavigation}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default App;
