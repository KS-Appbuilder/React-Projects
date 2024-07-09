import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
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
import {signup} from '../reduxservices/SignupAction';
import {COLORS, Icons, InputField} from '../components/Theme';
import {useDispatch} from 'react-redux';

const SignUpScreen = ({props, navigation}) => {
  const [formData, setformData] = useState([]);
  const dispatch = useDispatch();
  const handleTextInput = (name, values) => {
    // await AsyncStorage.setItem('email', values);
    // await AsyncStorage.setItem('Password', values);
    // await AsyncStorage.setItem('ConfirmPassword', values);
    // await AsyncStorage.setItem('ContactNumber', values);
    // setformData({...formData, [name]: values});
  };

  const handleSignUp = async values => {
    // Handle storing data or authentication logic here.
    // For simplicity, let's just log the values for now.
    console.log(values);
    // Redirect to login screen after signup
    showToast();
    dispatch(signup(values));
    navigation.navigate('LoginScreen');
    // navigation.navigate('LoginScreen', {data: formData});
    // console.log(formData, '---------------------------------');
  };

  const showToast = () => {
    ToastAndroid.show(
      'Data Successfully Saved',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
      ToastAndroid.TOP,
    );
  };

  const SignupSchema = yup.object().shape({
    name: yup.string().label('Name').required('Name is required'),
    email: yup
      .string()
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])/,
        'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character',
      ),
    confirmPassword: yup
      .string()
      .required('Confirm Password is required')
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
    contactNumber: yup.string().required('Contact Number is required'),
  });

  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={{flex: 1, backgroundColor: 'white'}}
      keyboardVerticalOffset={0}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Formik
            initialValues={{
              email: '',
              password: '',
              confirmPassword: '',
              contactNumber: '',
              name: '',
            }}
            onSubmit={handleSignUp}
            validationSchema={SignupSchema}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
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
                  <View style={[styles.TextInput1, {marginBottom: 18}]}>
                    <Image
                      source={require('../assets/profile.jpg')}
                      style={styles.emaillogo}
                    />
                    <TextInput
                      style={{marginLeft: 8}}
                      placeholder="Enter Your Name"
                      value={values.name}
                      onChangeText={text => (
                        handleChange('name')(text),
                        handleTextInput('name', text)
                      )}
                      onBlur={handleBlur('name')}
                      error={touched.name && errors.name}
                      placeholderTextColor={'black'}
                    />
                  </View>
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
                      onChangeText={text => (
                        handleChange('email')(text),
                        handleTextInput('email', text)
                      )}
                      onBlur={handleBlur('email')}
                      error={touched.email && errors.email}
                    />
                  </View>

                  <Text style={styles.errorText}>{errors.email}</Text>
                  <View style={styles.TextInput1}>
                    <Image
                      source={require('../assets/password.jpg')}
                      style={styles.Passwordlogo}
                    />
                    <TextInput
                      style={{marginLeft: 8}}
                      placeholder="Enter a Password"
                      placeholderTextColor={'black'}
                      secureTextEntry={true}
                      value={values.password}
                      onChangeText={text => (
                        handleChange('password')(text),
                        handleTextInput('password', text)
                      )}
                      onBlur={handleBlur('password')}
                      error={touched.password && errors.password}
                    />
                  </View>

                  <Text style={styles.errorText}>{errors.password}</Text>
                  <View style={styles.TextInput1}>
                    <Image
                      source={require('../assets/password.jpg')}
                      style={styles.Passwordlogo}
                    />
                    <TextInput
                      style={{marginLeft: 8}}
                      placeholder=" Confirm Password"
                      placeholderTextColor={'black'}
                      secureTextEntry={true}
                      value={values.confirmPassword}
                      onChangeText={text => (
                        handleChange('confirmPassword')(text),
                        handleTextInput('confirmPassword', text)
                      )}
                      onBlur={handleBlur('confirmPassword')}
                      error={touched.confirmPassword && errors.confirmPassword}
                    />
                  </View>
                  <Text style={styles.errorText}>{errors.confirmPassword}</Text>

                  <View style={styles.TextInput1}>
                    <Image
                      source={require('../assets/contact.jpg')}
                      style={styles.emaillogo}
                    />
                    <TextInput
                      style={{marginLeft: 8}}
                      placeholder="Enter a Contact Number"
                      placeholderTextColor={'black'}
                      keyboardType="number-pad"
                      value={values.contactNumber}
                      onChangeText={text => (
                        handleChange('contactNumber')(text),
                        handleTextInput('contactNumber', text)
                      )}
                      onBlur={handleBlur('contactNumber')}
                      error={touched.contactNumber && errors.contactNumber}
                    />
                  </View>

                  <Text style={styles.errorText}>{errors.contactNumber}</Text>
                  <View style={styles.button}>
                    <TouchableOpacity onPress={handleSubmit}>
                      <Text
                        style={{
                          textAlign: 'center',
                          marginTop: 5,
                          fontSize: 22,
                          fontWeight: '800',
                          color: 'white',
                        }}>
                        Register
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <Text style={{marginTop: 5, color: 'black'}}>
                      I already have an account?
                    </Text>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('LoginScreen', {
                          data: formData,
                        })
                      }>
                      <Text style={{color: '#448cea', marginTop: 5}}>
                        Login
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

export default SignUpScreen;

const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    alignContent: 'center',
    // padding: 20,
    marginHorizontal: 20,
  },
  Text: {fontSize: 15, fontWeight: '700', color: 'blue', textAlign: 'center'},
  button: {
    backgroundColor: '#448cea',
    borderRadius: 20,
    width: 360,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
  },
  TextInput1: {
    borderRadius: Icons.borderRadius,
    width: 360,
    flexDirection: 'row',
    color: 'black',
    fontSize: Icons.fontSize,
    backgroundColor: 'lightgrey',
    // marginBottom: 20,
  },
  errorText: {
    color: 'red',
    marginHorizontal: 40,
    marginTop: 3,
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
});
