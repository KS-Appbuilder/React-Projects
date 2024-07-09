// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import FruitList from './components/FruitList';
import DetailScreen from './components/DetailScreen';
import CartScreen from './components/CartScreen';
import SplashScreen from './components/SplashScreen';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="FruitList"
      screenOptions={{
        headerStyle: { backgroundColor: '#9CC4B2' },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontSize: 25,
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="FruitList" component={FruitList} options={{ title: 'Fruit List' }} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} options={{ title: 'Detail Screen' }} />
      <Stack.Screen name="CartScreen" component={CartScreen} options={{ title: 'Shopping Cart' }} />
    </Stack.Navigator>
  );
};

const CounterApp = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="MainStack"
          component={MainStack}
          options={{headerShown:false,
            tabBarIcon: ({ color, size }) => (
              <Image source={require('./assets/home.png')} style={{ height: 24, width: 24 }} />
            ),
          }}
        />
        <Tab.Screen name="Detail List" component={DetailScreen} options={{ tabBarVisible: false }} />
        <Tab.Screen name="Shopping Cart" component={CartScreen} options={{ tabBarVisible: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default CounterApp;
