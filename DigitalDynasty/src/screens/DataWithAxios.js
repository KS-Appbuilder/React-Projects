import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {
  View,
  Text,
  FlatList,
  RefreshControl,
  Modal,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
} from 'react-native';

const DataWithAxios = () => {
  const [showdata, setshowdata] = useState([]);
  const [isRefresh, setisRefresh] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [pageno, setpageno] = useState(1);
  const [id, setid] = useState('');
  const [title, settitle] = useState('');

  const getApiWithAxios = async page => {
    console.log('999999999999999999999', page);
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${page}/todos`,
      );
      console.log(response);
      setshowdata(prevData => [...prevData, ...response.data]);

      // Append new data to existing data
    } catch {
      error => console.log(error);
    }
  };
  useEffect(() => {
    getApiWithAxios(1);
  }, []);

  // ... rest of your code ...

  const handleLoadMore = () => {
    setpageno(pre => pre + 1); // Increase page number
    getApiWithAxios(2); // Fetch more data
  };
  const handleRefresh = () => {
    setisRefresh(true);
    getApiWithAxios(1);
    setisRefresh(false);
  };

  return (
    <View style={Styles.main}>
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={isRefresh}
              onRefresh={() => handleRefresh()}
            />
          }
          data={showdata}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View style={Styles.itemContainer}>
              <Text>{item.id}</Text>
              <Text>{item.title}</Text>
            </View>
          )}
          onEndReached={() => handleLoadMore()} // Load more data when user scrolls to bottom
          onEndReachedThreshold={0.5} // Trigger when user scrolls 50% of the list
        />
      </View>
      <Modal transparent={true} animationType="fade" visible={showModal}>
        <View style={Styles.centeredView}>
          <View style={Styles.modalView}>
            <TouchableOpacity onPress={() => setShowModal(false)}>
              <Image
                source={require('../assets/closeIcon.jpg')}
                style={{height: 25, width: 25, marginBottom: 30}}
              />
            </TouchableOpacity>
            <View style={Styles.inputContainer}>
              <TextInput
                style={Styles.input}
                placeholder="Enter id"
                keyboardType="number-pad"
                onChangeText={text => setid(text)}
              />
            </View>
            <View style={Styles.inputContainer}>
              <TextInput
                style={Styles.input}
                placeholder="Enter a Title"
                onChangeText={text => settitle(text)}
              />
            </View>
            <View style={Styles.inputContainer}></View>
            {/* <TouchableOpacity onPress={postdata} style={Styles.saveButton}>
              <Text style={Styles.buttonText}>Post Data</Text>
            </TouchableOpacity> */}
            {/* <TouchableOpacity onPress={updateApiData} style={Styles.saveButton}>
              <Text style={Styles.buttonText}>Update Data</Text>
            </TouchableOpacity> */}
          </View>
        </View>
      </Modal>

      <View style={Styles.addButtonContainer}>
        <TouchableOpacity
          onPress={() => setShowModal(true)}
          style={Styles.addButton}>
          <Text style={Styles.buttonText}>Add Details</Text>
        </TouchableOpacity>
      </View>
      <Text>Pakistan Zindabad</Text>
    </View>
  );
};

export default DataWithAxios;
const Styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    alignItems: 'center',
    marginVertical: 10,
  },
  itemContainer: {
    backgroundColor: 'skyblue',
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
  },
  centeredView: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  modalView: {
    backgroundColor: 'skyblue',
    padding: 40,
    borderRadius: 20,
    shadowColor: 'black',
    elevation: 5,
    marginBottom: 10,
  },
  inputContainer: {
    borderRadius: 9,
    width: 360,
    flexDirection: 'row',
    color: 'black',
    fontSize: 16,
    backgroundColor: 'lightgrey',
    marginBottom: 20,
  },
  input: {marginLeft: 8},
  saveButton: {
    backgroundColor: 'skyblue',
    height: 30,
    width: 100,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonContainer: {marginTop: 20, alignItems: 'center'},
  addButton: {
    backgroundColor: 'skyblue',
    height: 30,
    width: 100,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// import axios from 'axios';
// // export const axiosGetApi = async () => {
// //   // Define your axios GET request here

// //   const response = await axios({
// //     method: 'get',
// //     url: 'http://10.0.2.2:3000/posts',
// //   });

// //   return response.data;
// // };

// // export const axiosPostApi = async data => {
// //   // Define your axios GET request here

// //   const response = await axios({
// //     method: 'post',
// //     url: 'http://10.0.2.2:3000/posts',
// //     data: data,
// //   });

// //   return response.data;
// // };
// // export const axiosDeleteApi = async id => {
// //   // Define your axios GET request here

// //   const response = await axios({
// //     method: 'delete',
// //     url: 'http://10.0.2.2:3000/posts' + id,
// //   });

// //   return response.data;
// // };
// import React, {useEffect, useState} from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   ScrollView,
//   StyleSheet,
//   RefreshControl,
//   Modal,
//   TouchableOpacity,
//   Image,
//   TextInput,
// } from 'react-native';
// const DataWithAxios = () => {
//   const [showdata, setshowdata] = useState([]);
//   const [isRefresh, setisRefresh] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [pageno, setpageno] = useState(1);
//   const [id, setid] = useState('');
//   const [title, settitle] = useState('');

//   const getApiWithAxios = async () => {
//     try {
//       const response = await axios.get(
//         `https://jsonplaceholder.typicode.com/users/${pageno}/todos`,
//       );
//       console.log(response);
//       setshowdata(response.data);
//     } catch {
//       error => console.log(error);
//     }
//   };
//   const postdata = async () => {
//     try {
//       const response = await axios.post(
//         'https://jsonplaceholder.typicode.com/todos',
//         {
//           id: id, // Include the id and title in the request payload
//           title: title,
//           // Add other properties if needed
//         },
//       );
//       console.log(response);
//       setshowdata(response.data);
//       setShowModal(false); // Close the modal after successful post
//     } catch (error) {
//       console.error(error);
//     }
//     // It's unclear why you are calling getApiWithAxios() here, so make sure this is intended.
//     getApiWithAxios();
//   };
//   const updateApiData = async () => {
//     try {
//       const response = await axios.put(
//         'https://jsonplaceholder.typicode.com/todos',
//         {
//           id: id, // Include the id and title in the request payload
//           title: title,
//           // Add other properties if needed
//         },
//       );
//       console.log(response);
//       setshowdata(response.data);
//       setShowModal(false); // Close the modal after successful post
//     } catch (error) {
//       console.error(error);
//     }
//     // It's unclear why you are calling getApiWithAxios() here, so make sure this is intended.
//     getApiWithAxios();
//   };
//   useEffect(() => {
//     getApiWithAxios();
//   }, []);
//   const handleRefresh = async () => {
//     setisRefresh(true);
//     setpageno(pageno + 1);
//     await getApiWithAxios();
//     setisRefresh(false);
//   };
//   return (
//     <View style={Styles.main}>
//       <View>
//         <FlatList
//           showsVerticalScrollIndicator={false}
//           refreshControl={
//             <RefreshControl refreshing={isRefresh} onRefresh={handleRefresh} />
//           }
//           data={showdata}
//           keyExtractor={item => item.id.toString()}
//           renderItem={({item}) => (
//             <View style={Styles.itemContainer}>
//               <Text>{item.id}</Text>
//               <Text>{item.title}</Text>
//             </View>
//           )}
//         />
//       </View>
//       <Modal transparent={true} animationType="fade" visible={showModal}>
//         <View style={Styles.centeredView}>
//           <View style={Styles.modalView}>
//             <TouchableOpacity onPress={() => setShowModal(false)}>
//               <Image
//                 source={require('../assets/closeIcon.jpg')}
//                 style={{height: 25, width: 25, marginBottom: 30}}
//               />
//             </TouchableOpacity>
//             <View style={Styles.inputContainer}>
//               <TextInput
//                 style={Styles.input}
//                 placeholder="Enter id"
//                 keyboardType="number-pad"
//                 onChangeText={text => setid(text)}
//               />
//             </View>
//             <View style={Styles.inputContainer}>
//               <TextInput
//                 style={Styles.input}
//                 placeholder="Enter a Title"
//                 onChangeText={text => settitle(text)}
//               />
//             </View>
//             <View style={Styles.inputContainer}></View>
//             <TouchableOpacity onPress={postdata} style={Styles.saveButton}>
//               <Text style={Styles.buttonText}>Post Data</Text>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={updateApiData} style={Styles.saveButton}>
//               <Text style={Styles.buttonText}>Update Data</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>

//       <View style={Styles.addButtonContainer}>
//         <TouchableOpacity
//           onPress={() => setShowModal(true)}
//           style={Styles.addButton}>
//           <Text style={Styles.buttonText}>Add Details</Text>
//         </TouchableOpacity>
//       </View>
//       <Text>Pakistan Zindabad</Text>
//     </View>
//   );
// };
// export default DataWithAxios;

// const Styles = StyleSheet.create({
//   main: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//     alignItems: 'center',
//     marginVertical: 10,
//   },
//   itemContainer: {
//     backgroundColor: 'skyblue',
//     padding: 10,
//     marginVertical: 5,
//     borderRadius: 8,
//   },
//   centeredView: {flex: 1, justifyContent: 'center', alignItems: 'center'},
//   modalView: {
//     backgroundColor: 'skyblue',
//     padding: 40,
//     borderRadius: 20,
//     shadowColor: 'black',
//     elevation: 5,
//     marginBottom: 10,
//   },
//   inputContainer: {
//     borderRadius: 9,
//     width: 360,
//     flexDirection: 'row',
//     color: 'black',
//     fontSize: 16,
//     backgroundColor: 'lightgrey',
//     marginBottom: 20,
//   },
//   input: {marginLeft: 8},
//   saveButton: {
//     backgroundColor: 'skyblue',
//     height: 30,
//     width: 100,
//     borderRadius: 9,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   addButtonContainer: {marginTop: 20, alignItems: 'center'},
//   addButton: {
//     backgroundColor: 'skyblue',
//     height: 30,
//     width: 100,
//     borderRadius: 9,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
