import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
const DetailScreen= ({route, navigation})=>
{
    const Data = route.params?.userData
    return(
        <View >
            <View>
            <TouchableOpacity style={{marginHorizontal: 20, marginVertical: 10}} onPress={()=> navigation.replace("LoginScreen")}>
          <View style={styles.uperButton}>
            <Image source={require('../assets/search.png')} style={{height: 30, width: 30, tintColor: 'white'}}></Image>
          </View>
        </TouchableOpacity>
            </View>
          <Text style={styles.userDataText}>User Data</Text>
          <View style={styles.mainView}>
             <View>
                <Text style={styles.dataText}>First Name : {Data.firstName}</Text>
                <Text style={styles.dataText}>Last Name : {Data.lastName}</Text>
                <Text style={styles.dataText}>Email : {Data.email}</Text>
                <Text style={styles.dataText}>Email : {Data.password}</Text>
            </View>
          </View>
        </View>
      )
}
const styles = StyleSheet.create({
    mainView:{
      justifyContent: 'center',
      alignItems: 'center',
    },
    userDataText:{
      fontSize: 30,
      fontWeight: '800',
      marginVertical: 40,
      textAlign: 'center',
    },
    uperButton: {
        backgroundColor: '#384358',
        height: 60,
        width: 60,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
      },
      dataText:{
        fontSize: 20,
        marginTop: 13
      }
  })
export default DetailScreen;