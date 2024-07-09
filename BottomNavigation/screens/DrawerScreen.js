import React from 'react';
import {ImageBackground, Text, View, Image} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

// import FeeedScreen from './FeeedScreen';
// import NotificationScreen from './NotificationScreen';
import APIScreen from './APIScreen';
import ProductScreen from './ProductScreen';
import SearchScreen from './SearchScreen';
import HomeScreen from './Home';
import FeeedScreen from './FeeedScreen';
import NotificationScreen from './NotificationScreen';
// import DrawerScreen from './DrawerScreen';
const Drawer = createDrawerNavigator();
const DrawerScreen = ({navigation}) => {
  return (
    <Drawer.Navigator
      drawerType="slide"
      drawerPosition="left"
      // drawerStyle={{
      //   backgroundColor: 'red',
      //   width: 240,
      //   marginVertical: 30,

      // }}
      drawerContent={props => <CutomeDrawer {...props} />}
      drawerContentOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'black',
        itemStyle: {marginVertical: 5},
        marginTop: 10,
      }}
      initialRouteName="ProductScreen">
      <Drawer.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{headerShown: false}}
      />

      <Drawer.Screen
        name="APIScreen"
        component={APIScreen}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};
const CutomeDrawer = props => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props} contentContainerStyle={{}}>
        <ImageBackground
          source={require('../assets/background.jpg')}
          style={{}}>
          <Image
            source={require('../assets/person3.jpg')}
            style={{
              height: 70,
              width: 70,
              margin: 20,
              borderRadius: 30,
            }}
          />
          <Text style={{color: 'white', marginLeft: 14}}>Khalid Saeed</Text>
        </ImageBackground>
        <View style={{}} />
        <View>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default DrawerScreen;
