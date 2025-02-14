import {StyleSheet} from 'react-native';
import {Icons} from './Theme';
const styles = StyleSheet.create({
  main: {flex: 1},
  innerView: {
    flexDirection: 'row',
    borderColor: 'white',
    shadowColor: 'lightgrey',
    elevation: 10,
    borderWidth: 7,
    borderRadius: 20,
    marginBottom: 12,
  },
  headerTxt: {fontWeight: '700', marginTop: 10, fontSize: 20, color: 'black'},
  qtyText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 10,
  },
  qtyText1: {
    color: 'black',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20,
  },
  textInputContainer: {
    borderRadius: 50,
    width: 370,
    flexDirection: 'row',
    backgroundColor: 'lightgrey',
    marginTop: 10,
    alignItems: 'center',
  },
  emaillogo: {height: 30, width: 30, marginLeft: 10, borderRadius: 50},
  textInput: {
    flex: 1,
    marginHorizontal: 10,

    textAlign: 'left',
    color: 'black',
    // justifyContent: 'center',
  },
  cardicons: {height: 30, width: 120, marginRight: 10, borderRadius: 10},
  textInputTitle: {
    textAlign: 'left',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
    marginLeft: 10,
    color: 'black',
  },
  cardIconsContainer: {flexDirection: 'row', marginTop: 10},
  cardIcon: {height: 30, width: 40, marginRight: 10},
  selectedCard: {borderWidth: 2, borderColor: 'blue'},
  rowContainer: {flexDirection: 'row', marginTop: 10},
  halfWidth1: {
    flex: 0.5,
    borderColor: 'lightgrey',
    borderWidth: 5,
    borderRadius: 4,

    // height: 40,
  },
  halfWidth: {
    flex: 0.5,
    borderColor: 'lightgrey',
    borderWidth: 5,
    borderRadius: 4,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 5,
    marginHorizontal: 10,
    color: 'black',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 7,
  },
  checkbox: {height: 20, width: 20},
  checkboxText: {marginLeft: 10, fontSize: 14, color: 'black'},
  icons: {
    height: Icons.height,
    width: Icons.width,
    borderRadius: Icons.borderRadius,
    margin: 10,
  },
  countryList: {
    position: 'absolute',
    // bottom: 0, top: 120,
    bottom: 10,
    left: 20,
    right: 20,
    backgroundColor: 'white',
    borderRadius: 5,
    elevation: 3,
    zIndex: 1,
  },
  countryList1: {
    position: 'absolute',
    bottom: 0,
    // top: 120,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderRadius: 30,
    elevation: 3,
    zIndex: 1,
  },
  scrollView: {
    maxHeight: 235, // Set a maximum height for the ScrollView
  },
  scrollView1: {
    maxHeight: 290, // Set a maximum height for the ScrollView
  },
  countryListItem: {
    padding: 10,
    borderBottomWidth: 3,
    borderBottomColor: 'lightgrey',

    // borderColor: 'white',
    // borderWidth: 5,
    // marginVertical: 5,
  },
  countryListItem1: {
    padding: 10,
    borderBottomWidth: 1,
    // borderBottomColor: 'white',
    borderRadius: 10,
    borderColor: 'lightgrey',
    borderWidth: 5,
    marginVertical: 5,
  },
  button: {
    backgroundColor: '#448cea',
    borderRadius: 30,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    width: 370,
  },
  buttonText: {
    textAlign: 'center',

    fontSize: 22,
    fontWeight: '800',
    color: 'white',
  },
  buttonText1: {
    textAlign: 'center',

    fontSize: 22,
    fontWeight: '800',
    color: 'black',
  },
  textinput1: {
    textAlign: 'center',
    height: 40,
    color: 'black', // Add color property to specify the text color
  },
  halfWidth1: {
    flex: 0.5,
    borderColor: 'lightgrey',
    borderWidth: 1,
    borderRadius: 4,
    marginHorizontal: 0,
    justifyContent: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    alignItems: 'center',
  },
  textinput1: {
    flex: 1,
    textAlign: 'center',
    height: 40,
    color: 'black',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
});
export default styles;
