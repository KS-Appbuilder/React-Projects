import React, {useEffect} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';

import Home from './Home';

const SplashScreen = props => {
  useEffect(() => {
    const timer = setTimeout(() => {
      props.navigation.navigate('LoginScreen'); // Use replace instead of navigate to prevent going back to the splash screen
    }, 5000);

    return () => clearTimeout(timer); // Clear the timeout if the component is unmounted
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/Logo1.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // gifImage: {
  //   width: 200, // Adjust the width as needed
  //   height: 200, // Adjust the height as needed
  // },
  text: {
    fontSize: 20,
    color: '#40040b',
    fontWeight: 'bold',
    marginTop: 10, // Add margin to separate text from the image
  },
});

export default SplashScreen;
