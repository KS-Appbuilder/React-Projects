import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ToastAndroid,
} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native'; // Import useNavigation

import {COLORS, Icons, InputField} from '../components/Theme';
import {useDispatch, useSelector} from 'react-redux';
import {change_theme} from '../reduxservices/action';
import {setLoginData} from '../reduxservices/loginSlice';

const LoginScreen = ({props, route}) => {
  const navigation = useNavigation(); // Use useNavigation hook here to get the navigation object
  const signupData = useSelector(state => state.authentication);
  console.log(signupData);
  const [secure, setSecure] = useState(true);
  const dispatch = useDispatch();
  const items = useSelector(state => state.setLoginData);
  // const userData = [route.params?.data];

  const toggleSecure = () => {
    setSecure(!secure);
  };

  const showToast = () => {
    ToastAndroid.show(
      'Login Successfully',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
      ToastAndroid.TOP,
    );
  };

  const showFalseToast = () => {
    ToastAndroid.showWithGravity(
      'Invalid Credentials',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
      ToastAndroid.BOTTOM,
    );
  };

  const LoginSchema = yup.object().shape({
    email: yup
      .string()
      .email('Email with @ and .com')
      .required('Email is required'),
    password: yup
      .string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])/,
        'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character',
      ),
  });

  const handleSubmitForm = async values => {
    // await AsyncStorage.setItem('Email', values.email);
    // await AsyncStorage.setItem('Password', values.password);
    dispatch(setLoginData(values));
    const foundUser = signupData.find(
      userEmail => userEmail.email === values.email,
    );
    if (foundUser && foundUser.password === values.password) {
      showToast();
      navigation.navigate('TabNavigator');
    } else {
      showFalseToast();
    }
  };

  return (
    <KeyboardAvoidingView
      behavior="height"
      style={{flex: 1, backgroundColor: 'white'}}
      keyboardVerticalOffset={0}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Formik
            initialValues={{email: '', password: ''}}
            onSubmit={handleSubmitForm}
            validationSchema={LoginSchema}>
            {({handleChange, handleSubmit, values, errors, touched}) => (
              <View style={styles.main}>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: 30,
                    marginBottom: 50,
                  }}>
                  <Image
                    source={require('../assets/Logo1.png')}
                    style={{height: 250, width: 250, borderRadius: 70}}
                  />
                  <View style={{marginTop: 5}}>
                    <Text style={styles.Text}>
                      "Digital Dynasty Gateway: Access the Tech Throne"
                    </Text>
                  </View>
                </View>
                <View>
                  <View style={styles.TextInput1}>
                    <Image
                      source={require('../assets/emaillogo.png')}
                      style={styles.emaillogo}
                    />
                    <TextInput
                      style={{marginLeft: 8}}
                      placeholder="Enter a UserName or email"
                      placeholderTextColor={'black'}
                      value={values.email}
                      onChangeText={handleChange('email')}
                      error={touched.email && errors.email}
                    />
                  </View>
                  <Text style={styles.errorText}>{errors.email}</Text>
                  <View style={[styles.TextInput1, {marginTop: 20}]}>
                    <Image
                      source={require('../assets/password.jpg')}
                      style={styles.Passwordlogo}
                    />
                    <TextInput
                      style={{marginLeft: 8}}
                      placeholder="Enter a Password"
                      placeholderTextColor={'black'}
                      secureTextEntry={secure}
                      value={values.password}
                      onChangeText={handleChange('password')}
                      error={touched.password && errors.password}
                    />
                    <TouchableOpacity
                      style={styles.image_container}
                      onPress={toggleSecure}>
                      <Image
                        source={
                          secure
                            ? require('../assets/closedeye.png')
                            : require('../assets/eye.png')
                        }
                        style={styles.Image}
                      />
                    </TouchableOpacity>
                  </View>
                  <Text style={styles.errorText}>{errors.password}</Text>
                  <View>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('TabNavigator')}>
                      <Text style={styles.forgotText}>Forgot Password ?</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.button}>
                    <TouchableOpacity onPress={handleSubmit}>
                      <Text style={styles.buttonText}> Login</Text>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <Text style={{marginTop: 5, color: 'black'}}>
                      I don't have an account?
                    </Text>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('SignUpScreen')}>
                      <Text
                        style={{color: '#448cea', marginTop: 5, marginLeft: 5}}>
                        Register Now
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
          </Formik>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    alignContent: 'center',
    marginHorizontal: 20,
  },
  Text: {fontSize: 15, fontWeight: '700', color: 'blue', textAlign: 'center'},
  button: {
    backgroundColor: '#448cea',
    borderRadius: 30,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  Image: {
    height: Icons.height,
    width: Icons.width,
    borderRadius: Icons.borderRadius,
  },
  image_container: {
    position: 'absolute',
    right: 20,
    top: 10,
  },
  TextInput1: {
    borderRadius: InputField.borderRadius,
    flexDirection: InputField.flexDirection,
    color: InputField.color,
    fontSize: InputField.fontSize,
    backgroundColor: 'lightgrey',
  },
  emaillogo: {
    height: Icons.height,
    width: Icons.width,
    borderRadius: Icons.borderRadius,
    marginTop: Icons.marginTop,
    marginLeft: 5,
  },
  Passwordlogo: {
    height: Icons.height,
    width: Icons.width,
    borderRadius: Icons.borderRadius,
    marginTop: Icons.marginTop,
    marginLeft: 5,
  },
  buttonText: {
    textAlign: 'center',
    marginTop: 5,
    fontSize: 22,
    fontWeight: '800',
    color: 'white',
  },
  forgotText: {
    textAlign: 'right',
    color: '#448cea',
    marginLeft: 10,
    marginBottom: 5,
  },
  errorText: {color: 'red', fontSize: 12, marginHorizontal: 40, marginTop: 2},
});
