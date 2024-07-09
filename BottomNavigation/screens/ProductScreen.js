import React from 'react';
import {
  Text,
  TextInput,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';

const ProductScreen = ({navigation}) => {
  const woodsarray = [
    {name: 'Popular'},
    {name: 'Recommend'},
    {name: 'New'},
    {name: 'Oldest'},
    {name: 'People'},
  ];
  const mypics = [
    {id: 1, Image: require('../assets/img1.jpeg')},
    {id: 2, Image: require('../assets/img2.jpg')},
  ];
  const likesman = [
    {id: 1, Img: require('../assets/person1.jpg'), name: 'john'},
    {id: 2, Img: require('../assets/person2.jpg'), name: 'john1'},
    {id: 3, Img: require('../assets/person3.jpg'), name: 'john3'},
    {id: 4, Img: require('../assets/person4.jpg'), name: 'john4'},
    {id: 5, Img: require('../assets/person5.jpg'), name: 'john5'},
  ];

  return (
    <View>
      <View style={styles.header}>
        <View>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Image
              source={require('../assets/drawer.png')}
              style={{height: 25, width: 25}}
            />
          </TouchableOpacity>

          <Text style={styles.text}>Kelly Hoppen</Text>
          <Text style={{color: 'grey'}}>Interior designer</Text>
        </View>
        <TouchableOpacity>
          <Image
            style={styles.image}
            source={require('../assets/search.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={{}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {/* <ScrollView horizontal={true}> */}

          {woodsarray.map(item => {
            console.log('kkjj', item.name);
            //  <TouchableOpacity>
            return (
              <TouchableOpacity
                activeOpacity={0.7}
                underlayColor="black"
                style={{margin: 12}}>
                <Text style={{color: 'grey', fontSize: 16, fontWeight: '700'}}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
            //
          })}
        </ScrollView>
      </View>
      <View>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={mypics}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={{marginHorizontal: 22}}>
              <Image
                source={item.Image}
                style={{height: 350, width: 275, borderRadius: 20}}
              />
            </View>
          )}
        />
      </View>
      <View style={{flexDirection: 'row', margin: 18}}>
        <Image
          source={require('../assets/favourite.jpg')}
          style={{height: 35, width: 35}}
        />
        <Image
          source={require('../assets/person.png')}
          style={{height: 35, width: 35}}
        />
      </View>
      <View style={{marginHorizontal: 16}}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={likesman}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={{marginRight: 11}}>
              <Image
                source={item.Img}
                style={{height: 60, width: 60, borderRadius: 50}}
              />
              <Text style={{textAlign: 'center'}}>{item.name}</Text>
            </View>
          )}
        />
      </View>
      <View style={styles.footer}>
        <View style={{borderCurve: 'circular'}}>
          <Text style={styles.text}>Tanya</Text>
          <Text style={{color: 'grey'}}>Manager</Text>
        </View>
        <Text> +$650</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    height: 40,
    width: 40,
    // backgroundColor:"grey"
  },
  header: {
    // flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    margin: 17,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    fontStyle: 'normal',
    fontFamily: 'String',
  },
  footer: {
    // flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    margin: 17,
  },
});
export default ProductScreen;
