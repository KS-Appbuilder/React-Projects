// import React from "react";
// import {Text,TextInput,View,Button,StyleSheet} from 'react-native';
// const LoginScreen=(props)=>{
    
// return(
//     <View>
//         <Button title ="Login" onPress={()=>props.navigation.navigate('HomeScreen')}></Button>
//         <Button title ="Register Now" onPress={()=>props.navigation.navigate('SignUpScreen')}></Button>
//     </View>
// )





// }
// export default LoginScreen;
import React, { useState } from "react";
import { StyleSheet, TextInput, View, Text, TouchableOpacity} from 'react-native';
const LoginScreen= ({navigation})=>{

  
  return(
    <View style={styles.mainView}>
      <Text style={styles.signUpText}>Login</Text>
     
      <TextInput placeholder="Email"  style={styles.inputField}></TextInput>
      <TextInput placeholder="Password" style={styles.inputField} secureTextEntry></TextInput>
      <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('HomeScreen')}>
        <Text style={{fontSize: 20, fontWeight: '600'}}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity  onPress={()=>navigation.navigate("SignUpScreen")}>
      <Text  style={{fontSize:30,color:"blue",fontWeight:'800'}}> I don't have account?</Text>
      </TouchableOpacity>
    </View>
  )
}
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
export default LoginScreen ;