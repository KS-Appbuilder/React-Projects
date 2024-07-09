// import React, { useEffect } from "react";
// import { Text, View, Image, StyleSheet } from 'react-native';

// const SplashScreen = (props) => {
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       props.navigation.navigate('FruitList'); // Use replace instead of navigate to prevent going back to the splash screen
//     }, 3000);

//     return () => clearTimeout(timer); // Clear the timeout if the component is unmounted

//   }, []);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Splash Screen</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 30,
//   },
// });

// export default SplashScreen;
