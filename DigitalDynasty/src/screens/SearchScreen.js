//

// import {
//   Text,
//   View,
//   ToastAndroid,
//   FlatList,
//   Button,
//   TextInput,
//   Image,
//   SectionList,
// } from 'react-native';
// // const users = [
// //   {
// //     id: 1,
// //     name: 'khalid',
// //     age: 14,
// //     data: ['computer', 'Physics', 'Biology'],
// //   },
// //   {
// //     id: 2,
// //     name: 'khalid',
// //     age: 14,
// //     data: ['computer', 'Physics', 'Biology'],
// //   },
// // ];
// const SearchScreen = props => {
//   const [showdata, setshowdata] = useState([]);
//   // const [formdata, setformData] = useState([]);
//   const [id, setid] = useState('');
//   const [name, setname] = useState('');

//   const postWithForm = async () => {
//     console.warn(id);
//     console.warn(name);
//     const Url = 'http://10.0.2.2:3000/posts';
//     let Result = await fetch(Url, {
//       method: 'POST',
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify({id, name}),
//     });
//     Result = await Result.json();
//     if (Result) {
//       console.warn('successfully post data');
//       collectApiData();
//     }
//   };

//   const showToast = () => {
//     ToastAndroid.show(
//       'Login Successfully',
//       ToastAndroid.SHORT,
//       ToastAndroid.CENTER,
//       ToastAndroid.TOP,
//     );
//   };

//   const collectApiData = async () => {
//     const url = 'http://10.0.2.2:3000/posts';
//     let result = await fetch(url);
//     result = await result.json();

//     setshowdata(result);
//   };
//   // useEffect(() => {
//   //   getApiWithAxios();
//   // }, []);

//   // };
//   useEffect(() => {
//     collectApiData();
//   }, []);
//   // const postApi = async () => {
//   //   const data = {id: '8', title: 'lohari'};
//   //   const url = `http://10.0.2.2:3000/posts`;
//   //   let result = await fetch(url, {
//   //     method: 'POST',
//   //     headers: {'content-type': 'application/json'},
//   //     body: JSON.stringify(data),
//   //   });
//   //   let solution = await result.json();
//   //   collectApiData();
//   //   console.warn(solution);
//   // };
//   const Deleteapidata = async id => {
//     const url = 'http://10.0.2.2:3000/posts';
//     let result = await fetch(`${url}/${id}`, {method: 'Delete'});
//     result = result.json();

//     if (result) {
//       console.warn('user  Deleted Succesuffly');
//       collectApiData();
//     }
//   };
//   const updateApiData = async () => {
//     // Ensure both id and title are provided before attempting to update
//     // if (!id || !title) {
//     //   console.warn('Please enter both id and title to update.');
//     //   return;
//     // }

//     const url = `http://10.0.2.2:3000/posts/${id}`; // Use the specific post id for update
//     try {
//       let result = await fetch(url, {
//         method: 'PATCH', // Use PATCH method for partial updates
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify({title}), // Only update the title
//       });

//       if (result.ok) {
//         console.warn('Successfully updated data');
//         collectApiData(); // Fetch updated data
//       } else {
//         console.warn('Failed to update data. Please check the request.');
//       }
//     } catch (error) {
//       console.error('Error updating data:', error);
//     }
//   };

//   return (
//     <View style={{flex: 1}}>
//       {showdata ? (
//         <FlatList
//           data={showdata}
//           keyExtractor={item => item.id}
//           renderItem={({item}) => (
//             <View
//               style={{
//                 flex: 1,
//                 backgroundColor: 'blue',
//                 justifyContent: 'center',
//               }}>
//               <Text style={{textAlign: 'center'}}>{item.id}</Text>
//               <Text style={{textAlign: 'center'}}>{item.name}</Text>
//               {/* <Text style={{textAlign: 'center'}}>{item.price}</Text> */}
//               <Text style={{textAlign: 'center'}}>{item.hobbies}</Text>
//               {/* <Image
//                 source={{uri: item.image}}
//                 style={{height: 200, width: 200}}
//               />  */}

//               <Button
//                 title="Deleted Item"
//                 onPress={() => Deleteapidata(item.id)}
//               />
//             </View>
//           )}
//         />
//       ) : null}
//       {/* <Button title="Post" onPress={postApi} /> */}
//       <View>
//         <TextInput
//           value={id}
//           placeholder="enter a id "
//           onChangeText={text => setid(text)}
//         />
//         <TextInput
//           value={name}
//           placeholder="enter a Title "
//           onChangeText={text => setname(text)}
//         />
//         <Button title="Post With Axios" onPress={postWithForm} />
//         <Button title="Update Item" onPress={updateApiData} />
//       </View>
//       <View>
//         <SectionList
//           sections={users}
//           keyExtractor={item => item.id}
//           renderItem={({item}) => <Text>{item}</Text>}
//           renderSectionHeader={({section: {name}}) => (
//             <View style={{backgroundColor: 'yellow'}}>
//               <Text style={{color: 'red', fontSize: 19}}>Name: {name}</Text>
//             </View>
//           )}
//         />
//       </View>
//     </View>
//   );
// };

// export default SearchScreen;
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  TextInput,
  ImageBackground,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {addToCart, add_to_cart} from '../reduxservices/action';
import {Icons} from '../components/Theme';

const SearchScreen = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState([]);
  const [isadded, setisadded] = useState('');
  const [cardData, setcardData] = useState([]);
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
      subtitle: 'Luxury ',
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
      subtitle: 'Luxury ',
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
      subtitle: 'Luxury ',
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
      subtitle: 'Luxury ',
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
      subtitle: 'Luxury ',
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
      subtitle: 'Luxury ',
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
      subtitle: 'Luxury ',
      description:
        ' It has 256 GB of storage, 8 GB of RAM, and is available in various colors.',
      price: 170.98,
      icon: require('../assets/add.png'),
      image: require('../assets/card2.jpg'),
      qty: 0,
    },
  ];

  const handleAddtoCart = item => {
    dispatch(addToCart(item));
  };

  const handleFilterData = value => {
    if (value.trim() === '') {
      setcardData([]);
    } else {
      const filter = card.filter(item =>
        item.title.toLowerCase().includes(value.toLowerCase()),
      );
      setcardData(filter);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Image
          source={require('../assets/search.jpg')}
          style={styles.searchBarImg}
        />
        <TextInput
          placeholder="What are you Looking For?"
          onChangeText={value => handleFilterData(value)}
        />
      </View>
      <FlatList
        vertical
        data={cardData.length == 0 ? card : cardData}
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
              <Text
                style={[styles.cardTxt, {fontWeight: 'bold', fontSize: 20}]}>
                {item.subtitle}
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

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  searchBar: {
    flexDirection: 'row',
    marginTop: 10,
    backgroundColor: 'lightgrey',
    borderRadius: 20,
  },
  searchBarImg: {
    height: 25,
    width: 25,
    borderRadius: 50,
    margin: 10,
  },
  card: {
    width: 180,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: 'lightgrey',
    padding: 10,
    marginVertical: 8,
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
  cardTxt: {
    textAlign: 'justify',
    color: 'black',
  },
  addIconImg: {
    height: 30,
    width: 30,
    borderRadius: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});

export default SearchScreen;
