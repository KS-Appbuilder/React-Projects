import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {addToCart, add_to_cart} from '../reduxservices/action';
import {Icons} from '../components/Theme';

const ProductScreen = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState([]);
  const [isadded, setisadded] = useState('');
  // const items = useSelector(state => state.CallApi);
  const dispatch = useDispatch();
  const handleByMe = item => {
    setSelectedItem(item);
    navigation.navigate('DetailScreen', {item});
  };
  const card = [
    {
      id: 1,
      title: 'Samsung Phone',
      description:
        ' Samsung Ultra Edge 16 with High resolution Camera and 256GB Permenant Storage.',
      price: 2322.98,
      icon: require('../assets/add.png'),
      image: require('../assets/card1img.jpg'),
      qty: 0,
    },
    {
      id: 2,
      title: 'Apple Phone',
      description:
        ' Iphone 15 pro Max With 1TB Storage and with High quality solo-mo and resolution.',
      price: 220.98,
      icon: require('../assets/add.png'),
      image: require('../assets/cardimg.jpg'),
      qty: 0,
    },
    {
      id: 3,
      title: 'Infinix Phone',
      description:
        ' It has 256 GB of storage, 8 GB of RAM, and is available in various colors.',
      price: 170.98,
      icon: require('../assets/add.png'),
      image: require('../assets/card2.jpg'),
      qty: 0,
    },
    {
      id: 4,
      title: 'Infinix Phone',
      description:
        ' It has 256 GB of storage, 8 GB of RAM, and is available in various colors.',
      price: 170.98,
      icon: require('../assets/add.png'),
      image: require('../assets/card2.jpg'),
      qty: 0,
    },
    {
      id: 5,
      title: 'Infinix Phone',
      description:
        ' It has 256 GB of storage, 8 GB of RAM, and is available in various colors.',
      price: 170.98,
      icon: require('../assets/add.png'),
      image: require('../assets/card2.jpg'),
      qty: 0,
    },
    {
      id: 6,
      title: 'Infinix Phone',
      description:
        ' It has 256 GB of storage, 8 GB of RAM, and is available in various colors.',
      price: 170.98,
      icon: require('../assets/add.png'),
      image: require('../assets/card2.jpg'),
      qty: 0,
    },
    {
      id: 7,
      title: 'Infinix Phone',
      description:
        ' It has 256 GB of storage, 8 GB of RAM, and is available in various colors.',
      price: 170.98,
      icon: require('../assets/add.png'),
      image: require('../assets/card2.jpg'),
      qty: 0,
    },
  ];

  // console.log('apiData:', items);
  const handleAddtoCart = item => {
    // Update the isadded state to indicate that the item has been added

    // Dispatch an action to add the item to the cart
    dispatch(addToCart(item));
  };

  // useEffect(
  //   items => {
  //     // Check if apiData is populated
  //     setLoading(false);
  //   },
  //   [items],
  // ); // Add apiData as a dependency to useEffect

  return (
    <View style={styles.main}>
      <View style={styles.innerView}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('HomeScreen');
          }}>
          <Image
            source={require('../assets/backarrow.png')}
            style={styles.icons}
          />
        </TouchableOpacity>
        <Text style={styles.headerTxt}> All Products</Text>
      </View>
      <FlatList
        ListEmptyComponent={
          loading ? (
            <ActivityIndicator
              size="large"
              color="#448cea"
              style={{marginTop: 20}}
            />
          ) : (
            <Text>No items found</Text>
          )
        }
        vertical
        data={card ?? []}
        keyExtractor={item => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <View style={styles.grid}>
            <TouchableOpacity
              key={item.id}
              style={styles.card}
              onPress={() => handleByMe(item)}>
              <Image source={item.image} style={styles.cardImage} />
              <Text style={[styles.cardTxt, {fontSize: 15}]}>
                {item.category}
              </Text>
              <Text
                style={[styles.cardTxt, {fontWeight: 'bold', fontSize: 20}]}>
                {item.title}
              </Text>
              {/* <Text style={[styles.cardTxt, {fontSize: 15, fontWeight: '700'}]}>
                {'Rating :' + item.rating.rate}
              </Text>
              <Text style={[styles.cardTxt, {fontSize: 15, fontWeight: '500'}]}>
                {'In Stock :' + item.rating.count}
              </Text> */}
              <Text style={[styles.cardTxt, {fontSize: 15}]}>
                {item.description}
              </Text>

              <View style={styles.addIcon}>
                <Text
                  numberOfLines={1}
                  style={[styles.cardTxt, {fontWeight: 'bold', fontSize: 20}]}>
                  {'Rs' + item.price}
                </Text>
                {item.isadded ? (
                  <Text style={styles.counter}>Added</Text>
                ) : (
                  <TouchableOpacity onPress={() => handleAddtoCart(item)}>
                    <Image
                      source={require('../assets/add.png')}
                      style={styles.addIconImg}
                    />
                  </TouchableOpacity>
                )}
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  main: {flex: 1, paddingLeft: 10, paddingRight: 10},
  innerView: {
    flexDirection: 'row',
    borderColor: 'lightgrey',
    borderWidth: 7,
    borderRadius: 20,

    // justifyContent: "",
  },
  headerImage: {height: 30, width: 30, borderRadius: 50},
  subHeader: {marginVertical: 20},
  subHeaderTxt1: {fontSize: 25, fontWeight: '900', color: 'black'},
  subHeaderTxt2: {fontSize: 28, fontWeight: '900', color: '#448cea'},
  searchBar: {
    flexDirection: 'row',
    backgroundColor: 'lightgrey',
    borderRadius: 20,
  },
  searchBarImg: {
    height: 25,
    width: 25,
    borderRadius: 50,
    margin: 10,
  },
  headerTxt: {fontWeight: '700', marginTop: 10, fontSize: 20, color: 'black'},
  slider: {marginRight: 5, marginVertical: 25},
  sliderImg: {
    borderRadius: 25,
    width: 358,
    height: 200,
    shadowColor: 'grey',

    borderColor: '#448cea',
    opacity: 40,
  },
  rival: {fontSize: 22, fontWeight: '900', fontStyle: 'normal', color: 'black'},
  rivalView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productBox: {height: 35, width: 35},

  // grid: {
  //   marginVertical: 20,
  // },
  card: {
    width: 190, // Adjust the width based on your preference
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: 'lightgrey',
    padding: 10,
    marginVertical: 10,
    marginRight: 10,
  },
  cardImage: {
    borderRadius: 10,
    resizeMode: 'cover',
    width: '100%',
    height: 100,
  },
  addIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardTxt: {textAlign: 'justify', color: 'black'},
  addIconImg: {height: 30, width: 30, borderRadius: 20},

  icon: {
    borderRadius: Icons.borderRadius,
    height: Icons.height,
    width: Icons.width,
  },
  counter: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  icons: {
    height: Icons.height,
    width: Icons.width,
    borderRadius: Icons.borderRadius,
    margin: 10,
  },
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
    borderRadius: 12,

    // flex: 1,
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 10,
  },
});
