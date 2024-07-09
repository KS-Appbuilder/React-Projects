// import React, {useEffect} from 'react';
// import {Image, View, StyleSheet} from 'react-native';
// import {COLORS} from '../components/Theme';

// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {useNavigation} from '@react-navigation/native';
// import {useSelector} from 'react-redux';
// import {signup} from '../reduxservices/SignupAction';

// const SplashScreen = props => {
//   const navigation = useNavigation();
//   const items = useSelector(state => state.authentication);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       checkLogin();
//       // Use replace instead of navigate to prevent going back to the splash screen
//     }, 5000);

//     return () => clearTimeout(timer); // Clear the timeout if the component is unmounted
//   }, []);
//   const checkLogin = async () => {
//     // const email = await AsyncStorage.getItem('Email');
//     // const password = await AsyncStorage.getItem('Password');
//     // console.log(email + '' + password);

//     if (items[0] && items[0].email) {
//       navigation.navigate('TabNavigator');
//     } else {
//       navigation.navigate('LoginScreen');
//     }
//   };

//   // Delay the rendering of the Image component by 2000 milliseconds
//   const imageTimeout = setTimeout(() => {}, 2000);

//   return (
//     <View style={styles.main}>
//       <Image source={require('../assets/Logo1.png')} style={styles.Image} />
//     </View>
//   );
// };

// export default SplashScreen;

// const styles = StyleSheet.create({
//   main: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: COLORS.backgroundColor,
//   },
//   Image: {
//     height: 300,
//     width: 300,
//     borderRadius: 10,
//     // shadowRadius: 'blue',
//     shadowColor: 'blue',
//     // elevation: 10,
//     marginBottom: 100,
//   },
// });
import React, {useEffect} from 'react';
import {Image, View, StyleSheet} from 'react-native';
import {COLORS} from '../components/Theme';

import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Animated from 'react-native-reanimated';

const SplashScreen = props => {
  const navigation = useNavigation();
  const items = useSelector(state => state.login);
  const animationScale = useSharedValue(0);
  const formatingScale = () => {
    animationScale.value = withTiming(1, {
      duration: 2000,
      // damping: 10,
      // stiffness: 100,
    });
  };
  const splashStyle = useAnimatedStyle(() => {
    return {transform: [{scale: animationScale.value}]};
  });

  useEffect(() => {
    formatingScale();
    const timer = setTimeout(() => {
      checkLogin();

      // Use replace instead of navigate to prevent going back to the splash screen
    }, 5000);

    return () => clearTimeout(timer); // Clear the timeout if the component is unmounted
  }, [items]); // Added items to dependency array

  const checkLogin = () => {
    if (items.email) {
      // Check if items[0] exists and has email property
      navigation.navigate('TabNavigator');
    } else {
      navigation.navigate('LoginScreen');
    }
  };

  return (
    <Animated.View style={[styles.main, splashStyle]}>
      <Image source={require('../assets/Logo1.png')} style={styles.Image} />
    </Animated.View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.backgroundColor,
  },
  Image: {
    height: 300,
    width: 300,
    borderRadius: 10,
    marginBottom: 100,
  },
});
