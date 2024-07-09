// import React from "react";
// import {Text,TextInput,View,Button,StyleSheet} from 'react-native';
// const SignUpScreen=(props)=>{
// return(
//     <View>
// <Button title ="RegisterNow" onPress={()=>props.navigation.navigate('LoginScreen')}/>

//     </View>
// )





// }
// export default SignUpScreen;
import React, { useState } from "react";
import { StyleSheet, TextInput, View, Text, TouchableOpacity} from 'react-native';
const SignUpScreen = ({navigation})=>{
  const data =
    {
      firstName : '',
      lastName : '',
      email : '',
      password : '',
    }
  const [formData, setFormData] = useState(data);
  const handleInput = (name, value)=>{
    setFormData({...formData, [name] : value})
  };
  return(
    <View style={styles.mainView}>
      <Text style={styles.signUpText}>Sign Up</Text>
      <TextInput placeholder="First Name" onChangeText={(text)=> handleInput('firstName', text)} style={styles.inputField}></TextInput>
      <TextInput placeholder="Last Name" onChangeText={(text)=> handleInput('lastName', text)}  style={styles.inputField}></TextInput>
      <TextInput placeholder="Email" onChangeText={(text)=> handleInput('email', text)} style={styles.inputField}></TextInput>
      <TextInput placeholder="Password" onChangeText={(text)=> handleInput('password', text)} style={styles.inputField} secureTextEntry></TextInput>
      <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('DetailScreen', {userData : formData})}>
        <Text style={{fontSize: 20, fontWeight: '600'}}>Submit</Text>
      </TouchableOpacity>
     
    </View>
  )}
const styles = StyleSheet.create({
  mainView:{
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  signUpText:{
    fontSize: 30,
    fontWeight: '800',
    marginBottom: 40,
  },
  inputField:{
    marginBottom: 20,
    borderColor: 'gray',
    borderWidth: 0.5,
    width: 370,
    borderRadius: 10,
    height: 58,
    paddingHorizontal: 15,
    fontSize: 19,
  },
  button:{
    width: 300,
    height: 58,
    backgroundColor: 'lightblue',
    borderRadius: 30,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
export default SignUpScreen;
// 10:55
