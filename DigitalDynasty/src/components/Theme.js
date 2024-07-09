import {Dimensions} from 'react-native';
const {height, width} = Dimensions.get('screen');
const COLORS = {
  backgroundColor: 'white',

  width: 300,
  fontWeight: 'bold',
  fontSize: 14,
  borderRadius: 40,
  color: 'white',
};
const InputField = {
  backgroundColor: 'lightgrey',
  borderRadius: 30,
  width: 360,
  marginVertical: 10,
  flexDirection: 'row',

  color: 'White',
  fontSize: 11,
  justifyContent: 'space-between',
};
const Icons = {
  height: 30,
  width: 30,
  borderRadius: 50,
  marginTop: 10,
};

const DIMENSION = {
  height: height,
  width: width,
  marginVertical: 10,
  marginHorizontal: 10,
};
const FONTSIZE = {
  small: 15,
  medium: 18,
  large: 22,
};
const Button = {
  borderRadius: 50,
  width: 360,
  buttonColor: 'blue',
  elevation: 10,
  shadowRadius: 10,

  borderColor: 'skyblue',

  // justifyContent: 'center',
  // alignItem: 'center',
};
const Card = {
  height: 250,
  width: 300,
  backgroundColor: '#448cea',
  marginVertical: 10,
  justifyContent: 'center',
  borderRadius: 20,
};
const CardImage = {
  height: 100,
  width: 150,
  borderRadius: 20,
};

export {
  COLORS,
  DIMENSION,
  FONTSIZE,
  InputField,
  Icons,
  Button,
  Card,
  CardImage,
};
