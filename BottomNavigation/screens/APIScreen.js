import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';

const APIScreen = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const collectApi = async () => {
    try {
      const url =
        'https://my-json-server.typicode.com/benirvingplt/products/products';
      let response = await fetch(url);
      response = await response.json();
      setData(response);
    } catch (error) {
      console.error('Error fetching API:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    collectApi();
  }, []);
  // const collectApi = async () => {
  //   const url =
  //     'https://my-json-server.typicode.com/benirvingplt/products/products';
  //   let output = await fetch(url);
  //   console.log(output);
  //   output = await output.json();
  //   console.log('after collecting data');

  //   setData(output);
  // };

  // useEffect(() => {
  //   collectApi();
  // }, []);

  return (
    <View style={{marginVertical: 10}}>
      {loading ? (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 150,
          }}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : data.length ? (
        <FlatList
          data={data}
          keyExtractor={item => item.id.toString()} // Convert id to string for keyExtractor
          renderItem={({item}) => (
            <View style={styles.container}>
              <View
                style={{
                  marginHorizontal: 12,
                  marginVertical: 12,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={{
                    uri: item.img,
                  }}
                  style={{height: 180, width: 120, borderRadius: 20}}
                />
              </View>
              <View style={{flex: 1, justifyContent: 'center'}}>
                <View style={{flexDirection: 'row', marginBottom: 15}}>
                  <Text
                    style={{
                      marginRight: 8,
                      fontSize: 12,
                      fontWeight: '700',
                    }}>{`${item.id}.`}</Text>
                  <Text style={{fontSize: 12, fontWeight: '700'}}>
                    {item.name}
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: '700',
                      marginBottom: 15,
                    }}>{`Colors. ${item.colour}`}</Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: '700',
                    }}>{`Price. RS ${item.price}`}</Text>
                </View>
              </View>
            </View>
          )}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: 370,
    backgroundColor: '#A8CCC9',
    marginBottom: 13,
    marginHorizontal: 15,
    flexDirection: 'row',
    borderRadius: 20,
  },
});

export default APIScreen;
