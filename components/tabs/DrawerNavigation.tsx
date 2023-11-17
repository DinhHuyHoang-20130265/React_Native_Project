/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerItems from '../../constants/DrawerItem';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from '../../screens/Home';
import Settings from '../../screens/Settings';
import Header from '../header/Header';
import BottomNavigation from './BottomNavigation';

const Drawer = createDrawerNavigator();

function DrawerNavigation(): JSX.Element {
  return (
    <Drawer.Navigator
        initialRouteName="Tab"
        screenOptions={{
            drawerType:'front',
            drawerActiveTintColor: '#e91e63',
            drawerItemStyle: { marginVertical: 10 },
        }}>
        <Drawer.Screen name="ABC" component={BottomNavigation} />
        {
         DrawerItems.map(drawer =>
            <Drawer.Screen
                key={drawer.name}
                name={drawer.name}
                component = {drawer.name === 'Đăng nhập' ? Home : Settings}
                options={{
                    drawerIcon: ({focused})=>
                    <Icon
                        name={drawer.iconName}
                        size={24}
                        color={focused ? '#e91e63' : 'black'}
                    />,
                    headerShown:true,
                    header: () => {
                        return (
                            <Header />
                        );
                    },
                }}
        />
        )}
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;
