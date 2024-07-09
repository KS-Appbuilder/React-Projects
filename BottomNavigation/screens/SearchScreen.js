import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Button,
  Modal,
} from 'react-native';

const SearchScreen = () => {
  const [count, setCount] = useState(0);
  const [borderColor, setBorderColor] = useState('red');
  const [modalshow, setmodalshow] = useState(false);
  const handleCounter = () => {
    if (count < 10) {
      setCount(count + 1);
      updateBorderColor();
    }
  };

  const resetCounter = () => {
    setCount(0);
    setBorderColor('green');
  };

  const updateBorderColor = () => {
    if (count < 10) {
      setBorderColor('red');
    } else {
      setBorderColor('green');
      setmodalshow(true);
    }
  };

  useEffect(() => {
    updateBorderColor();
  }, [count]);

  return (
    <View>
      <View style={styles.main}>
        <Modal transparent={true} visible={modalshow} animationType="slide">
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                One counter Tasbeeh completed
              </Text>
              <Button title="close" onPress={() => setmodalshow(false)} />
            </View>
          </View>
        </Modal>
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={handleCounter}
          style={[styles.button, {borderColor: borderColor}]}>
          <Text style={styles.counterText}>{count}</Text>
        </TouchableOpacity>
      </View>
      <Button title="Reset" onPress={resetCounter} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'yellow',
    padding: 40,
    borderRadius: 20,
    shadowColor: 'black',
    elevation: 5,
  },
  modalText: {
    fontSize: 30,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    borderWidth: 8,
    width: 150,
    height: 150,
    borderRadius: 75,
    justifyContent: 'center',
    marginTop: 700,
  },
  counterText: {
    fontSize: 24,
  },
});

export default SearchScreen;
