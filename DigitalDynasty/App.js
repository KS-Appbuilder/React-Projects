import {LinkingContext, NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Text, View, StatusBar} from 'react-native';
import StackNavigator from './src/navigations/StackNavigator';
import TabNavigator from './src/navigations/TabNavigator';
const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        transparent
        backgroundColor="transparent"
        barStyle={'dark-content'}
        hidden={false}></StatusBar>
      <StackNavigator />
    </NavigationContainer>
  );
};
export default App;
