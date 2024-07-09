import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import DocumentPicker, {types} from 'react-native-document-picker';
import {profilebuilder} from '../reduxservices/profileSlice';
import {useNavigation} from '@react-navigation/native';
import {setLoginData, setLogoutData} from '../reduxservices/loginSlice';

const ProfileScreen = () => {
  const {email, name} = useSelector(state => state.authentication);
  const navigation = useNavigation();
  const {image} = useSelector(state => state.profile);

  const dispatch = useDispatch();

  const handleFilePicker = async () => {
    try {
      const response = await DocumentPicker.pick({
        type: [types.images],
        allowMultiSelection: false,
        presentationStyle: 'fullScreen',
      });

      dispatch(profilebuilder(response[0].uri)); // Dispatch selected image URI to Redux store
    } catch (error) {
      console.log(error);
    }
  };
  const handleLogoutData = () => {
    dispatch(setLogoutData());
    navigation.navigate('LoginScreen');
  };

  return (
    <View style={styles.main}>
      <View style={styles.innerView}>
        <Image
          style={styles.outerImage}
          source={require('../assets/profileback.png')}
        />
        <TouchableOpacity onPress={handleFilePicker} style={styles.touchable}>
          {image !== '' && (
            <Image source={{uri: image}} style={styles.selectedImage} />
          )}

          <Image
            style={styles.insideImage}
            source={require('../assets/add.png')}
          />
        </TouchableOpacity>
        <View style={styles.navigation}>
          <Text style={styles.nameText}>{name}</Text>
          <Text style={styles.emailText}>{email}</Text>
        </View>
      </View>

      {/* Centered view for the "Pakistan" text and icon */}
      <View style={styles.centeredView}>
        <TouchableOpacity
          style={styles.navigationItem}
          onPress={() => navigation.navigate('FavoriteScreen')}>
          <Image
            source={require('../assets/addfavorite.jpg')}
            style={styles.actionIcon}
          />
          <Text style={styles.navigationText}>Favorites </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navigationItem}
          onPress={() => navigation.navigate('OrderScreen')}>
          <Image
            source={require('../assets/orders1.png')}
            style={styles.actionIcon}
          />
          <Text style={styles.navigationText}>Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navigationItem}
          onPress={() => navigation.navigate('AddToCartScreen')}>
          <Image
            source={require('../assets/shopping.png')}
            style={styles.actionIcon}
          />
          <Text style={styles.navigationText}>Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navigationItem}
          onPress={() => handleLogoutData()}>
          <Image
            source={require('../assets/backarrow.jpg')}
            style={styles.actionIcon}
          />
          <Text style={styles.navigationText}>LogOut</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  innerView: {
    justifyContent: 'center',
    height: '50%', // Adjusted to half of the screen
    alignItems: 'center',
  },
  outerImage: {
    height: '100%', // Adjusted to cover the whole innerView height
    width: '100%',
    resizeMode: 'stretch',
  },
  touchable: {
    height: 120,
    width: 120,
    borderRadius: 50,
    position: 'absolute',
    top: 220,
    bottom: 10,
  },
  selectedImage: {
    height: 120,
    width: 120,
    borderRadius: 50,
    position: 'absolute',
  },
  insideImage: {
    height: 40,
    width: 45,
    borderRadius: 80,
    position: 'absolute',
    left: 60,
    top: 90,
  },
  navigation: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameText: {
    paddingTop: 30,
    fontSize: 18,
    fontWeight: '700',
    marginVertical: 8,
  },
  emailText: {
    backgroundColor: 'lightgrey',
    borderRadius: 20,
    height: 25,
    width: 220,
    paddingLeft: 14,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navigationItem: {
    flexDirection: 'row',
    marginVertical: 10,
    borderColor: 'lightgrey',
    // borderBlockColor: 'lightgrey',
    borderWidth: 2,
    width: '100%',
    paddingLeft: 15,
  },
  navigationText: {
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 10,
  },
  actionIcon: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
});
