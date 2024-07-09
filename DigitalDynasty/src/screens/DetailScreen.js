import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
  Text,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart} from '../reduxservices/action';
import {
  addToFavorite,
  removeFromFavorite,
} from '../reduxservices/favoriteSlice';
import {updateLocation} from '../reduxservices/locationSlice';

const DetailScreen = ({route, navigation}) => {
  const [addfavorite, setAddFavorite] = useState();
  const dispatch = useDispatch();
  const {item} = route.params;

  // useEffect(() => {}, []);

  const {city, country} = useSelector(state => state.location);

  const collections = useSelector(state => state.favorites);
  const isFavorite = collections.some(favorite => favorite.id === item.id);

  const togglefavorite = item => {
    if (isFavorite) {
      dispatch(removeFromFavorite(item.id));
      hideToast();
    } else {
      dispatch(addToFavorite(item));
      showToast();
    }
  };

  const showToast = () => {
    ToastAndroid.showWithGravity(
      'Successfully added to favorite',
      ToastAndroid.CENTER,
      ToastAndroid.BOTTOM,
    );
  };

  const hideToast = () => {
    ToastAndroid.showWithGravity(
      'Successfully removed from favorite',
      ToastAndroid.CENTER,
      ToastAndroid.BOTTOM,
    );
  };

  return (
    <View style={styles.mainView}>
      <View style={styles.detailView}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../assets/backarrow.png')}
              style={styles.icons}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => togglefavorite(item)}>
            <Image
              source={
                isFavorite
                  ? require('../assets/addfavorite.jpg')
                  : require('../assets/heart.jpg')
              }
              style={styles.icons}
            />
          </TouchableOpacity>
        </View>
        {/* Assuming detailData.image is the correct source */}
        <Image source={item.image} style={styles.image} />
      </View>
      <View style={styles.content}>
        <View style={styles.textData}>
          <Text style={styles.titletxt}>{item.title}</Text>
          <Text style={styles.pricetxt}> {'Rs :' + item.price}</Text>
        </View>
        <View style={styles.ratings}>
          <Text style={styles.titletxt}>⭐⭐⭐⭐⭐(4.9)</Text>
        </View>
        <View style={styles.description}>
          <Text style={styles.descriptiontxt}>{item.description}</Text>
        </View>
        <View style={styles.location}>
          <Image source={require('../assets/map.png')} style={styles.icons} />
          <Text style={styles.descriptiontxt}>
            {city} : {country}
          </Text>
        </View>
        <View style={styles.buynows}>
          <TouchableOpacity
            onPress={() => {
              dispatch(addToCart(item));
            }}>
            <Text style={styles.buttontxt}>Add To Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  mainView: {flex: 1, backgroundColor: 'white'},
  detailView: {flex: 1},
  image: {height: 400, width: '100%', resizeMode: 'stretch'},
  icons: {height: 25, width: 25, borderRadius: 50, margin: 10},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 10,
    left: 0,
    right: 0,
    zIndex: 1,
    padding: 15,
  },
  textData: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 10,
  },
  content: {flex: 1, borderRadius: 8, backgroundColor: 'white'},
  titletxt: {fontSize: 22, fontWeight: 'bold', color: 'black'},
  pricetxt: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    backgroundColor: 'skyblue',
    borderRadius: 5,
  },
  ratings: {flexDirection: 'row', marginHorizontal: 20, marginTop: 10},
  description: {marginHorizontal: 20},
  descriptiontxt: {
    fontSize: 16,
    fontWeight: '700',
    color: 'black',
    marginTop: 14,
  },
  location: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 14,
    alignItems: 'center',
  },
  buynows: {
    backgroundColor: 'skyblue',
    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: 10,
    height: 40,
    justifyContent: 'center',
  },
  buttontxt: {
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
  },
});
