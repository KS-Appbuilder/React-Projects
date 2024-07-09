import React from 'react';
import {Text, View, Button} from 'react-native';
const FeeedScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => navigation.navigate('NotificationScreen')}
        title="Go to notifications"
      />
    </View>
  );
};
export default FeeedScreen;
