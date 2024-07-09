import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

export const FruitList = () => {
  const [fruitData, setFruitData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [cartList, setcartList] = useState([]);
  const navigation = useNavigation();
       const fruits = [
         { id: 1, img: require('../assets/apple.jpg'), name: "Apple", description: '\n Apples are a type of pome fruit that are round and can be red, yellow, or green in color. They have a firm white flesh and a seedy core.  ',price:500 },
         { id: 2, img: require('../assets/bananas.jpg'), name: 'Banana', description: "\n A banana is a curved, yellow fruit with a thick skin and soft sweet flesh. If you eat a banana every day for breakfast, your roommate might nickname you the monkey.",price:350 },
         { id: 3, img: require('../assets/grapes.jpg'), name: 'Grapes', description: '\n A grape is a fruit, botanically a berry, of genus Vitis and family Vitaceae. ',price:150 },
         { id: 4, img: require('../assets/mango.jpg'), name: 'Mango', description: '\n A mango is a sweet tropical fruit, and it s also the name of the trees on which the fruit grows. Ripe mangoes are juicy, fleshy, and delicious. Like peaches and plums, mangoes have an inedible pit at the center..',price:250 },
         { id: 5, img: require('../assets/peach.jpg'), name: 'Peach', description: '\n A peach is a very sweet, juicy fruit with an edible peel and a hard pit in the middle. Peaches vary in color from almost white to yellow and pinkish-red. . ',price:600 },
       ];
     
       const handleInput = (value) => {
        const userFilter = fruits.filter((item) => item.name.toLowerCase().includes(value));
        setFruitData(userFilter);
      };
    
      const handleBuyMe = (item) => {
        setSelectedItem(item);
        // Navigate to the detail screen
        navigation.navigate('DetailScreen', { item });
      };
    
      // const handleReset = () => {
      //   setSelectedItem(null);
      // };
      // const handleAddToCart = (cartItem) => {
      //   // Implement logic to add the selected item to the cart
      //   // For demonstration, you can just navigate to the cart screen
      //   navigation.navigate('CartScreen', { cart: cartItem});
      // };
     
      let value = 0;
      
      const cartData = (item)=>{
        value = {id : item.id};
        let data = cartList.map((val) => val.id == value.id);
        if(cartList.length == 0)
        {
          setcartList([...cartList, {id: item.id, name: item.name, description: item.description, img: item.img,price:item.price,totalprice:0, noofitems:1}]);
        }
        else if(data.includes(true))
        {
          // console.warn('Item Already Exist');
        }
        else
        {
          setcartList([...cartList, {id: item.id, name: item.name, description: item.description, img: item.img,price:item.price,totalprice:0, noofitems:1}]);
        }
      }
        
        
      
      
      // const cartData = (item) => {
      //   // Check if the item is already in the cart
      //   const isItemInCart = cartList.some((cartItem) => cartItem.id === item.id);
      
      //   if (isItemInCart) {
      //     // If the item is already in the cart, do nothing
      //     console.warn("item already added in cart")
      //     return;
      //   }
      //   setcartList([...cartList, {id: item.id, name: item.name, description: item.description, img: item.img}]);
        
      // };
      

return (
  
         <View style={{ flex: 1 }}>
          
           <View style={styles.searchContainer}>
             <TextInput
               style={styles.textinput}
               placeholder="Search"
               onChangeText={(value) => handleInput(value)}
             />
             <TouchableOpacity style={styles.bucketIcon}  onPress={()=>navigation.navigate('CartScreen',{productList : cartList,updatedCartData:setcartList})} >
  <Image source={require('../assets/shop.jpg')} style={{ width: 70, height: 55, marginRight: 30, borderRadius: 50 }} />
</TouchableOpacity>

           </View>
     
           <FlatList
             data={fruitData.length === 0 ? fruits : fruitData}
             renderItem={({ item }) => (
                    <TouchableOpacity  onPress={() => handleBuyMe(item)}>
               <View style={styles.main}>
            
                 <View><Image source={item.img} style={styles.image} />
                   <View>
                     <TouchableOpacity style={styles.button} onPress={() => cartData(item)}>
                       <Text style={{ color: "lightgreen", textAlign: "center" }}>
                         Add to Cart
                       </Text>
                     </TouchableOpacity>
                   </View>
                 </View>
                 <View style={{ flex: 1 }}>
                   
                   <Text style={{ fontSize: 20, fontWeight: "bold", color: "red", textAlign: "left", marginTop: 5 }}>
                     {item.name}
                   </Text>
                   <Text style={{ fontSize: 12, color: "black", fontWeight: "normal" }}>
                     {item.description}
                   </Text>
                   
                 </View>
                 
               </View>
               </TouchableOpacity>
             )}
             keyExtractor={(item) => item.id.toString()}
           />
     
          
         </View>
       );
    
    
    
             }
    
    
    
    const styles = StyleSheet.create({
      image: {
        width: 110,
        height: 70,
    
    marginTop:15,
      shadowColor:"white",
    
      borderRadius:40,
      marginRight:3,
      borderWidth:3,
      
      },
      main:{
        marginBottom: 10,
        fontSize: 15,
        marginHorizontal: 10,
        backgroundColor:'#9CC4B2',
        height: 120,
        paddingRight:8,
        paddingLeft:8,
        borderRadius:8,
        color:'grey',
        flex:1,
        flexDirection:"row",
      
    
        
    
    
        
      },
      
    
      button:{
    
    height:"20",
    width:80,
    backgroundColor:"black",
    
    borderWidth:3,
    borderRadius:30,
    marginTop:5,
    marginLeft:13
    
    
    
      },
      searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
      },
      textinput:{
        borderWidth:3,
        textAlign:"left",
        fontSize:18,
        margin:13,
        borderRadius:15,
        paddingLeft:10,
        backgroundColor:"white",
        width:290,
        marginLeft:3,
        borderColor:"grey",
    
    
    
    
      },
    
      bucketIcon: {
       
        
      
      },
      itemDetails: {
        backgroundColor: '#9CC4B2',
        padding: 15,
        borderRadius: 8,
        margin: 10,
        alignItems: 'center',
      },
      resetButton: {
        backgroundColor: 'black',
        borderWidth: 3,
        borderRadius: 30,
      
        marginTop: 10,
        width:120,
        
      },
    });
    export default FruitList;