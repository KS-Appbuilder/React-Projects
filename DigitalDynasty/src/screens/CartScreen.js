import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from 'react-native';
import {DIMENSION, Icons} from '../components/Theme';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {
  addToCart,
  decreaseQty,
  increaseQty,
  removeFromCart,
} from '../reduxservices/action';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CartScreen = () => {
  const items = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleRemoveCart = index => {
    dispatch(removeFromCart(index));
  };

  const handleByMe = item => {
    navigation.navigate('DetailScreen', {item});
  };

  const setTotal = () => {
    let total = 0;
    items.forEach(item => {
      total += item.qty * item.price;
    });

    return total;
  };

  return (
    <View style={styles.main}>
      <View style={styles.innerView}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            source={require('../assets/backarrow.png')}
            style={styles.icons}
          />
        </TouchableOpacity>
        <Text style={styles.headerTxt}>Cart</Text>
      </View>
      <FlatList
        vertical
        data={items ?? []}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => (
          <View style={styles.card}>
            <TouchableOpacity onPress={() => handleByMe(item)}>
              <View style={styles.itemContainer}>
                <Image source={item?.image} style={styles.cardImage} />
                <View style={styles.textContainer}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.subtitle}>{item.subtitle}</Text>
                  <Text style={styles.price}>{'Rs ' + item.price}</Text>
                </View>
              </View>
            </TouchableOpacity>
            <View style={styles.actionContainer}>
              <TouchableOpacity
                onPress={() => {
                  dispatch(addToCart(item));
                  dispatch(increaseQty(item));
                }}>
                <Image
                  source={require('../assets/add.png')}
                  style={styles.actionIcon}
                />
              </TouchableOpacity>
              <Text style={styles.quantity}>{item.qty}</Text>
              <TouchableOpacity
                onPress={() => {
                  if (item.qty > 1) {
                    dispatch(decreaseQty(item.id));
                  } else {
                    dispatch(removeFromCart(index));
                    dispatch(decreaseQty(item.id));
                  }
                }}>
                <Image
                  source={require('../assets/subtract.png')}
                  style={styles.actionIcon}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleRemoveCart(index)}>
                <Image
                  source={require('../assets/closeIcon.jpg')}
                  style={styles.actionIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      {items?.length > 0 && (
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>
            {'Total Quantity: ' + items.length}
          </Text>
          <Text style={styles.totalText}>
            {'SubTotal: Rs' + setTotal().toFixed(2)}
          </Text>
          <Text style={styles.totalText}>
            {'Total: Rs' + setTotal().toFixed(2)}
          </Text>
          <View style={styles.payoutButton}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('PaymentScreen', {
                  Toatalquantity: items.length,
                  subtotal: setTotal(),
                  total: setTotal(),
                })
              }>
              <Text style={{textAlign: 'center', color: 'white', marginTop: 5}}>
                Check Payout
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  main: {flex: 1, padding: 15},
  card: {
    borderRadius: 10,
    backgroundColor: 'lightgrey',
    marginBottom: 10,
    padding: 10,
    marginVertical: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    resizeMode: 'cover',
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: 'black',
  },

  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,

    justifyContent: 'space-around',
  },
  actionIcon: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  quantity: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  totalContainer: {
    backgroundColor: 'white',
    borderColor: 'lightgrey',
    borderWidth: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  totalText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  price: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
  },
  icons: {
    height: Icons.height,
    width: Icons.width,
    borderRadius: Icons.borderRadius,
    margin: 10,
  },
  innerView: {
    flexDirection: 'row',
    borderColor: 'white',
    shadowColor: 'lightgrey',
    elevation: 10,
    borderWidth: 7,
    borderRadius: 20,
  },
  headerTxt: {fontWeight: '700', marginTop: 10, fontSize: 20, color: 'black'},
  payoutButton: {
    width: 110,
    height: 50,
    backgroundColor: '#45a7c4',
    borderColor: 'lightgrey',
    borderWidth: 8,
    position: 'absolute',
    right: 0,
    top: 40,
  },
});
