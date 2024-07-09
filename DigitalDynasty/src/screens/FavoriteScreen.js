import React from 'react';
import {
  Text,
  View,
  FlatList,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import {Icons} from '../components/Theme';
import {removeFromFavorite} from '../reduxservices/favoriteSlice';
import {useNavigation} from '@react-navigation/native';

const FavoriteScreen = ({navigation}) => {
  const collections = useSelector(state => state.favorites);
  const [selectedItem, setSelectedItem] = useState([]);

  const dispatch = useDispatch();
  console.log('collections00000', collections);
  const handleByMe = item => {
    setSelectedItem(item);
    navigation.navigate('DetailScreen', {item});
  };
  // Define handleByMe function if needed

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
        <Text style={styles.headerTxt}>Favorites </Text>
      </View>
      <FlatList
        ListEmptyComponent={
          <Text style={{textAlign: 'center', marginVertical: 20}}>
            No items found
          </Text>
        }
        vertical
        data={collections ?? []}
        keyExtractor={item => item.id.toString()} // Ensure key is a string
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => (
          <View style={styles.card}>
            <TouchableOpacity onPress={() => handleByMe(item)}>
              <View style={styles.itemContainer}>
                <Image source={item.image} style={styles.cardImage} />
                <View style={styles.textContainer}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.subtitle}>{item.subtitle}</Text>
                  <Text style={styles.price}>{'Rs ' + item.price}</Text>
                </View>
              </View>
            </TouchableOpacity>
            <View style={styles.actionContainer}>
              <TouchableOpacity
                onPress={() => dispatch(removeFromFavorite(item.id))}>
                <Image
                  source={require('../assets/closeIcon.jpg')}
                  style={styles.actionIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

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
    position: 'absolute',
    right: 6,
    top: 0,

    justifyContent: 'space-between',
  },
  actionIcon: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  quantity: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 40,
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
  },
  price: {
    fontSize: 18,
    fontWeight: '600',
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
  headerTxt: {fontWeight: '700', marginTop: 10, fontSize: 20},
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

export default FavoriteScreen;
