import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import APIScreen from './APIScreen';
import ProductScreen from './ProductScreen';

// import { Header } from 'react-native/Libraries/NewAppScreen';
import SearchScreen from './SearchScreen';
import DrawerScreen from './DrawerScreen';

const Tab = createBottomTabNavigator();
const HomeScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '',
          marginVertical: 7,
          marginLeft: 10,
          marginRight: 10,
          // borderColor: 'golden',
          // borderWidth: 5,
          borderRadius: 12,
        },
      }}>
      <Tab.Screen
        name="DrawerScreen"
        component={DrawerScreen}
        options={{headerShown: false}}
      />
      {/* <Tab.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={{headerShown: false}}
      /> */}
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{headerShown: false}}
      />

      <Tab.Screen
        name="APIScreen"
        component={APIScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;
