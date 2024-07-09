import React, {useState, useEffect, useRef} from 'react';
import {Icons} from '../components/Theme';
import DetailScreen from './DetailScreen';
import {useDispatch, useSelector} from 'react-redux';

import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  FlatList,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  ScrollView,
  ActivityIndicator,
  Modal,
  ToastAndroid,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {addToCart} from '../reduxservices/action';
import {updateLocation} from '../reduxservices/locationSlice';
import MapView, {Marker} from 'react-native-maps';
import Video from 'react-native-video';
import Slider from '@react-native-community/slider';
import Orientation from '@hortau/react-native-orientation-locker';
import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import Animated from 'react-native-reanimated';

// import {
//   useGetDataQuery,
//   useGetDataByIdQuery,
//   useAddNewPostMutation,
//   useDeletePostMutation,
//   useUpdatePostMutation,
// } from '../reduxservices/apiMethods';
// import {getProducts} from '../reduxservices/Apiactions';
// import Voice from '@react-native-voice/voice';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [fullscreen, setfullscreen] = useState(false);

  const [selectedItem, setSelectedItem] = useState([]);
  const [isadded, setisadded] = useState('');
  const [cardData, setcardData] = useState([]);
  const [productCounters, setProductCounters] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [selectedcity, setCity] = useState('');
  const [selectedCountry, setCountry] = useState('');
  const [clicked, setclicked] = useState(false);
  const [paused, setpaused] = useState(false);
  const [progress, setProgress] = useState(null);
  const [isSliderChanging, setIsSliderChanging] = useState(false);
  const [checked, setChecked] = useState(false);

  const ref = useRef();

  // const {information} = useGetDataQuery();

  // const {data} = useGetDataQuery();
  // const result = JSON.stringify(data);

  // const res = useGetDataByIdQuery(2);
  // // console.log('data fetchbyId................' + res);
  // // console.log('data' + result);
  // const [addData] = useAddNewPostMutation();
  // const [updateData] = useUpdatePostMutation();
  // const AddNewPost = async () => {
  //   const response = await addData({
  //     id: 78,
  //     title: 'DANVOUY Womens T Shirt Casual Cotton Short',
  //     price: 12.99,
  //     description:
  //       '95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.',
  //     category: "women's clothing",
  //     image: 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg',
  //     rating: {rate: 3.6, count: 145},
  //   });
  //   console.log(response);
  // };
  // const updatePost = async () => {
  //   const response = await updateData({
  //     id: 20,
  //     title: 'shalwar ',
  //     price: 12.99,
  //     description:
  //       '95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.',
  //     category: "women's clothing",
  //     image: 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg',
  //     rating: {rate: 3.6, count: 145},
  //   });
  //   console.log(response);
  // };
  // const [deletedata] = useDeletePostMutation();
  // const deletePost = async () => {
  //   const response = await deletedata('20');
  //   console.log(response);
  // };
  const [voiceResults, setVoiceResults] = useState('');
  // const listImages = [
  //   {id: 1, img: require('../assets/slider1.jpg')},
  //   {id: 2, img: require('../assets/slider2.jpg')},
  //   {id: 3, img: require('../assets/slider3.jpg')},
  // ];

  const listImages = [
    {id: 1, Video: require('../assets/apple1.mp4')},
    // {id: 2, Video: require('../assets/apple.mp4')},
    // {id: 3, Video: require('../assets/infinix.mp4')},
  ];
  const handleSyncLocationData = async () => {
    try {
      // Dispatch the action to update the redux state
      dispatch(updateLocation({city: selectedcity, country: selectedCountry}));

      // Show toast message
      showToast();

      // Close the map modal
      setShowMap(false);
    } catch (error) {
      console.error('Error updating location:', error);
      // Handle error if necessary
    }
  };

  useEffect(() => {
    // Simulating an asynchronous data fetching process
    animationTranslateY();
    animateRotate();
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, [selectedImage]);

  // const savedCity = await AsyncStorage.getItem('City');
  // const savedCountry = await AsyncStorage.getItem('Country');
  const {city, country} = useSelector(state => state.location);

  console.log(city + country);

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
  ];

  //add map values
  // const {isLoaded, loadError} = useLoadScript({
  //   googleMapsApiKey: 'AIzaSyAIqBo_V99i_l5YD-zdD-eKrRaox37j7l4',
  // });
  // const location = {
  //   lat: 27.0,
  //   lng: 76.0,
  // };
  // const mapRef = useRef();
  // const onLoad = React.useCallback(function callback(map) {
  //   mapRef.current = map;
  // }, []);

  const mapModal = () => {
    setShowMap(true);
  };

  const formatTime = seconds => {
    let mins = parseInt(seconds / 60)
      .toString()
      .padStart(2, '0');
    let secs = (Math.trunc(seconds) % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

  const handleForward = () => {
    if (ref.current && progress) {
      const newTime = progress.currentTime + 3; // Seek forward by 5 seconds
      ref.current.seek(newTime); // Seek the video
      setProgress({...progress, currentTime: newTime}); // Update seek time
    }
  };

  const handleBackward = () => {
    if (ref.current && progress) {
      const newTime = progress.currentTime - 3; // Seek backward by 5 seconds
      ref.current.seek(newTime); // Seek the video
      setProgress({...progress, currentTime: newTime}); // Update seek time
    }
  };

  const handlePlayPause = () => {
    if (ref.current && progress) {
      setpaused(!paused);
    }
  };
  const onEnd = () => {
    setpaused(true); // Pause the video
    setProgress({...progress, currentTime: 0}); // Reset progress to start
    // setIsSliderChanging(false); // Reset slider changing state
  };

  const handleSliderChange = value => {
    if (!paused) {
      setIsSliderChanging(true);
      setProgress({...progress, currentTime: value});
    }
  };

  const handleSliderComplete = value => {
    console.log(value);
    if (ref.current) {
      // Seek the video to the selected position
      ref.current.seek(value);

      if (value === progress.seekableDuration) {
        // If the slider value is equal to the duration, it means the video playback has reached its end
        // Seek the video to the beginning (time 0)
        ref.current.seek(0);

        // Pause the video
        setpaused(true);

        // Reset progress state to start
        setProgress({...progress, currentTime: 0});
      } else {
        // Update progress state
        setProgress({...progress, currentTime: value});
      }

      // Pause the video
      setpaused(true);

      // Reset slider changing state
      setIsSliderChanging(false);
    }
  };

  const openImageModal = item => {
    console.log(item);
    setSelectedImage(item.Video);
    console.log(selectedImage);
    setShowModal(true);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    setShowModal(false);
  };

  const handleFilterData = value => {
    const filter = card.filter(item =>
      item.title.toLowerCase().includes(value),
    );
    if (filter.length === 0) {
      console.log('No items found for the given search criteria');
      // Or you can set some state to indicate no items found
    } else {
      console.log('Filtered items:', filter);
      // Or you can perform other operations with the filtered data
    }
    setcardData(filter);
  };

  const closeMap = () => {
    setShowMap(false);
  };
  const handleByMe = item => {
    setSelectedItem(item);
    navigation.navigate('DetailScreen', {item});
  };
  const handleAddtoCart = item => {
    // Update the isadded state to indicate that the item has been added
    console.log(item);
    // Dispatch an action to add the item to the cart
    dispatch(addToCart(item));
  };

  const showToast = () => {
    ToastAndroid.showWithGravity(
      'Successfully added Location',
      ToastAndroid.CENTER,
      ToastAndroid.BOTTOM,
    );
  };
  const Apikey = 'AIzaSyCcOmzCU3CQyCKXlx4kkLosbDKAScZ7Qjc';

  // console.log(handleAddtoCart());
  const handleApidata = () => {
    // dispatch(getProducts());
    navigation.navigate('ProductScreen');
  };
  // const items = useSelector(state => state.CallApi);
  // console.log(items);
  const dataitems = useSelector(state => state.cart);
  const cartItemCount = dataitems ? dataitems.length : 0;
  // if (loadError) return 'Error';
  // if (!isLoaded) return 'Map';
  const translateY = useSharedValue(0);
  const rotate = useSharedValue(0);
  const animationTranslateY = () => {
    translateY.value = withSpring(20, {
      duration: 3000,
      // damping: 10, // Adjust damping to control the springiness
      // stiffness: 100, // Adjust stiffness to control the springiness// Adjust stiffness to control the springiness
    });
  };
  const rotateStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: rotate.value}],
    };
  });
  const animateRotate = () => {
    rotate.value = withTiming(1, {
      duration: 2000,
      // damping: 10,
      // stiffness: 100,
    });
  };

  const translateYStyle = useAnimatedStyle(() => {
    return {transform: [{translateY: translateY.value}]};
  });

  return (
    <KeyboardAvoidingView
      behavior="height"
      keyboardVerticalOffset={0}
      style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.main}>
            <View style={styles.innerView}>
              <TouchableOpacity onPress={() => mapModal()}>
                <Image
                  source={require('../assets/map.png')}
                  style={styles.headerImage}
                />
              </TouchableOpacity>
              <Text style={styles.headerTxt}>
                {city} : {country}
              </Text>

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('AddToCartScreen');
                }}>
                <View style={[styles.shoppincart]}>
                  <Image
                    source={require('../assets/shopping.png')}
                    style={styles.icon}
                  />
                  <Text
                    style={{color: 'black', fontSize: 19, fontWeight: 'bold'}}>
                    {cartItemCount}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.subHeader}>
              <Text style={styles.subHeaderTxt1}>Find The Most</Text>
              <Text style={styles.subHeaderTxt2}>
                Latest Electronics Gadgets
              </Text>
            </View>
            <View style={styles.searchBar}>
              <Image
                source={require('../assets/search.jpg')}
                style={styles.searchBarImg}
              />
              <TextInput
                placeholder="What are you Looking For?"
                placeholderTextColor={'black'}
                onChangeText={value => handleFilterData(value)}></TextInput>
            </View>

            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={listImages}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <Animated.View style={[styles.videoContainer, rotateStyle]}>
                  <TouchableOpacity onPress={() => setclicked(true)}>
                    {/* {console.log(item)} */}
                    <Video
                      ref={ref}
                      paused={paused}
                      source={item.Video}
                      onProgress={x => {
                        console.log(x), setProgress(x);
                      }}
                      style={styles.video}
                      resizeMode="contain"
                      muted
                    />

                    {clicked && (
                      <TouchableOpacity style={styles.controlsContainer}>
                        <View style={{flexDirection: 'row'}}>
                          <TouchableOpacity onPress={handleBackward}>
                            <Image
                              source={require('../assets/10secondbackward.png')}
                              style={[styles.controlIcon, {marginRight: 20}]}
                            />
                          </TouchableOpacity>
                          <TouchableOpacity onPress={handlePlayPause}>
                            <Image
                              source={
                                paused
                                  ? require('../assets/playbutton.png')
                                  : require('../assets/pause.png')
                              }
                              style={[styles.controlIcon, {marginRight: 20}]}
                            />
                          </TouchableOpacity>
                          <TouchableOpacity onPress={handleForward}>
                            <Image
                              source={require('../assets/10secondforward.png')}
                              style={styles.controlIcon}
                            />
                          </TouchableOpacity>
                        </View>

                        <View style={styles.sliderContainer}>
                          <Text style={styles.cardTxt2}>
                            {formatTime(progress.currentTime)}
                          </Text>
                          <Slider
                            style={{width: 200, height: 40}}
                            minimumValue={0}
                            maximumValue={progress.seekableDuration}
                            value={
                              isSliderChanging
                                ? progress.currentTime
                                : progress.currentTime
                            }
                            onValueChange={handleSliderChange}
                            onSlidingComplete={handleSliderComplete}
                            minimumTrackTintColor="white"
                            maximumTrackTintColor="black"

                            // onSlidingComplete={onEnd}
                          />

                          <Text style={styles.cardTxt2}>
                            {formatTime(progress.seekableDuration)}
                          </Text>
                          <TouchableOpacity
                            onPress={() => openImageModal(item)}>
                            <Image
                              source={require('../assets/maximize.png')}
                              style={[styles.controlIcon, {marginLeft: 10}]}
                            />
                          </TouchableOpacity>
                        </View>
                      </TouchableOpacity>
                    )}
                  </TouchableOpacity>
                </Animated.View>
              )}
            />

            <Modal
              visible={showModal}
              transparent={true}
              onRequestClose={closeImageModal}>
              <View style={styles.modalContainer}>
                <TouchableOpacity onPress={() => setclicked(true)}>
                  <Video
                    ref={ref}
                    paused={paused}
                    source={selectedImage}
                    onProgress={x => {
                      console.log(x), setProgress(x);
                    }}
                    style={{
                      width: fullscreen ? '100%' : 340,
                      height: fullscreen ? '100%' : 200,
                    }}
                    resizeMode="contain"
                    muted
                  />
                  {/* <TouchableOpacity
                    style={styles.modalCloseButton}
                    onPress={closeImageModal}>
                    <Image
                      source={require('../assets/closeIcon.jpg')}
                      style={styles.icon}
                    />
                  </TouchableOpacity> */}

                  {clicked && (
                    <TouchableOpacity style={styles.controlsContainer}>
                      <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity onPress={handleBackward}>
                          <Image
                            source={require('../assets/10secondbackward.png')}
                            style={[styles.controlIcon, {marginRight: 20}]}
                          />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handlePlayPause}>
                          <Image
                            source={
                              paused
                                ? require('../assets/playbutton.png')
                                : require('../assets/pause.png')
                            }
                            style={[styles.controlIcon, {marginRight: 20}]}
                          />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleForward}>
                          <Image
                            source={require('../assets/10secondforward.png')}
                            style={styles.controlIcon}
                          />
                        </TouchableOpacity>
                      </View>

                      <View
                        style={[
                          styles.sliderContainer,
                          {
                            // paddingHorizontal: fullscreen ? 60 : 10,
                            marginLeft: fullscreen ? '17%' : 0,
                            marginRight: fullscreen ? '5%' : 0,
                          },
                        ]}>
                        <Text style={styles.cardTxt2}>
                          {formatTime(progress?.currentTime)}
                        </Text>
                        <Slider
                          style={{
                            width: fullscreen ? '70%' : 200,
                            height: fullscreen ? '70%' : 20,
                          }}
                          minimumValue={0}
                          maximumValue={progress.seekableDuration}
                          value={
                            isSliderChanging
                              ? progress.currentTime
                              : progress.currentTime
                          }
                          onValueChange={handleSliderChange}
                          onSlidingComplete={handleSliderComplete}
                          minimumTrackTintColor="white"
                          maximumTrackTintColor="black"
                        />
                        <Text style={styles.cardTxt2}>
                          {formatTime(progress.seekableDuration)}
                        </Text>
                        <TouchableOpacity
                          onPress={() => {
                            if (fullscreen) {
                              Orientation.lockToPortrait();
                              closeImageModal();
                            } else {
                              Orientation.lockToLandscape();
                            }
                            setfullscreen(!fullscreen);
                          }}>
                          <Image
                            source={
                              fullscreen
                                ? require('../assets/minimize.png')
                                : require('../assets/fullscreen.png')
                            }
                            style={[styles.controlIcon, {marginLeft: 10}]}
                          />
                        </TouchableOpacity>
                      </View>
                    </TouchableOpacity>
                  )}
                </TouchableOpacity>
              </View>
            </Modal>

            <Modal visible={showMap} transparent={true}>
              <View style={styles.modalMapContainer}>
                <TouchableOpacity
                  style={styles.modalCloseButton}
                  onPress={closeMap}>
                  <Image
                    source={require('../assets/closeIcon.jpg')}
                    style={styles.icon}
                  />
                </TouchableOpacity>
                {/* <View style={styles.modalTextInputView}> */}
                {/* <TextInput
                    style={styles.modalTextInput}
                    onChangeText={value => setCity(value)}
                    placeholder="Enter Your City Name"></TextInput>
                  <TextInput
                    style={styles.modalTextInput}
                    onChangeText={value => setCountry(value)}
                    placeholder="Enter Your Country Name"></TextInput> */}
                <MapView
                  style={styles.map}
                  provider="google"
                  key={Apikey}
                  initialRegion={{
                    latitude: 31.582,
                    longitude: 74.3293,
                    latitudeDelta: 0.3,
                    longitudeDelta: 0.3,
                  }}>
                  <Marker
                    coordinate={{latitude: 37.78825, longitude: -122.4324}}
                    // image={{uri: 'custom_pin'}}
                    title="Marker Title"
                    description="Marker Description"
                  />
                </MapView>

                {/* <TouchableOpacity
                    onPress={() => handleSyncLocationData()}
                    style={styles.addButton}>
                    <Text style={styles.addButtonText}>Add The Location</Text>
                  </TouchableOpacity> */}
                {/* </View> */}
              </View>
            </Modal>
            <View style={[styles.rivalView]}>
              <Text style={styles.rival}>New Rivals</Text>
              <TouchableOpacity
                onPress={() => {
                  handleApidata();
                }}>
                <Image
                  source={require('../assets/productbox.jpg')}
                  style={styles.productBox}
                />
              </TouchableOpacity>
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
                  <Text>"No items found"</Text>
                )
              }
              horizontal
              data={cardData.length === 0 ? card : cardData}
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => (
                <Animated.View style={[styles.grid, translateYStyle]}>
                  <TouchableOpacity
                    key={item.id}
                    style={styles.card}
                    onPress={() => handleByMe(item)}>
                    <Image source={item.image} style={styles.cardImage} />
                    <Text
                      numberOfLines={1}
                      style={[
                        styles.cardTxt,
                        {fontWeight: 'bold', fontSize: 20},
                      ]}>
                      {item.title}
                    </Text>
                    <Text style={[styles.cardTxt, {fontSize: 15}]}>
                      {item.subtitle}
                    </Text>
                    <View style={styles.addIcon}>
                      <Text
                        numberOfLines={1}
                        style={[
                          styles.cardTxt,
                          {fontWeight: 'bold', fontSize: 20},
                        ]}>
                        {'Rs' + item.price}
                      </Text>
                      {item.isadded ? (
                        <Text style={styles.counter}>Added</Text>
                      ) : (
                        <TouchableOpacity
                          onPress={() => {
                            handleAddtoCart(item);
                          }}>
                          <Image source={item.icon} style={styles.addIconImg} />
                        </TouchableOpacity>
                      )}
                    </View>
                  </TouchableOpacity>
                </Animated.View>
              )}
            />
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({
  main: {flex: 1, padding: 15},
  innerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
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

  videoContainer: {
    width: 340,
    height: 250,
    borderRadius: 25,
    backgroundColor: 'lightgrey',
    marginVertical: 15,
    marginRight: 10,
  },
  video: {
    width: 340,
    height: 250,
    borderRadius: 25,
  },

  controlsContainer: {
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    paddingLeft: 10,
    paddingRight: 10,

    bottom: 30,
  },
  controlIcon: {
    height: 30,
    width: 30,
    tintColor: 'lightgrey',
  },
  rival: {fontSize: 22, fontWeight: '900', fontStyle: 'normal', color: 'black'},
  rivalView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productBox: {height: 35, width: 35},

  grid: {
    marginVertical: 20,
  },
  card: {
    width: 160, // Adjust the width based on your preference
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
  cardTxt2: {textAlign: 'justify', color: 'white'},
  addIconImg: {height: 30, width: 30, borderRadius: 20},
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    // height: '100%',
    width: '100%',
    backgroundColor: 'black',
    paddingLeft: 30,
  },
  modalMapContainer: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // height: '100%',
    // width: '100%',
    backgroundColor: 'white',
  },
  modalCloseButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
  },

  fullScreenImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'center',
  },
  fullScreenMap: {
    height: '50%',
    width: '50%',
    // backgroundColor: 'skyblue',
  },
  icon: {
    borderRadius: Icons.borderRadius,
    height: Icons.height,
    width: Icons.width,
  },
  counter: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  shoppincart: {
    flexDirection: 'row',
    backgroundColor: 'skyblue',
    justifyContent: 'space-evenly',
    borderRadius: 10,
    width: 60,
  },
  modalTextInputView: {
    height: 250,
    width: 400,
    // resizeMode: 'center',
    // backgroundColor: 'skyblue',
    padding: 50,
  },
  iconContainer: {
    position: 'absolute',
    top: 25,
    left: 15,
    flexDirection: 'row',
  },
  iconButton: {
    marginRight: 10,
  },
  modalTextInput: {
    borderRadius: 10,
    borderWidth: 3,
    borderColor: 'skyblue',
    backgroundColor: 'lightgrey',
    width: 300,
    height: 50,
    justifyContent: 'center',
    marginBottom: 20,
    paddingLeft: 20,
  },
  addButtonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: 'skyblue',

    borderRadius: 10,
    width: 300,
    height: 50,
    justifyContent: 'center',
  },
  map: {
    flex: 1,
    // width: 400,
    // height: 400,
    // backgroundColor: 'blue',
    // marginRight: 300,
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
  sliderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    // paddingHorizontal: 20,
  },
});
