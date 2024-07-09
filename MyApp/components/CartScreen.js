import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
export const CartScreen = (props) => {
  const { productList } = props.route.params;
  
  const [removeData, setRemoveData] = useState(productList);

 

  const handleReset = (data) => {
    setRemoveData((previousData) => {const updatedData = previousData.filter((item) => item.id !== data)
      props.route.params.updatedCartData(updatedData);
    return updatedData;
    
    
    });

  
    };
  const handleIncrement = (itemId) => {
    setRemoveData((prevCounters) => prevCounters.map((item)=>{if(item.id===itemId){
      item.noofitems=item.noofitems+1;
      item.totalprice=item.price*item.noofitems;
    
    }
    return item;
    })

    )};
  const handleDecrement = (itemId) => {
   
      setRemoveData((prevCounters) => prevCounters.map((item)=>
      {
        if(item.id===itemId)
        {
if(item.noofitems)
        item.noofitems=item.noofitems-1;
        item.totalprice=item.price*item.noofitems;
      
      }
      return item;
      }));
    
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={removeData}
        renderItem={({ item }) => (
          <View style={styles.main}>
            <View>
              <Image source={item.img} style={styles.image} />
              <View>
                <TouchableOpacity style={styles.resetButton} onPress={() => handleReset(item.id)}>
                  <Text style={{ color: 'lightgreen', textAlign: 'center' }}>Remove</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ flex: 1, justifyContent: 'space-evenly' }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'red', textAlign: 'left', marginTop: 5 }}>
                {item.name}
              </Text>
              <Text style={{ fontSize: 12, color: 'black', fontWeight: 'normal' }}>{item.description}</Text>
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => handleDecrement(item.id)}>
                  <Image source={require('../assets/sub.jpg')} style={{ width: 25, height: 25, marginRight: 30, borderRadius: 50 }} />
                </TouchableOpacity>
                <Text style={{ paddingRight: 30 }}>{item.noofitems}</Text>
                <TouchableOpacity onPress={() => handleIncrement(item.id)}>
                  <Image source={require('../assets/add.jpg')} style={{ width: 25, height: 25, marginRight: 30, borderRadius: 50 }} />
                </TouchableOpacity>
                <Text>{item.totalprice == 0 ? item.price:item.totalprice}</Text>
              </View>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 110,
    height: 80,
    marginTop: 15,
    shadowColor: 'white',
    borderRadius: 40,
    marginRight: 3,
    borderWidth: 3,
  },
  main: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 15,
    marginHorizontal: 10,
    backgroundColor: '#9CC4B2',
    height: 140,
    paddingRight: 8,
    paddingLeft: 8,
    borderRadius: 8,
    color: 'grey',
    flex: 1,
    flexDirection: 'row',
  },
  resetButton: {
    backgroundColor: 'red',
    borderRadius: 30,
    marginTop: 15,
    width: 100,
  },
  container: {
    flex: 1,
  },
});
export default CartScreen;