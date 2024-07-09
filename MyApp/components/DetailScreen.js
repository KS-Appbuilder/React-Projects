// DetailScreen.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export const DetailScreen = ({ route }) => {
    
  const { item } = route.params;

 

  return (
    <View style={{ flex: 1, alignItems: 'center', marginTop:15 }}>
      
      <Image source={item.img} style={styles.image} />
      <Text style={styles.description}>
        {item.description}
      </Text>
      <Text >
        {item.price}
      </Text>
      
      
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
  },
  image: {
    width: 250,
    height: 250,
    marginVertical: 10,
    borderRadius: 30,
  },
  description: {
    fontSize: 20,
    color: 'black',
    textAlign: "center",
    margin:15
  
    
  },
  addToCartButton: {
    backgroundColor: 'black',
    borderWidth: 3,
    borderRadius: 30,
    marginTop: 10,
    width: 120,
    padding: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default DetailScreen;
