/* eslint-disable prettier/prettier */
import React from 'react';
import {View,Text, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Header(){

 const toggleDrawer = useNavigation();

  return (
    <View style={headerStyles.container}>
        <TouchableOpacity onPress={()=> toggleDrawer}>
            <Icon name="menu" size={24} color="black" />
        </TouchableOpacity>
        <View>
            <Text>News App</Text>
        </View>
    </View>
  );
}

const headerStyles = StyleSheet.create({
   container:{
       position:'absolute',
       top:30,
       left:0,
       width:'100%',
       backgroundColor:'#fa7da7',
       elevation:5,
       height:50,
       display:'flex',
       flexDirection:'row',
       paddingHorizontal:20,
       alignItems:'center',
       justifyContent:'space-between',
   },
});
