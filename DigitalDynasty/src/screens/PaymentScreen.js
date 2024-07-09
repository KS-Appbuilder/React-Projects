import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ToastAndroid,
  Modal,
} from 'react-native';
import {Icons} from '../components/Theme';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector} from 'react-redux';
import styles from '../components/styles.js'; // Import your styles

const PaymentScreen = ({route}) => {
  const {total, subtotal, Toatalquantity} = route.params;
  console.log(Toatalquantity);
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [isSelected, setIsSelected] = useState(false);
  const [loginemail, setloginemail] = useState('');
  const [showCountryList, setShowCountryList] = useState(false); // State to manage visibility of country list
  const [selectedCountry, setSelectedCountry] = useState(''); // State to store selected country
  const navigation = useNavigation();
  const {email} = useSelector(state => state.authentication);
  const country = [
    'Select country',
    'America',
    'Bangladesh',
    'Canada',
    'Danmark',
    'Egypt',
    'Florida',
    'Pakistan',
    'Dan',
    'israel',
    'fingra',
    'Pulao',
    'Pakistan',
    'Dan',
    'israel',
    'fingra',
    'Pulao',
  ];
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

  const handleSelectCard = card => {
    setSelectedCard(card);
  };

  const handleSelectMonth = month => {
    setSelectedMonth(month);
  };

  const handleSelectYear = year => {
    setSelectedYear(year);
  };

  const handleCheckbox = () => {
    setIsSelected(!isSelected);
  };

  const toggleCountryList = () => {
    setShowCountryList(!showCountryList); // Toggle visibility of country list
  };

  const selectCountry = country => {
    setSelectedCountry(country); // Set the selected country
    toggleCountryList(); // Close the country list
  };
  const showToastMessage = () => {
    try {
      if (
        selectedCard &&
        selectedMonth &&
        selectedYear &&
        selectedCountry &&
        isSelected
      ) {
        ToastAndroid.showWithGravity(
          'Successfully Payout',
          ToastAndroid.CENTER,
          ToastAndroid.BOTTOM,
        );
        console.log('Navigating to OrderScreen');
        navigation.navigate('OrderScreen');
      } else {
        ToastAndroid.showWithGravity(
          'Please fill out all fields',
          ToastAndroid.CENTER,
          ToastAndroid.BOTTOM,
        );
      }
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };
  const toggleBottomSheet = () => {
    setBottomSheetVisible(!bottomSheetVisible);
  };

  useEffect(() => {
    // getemail();
  }, []);

  return (
    <KeyboardAvoidingView
      behavior="height"
      style={{flex: 1, backgroundColor: 'white', padding: 10}}
      keyboardVerticalOffset={0}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
            <Text style={styles.headerTxt}>Payout</Text>
          </View>
          <Text style={styles.qtyText}>
            {'Items Quantity: ' + Toatalquantity}
          </Text>
          <Text style={styles.qtyText1}>
            Total Amount: {'Rs ' + total.toFixed(2)}
          </Text>
          <View style={{paddingLeft: 10, paddingRight: 10}}>
            <View style={styles.textInputContainer}>
              <Image
                source={require('../assets/emaillogo.png')}
                style={styles.emaillogo}
              />
              <TextInput
                style={styles.textInput}
                value={email}
                placeholderTextColor={'black'}
              />
            </View>

            <Text style={styles.textInputTitle}>Card Information</Text>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="1234 1234  1234 1234"
                placeholderTextColor={'black'}
              />
              <TouchableOpacity onPress={() => handleSelectCard('Visa')}>
                <Image
                  source={require('../assets/Visa-icon.png')}
                  style={[
                    styles.cardIcon,
                    selectedCard === 'Visa' && styles.selectedCard,
                  ]}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleSelectCard('Mastercard')}>
                <Image
                  source={require('../assets/mastercard.jpg')}
                  style={[
                    styles.cardIcon,
                    selectedCard === 'Mastercard' && styles.selectedCard,
                  ]}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleSelectCard('Amex')}>
                <Image
                  source={require('../assets/Amexcard.png')}
                  style={[
                    styles.cardIcon,
                    selectedCard === 'Amex' && styles.selectedCard,
                  ]}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.rowContainer}>
              <View style={styles.halfWidth}>
                <Text style={styles.inputLabel}>Expiry Date</Text>
              </View>

              <View style={styles.halfWidth}>
                <Text style={styles.inputLabel}>CVC</Text>
              </View>
            </View>

            <View style={styles.rowContainer}>
              <View style={styles.halfWidth1}>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.textinput1}
                    placeholder="MM"
                    placeholderTextColor={'black'}
                    onChangeText={handleSelectMonth}
                    keyboardType="numeric"
                    keyboardAppearance="light"
                    require
                  />
                  <TextInput
                    style={styles.textinput1}
                    placeholder="YYYY"
                    placeholderTextColor={'black'}
                    onChangeText={handleSelectYear}
                    keyboardType="numeric"
                    require
                  />
                </View>
              </View>
              <View style={styles.halfWidth1}>
                <TextInput
                  style={styles.textinput1}
                  placeholder="123"
                  placeholderTextColor={'black'}
                  keyboardType="numeric"
                  require
                />
              </View>
            </View>

            <Text style={styles.textInputTitle}>Name on card</Text>

            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="john , ruby & etc"
                placeholderTextColor={'black'}
                require
              />
            </View>
            <Text style={styles.textInputTitle}>Country or region</Text>

            <View style={styles.textInputContainer}>
              <TextInput
                require
                style={styles.textInput}
                placeholder={selectedCountry}
                placeholderTextColor={'black'} // Show selected country
                onFocus={toggleCountryList} // Show country list when input focused
                onBlur={toggleCountryList} // Hide country list when input blurred
                editable={true} // Prevent manual editing
              />
              <TouchableOpacity onPress={toggleCountryList}>
                <Image
                  source={require('../assets/dropdown1.png')}
                  style={styles.icons}
                />
              </TouchableOpacity>
            </View>

            {showCountryList && ( // Render country list only when showCountryList is true
              <View style={styles.countryList}>
                <ScrollView style={styles.scrollView}>
                  {country.map((item, index) => (
                    <TouchableOpacity
                      key={index}
                      style={styles.countryListItem}
                      onPress={() => selectCountry(item)}>
                      <Text style={{color: 'black'}}>{item}</Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            )}

            <View style={styles.checkboxContainer}>
              <TouchableOpacity onPress={handleCheckbox}>
                <Image
                  source={
                    isSelected
                      ? require('../assets/checked.png')
                      : require('../assets/unchecked.png')
                  }
                  style={styles.checkbox}
                />
              </TouchableOpacity>
              <Text style={styles.checkboxText}>
                I agree to the Terms and Conditions
              </Text>
            </View>
            <View style={styles.button}>
              <TouchableOpacity onPress={() => showToastMessage()}>
                <Text style={styles.buttonText}> Payout</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* <View style={styles.countryList1}>
            <TouchableOpacity
              onPress={toggleBottomSheet}
              style={{justifyContent: 'center', alignSelf: 'center'}}>
              <Image
                source={require('../assets/dropdown1.png')}
                style={styles.icons}
              />
            </TouchableOpacity>
            {bottomSheetVisible && (
              <ScrollView style={styles.scrollView1}>
                <TouchableOpacity style={styles.countryListItem1}>
                  <Text style={styles.buttonText1}>Khalid</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.countryListItem1}>
                  <Text style={styles.buttonText1}>Zahid</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.countryListItem1}>
                  <Text style={styles.buttonText1}>Toheed</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.countryListItem1}>
                  <Text style={styles.buttonText1}>Toheed</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.countryListItem1}>
                  <Text style={styles.buttonText1}>Toheed</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.countryListItem1}>
                  <Text style={styles.buttonText1}>Toheed</Text>
                </TouchableOpacity>
              </ScrollView>
            )}
          </View> */}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default PaymentScreen;
