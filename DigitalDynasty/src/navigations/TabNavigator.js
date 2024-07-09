import React from 'react';
import {Image, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import ProfileScreen from '../screens/ProfileScreen';
import DataWithAxios from '../screens/DataWithAxios';
import FavoriteScreen from '../screens/FavoriteScreen';
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          keyboardHidesTabBar: true,
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../assets/home.png')}
              style={{
                height: 25,
                width: 25,
                borderRadius: 50,
              }}
            />
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Search',
          keyboardHidesTabBar: true,
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../assets/search.jpg')}
              style={{
                height: 25,
                width: 25,
                borderRadius: 50,
              }}
            />
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Profile',
          keyboardHidesTabBar: true,
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../assets/profile.jpg')}
              style={{
                height: 25,
                width: 25,
                borderRadius: 50,
              }}
            />
          ),
        }}></Tab.Screen>
      {/* <Tab.Screen
        name="DataWithAxios"
        component={DataWithAxios}
        options={{
          headerShown: false,
          tabBarLabel: 'DataWithAxios',
          // tabBarIcon: ({color, size}) => (
          //   // <Image
          //   //   source={require('../assets/profile.jpg')}
          //   //   style={{
          //   //     height: 25,
          //   //     width: 25,
          //   //     borderRadius: 50,
          //   //   }}
          //   // />
          // ),
        }}></Tab.Screen> */}
      {/* <Tab.Screen
        name="Favorites"
        component={FavoriteScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Favorites',
        }}
      /> */}
    </Tab.Navigator>
  );
};
export default TabNavigator;
