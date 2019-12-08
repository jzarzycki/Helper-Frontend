import {StyleSheet} from 'react-native';

import palette from "./palette";

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderBottomColor: '#999999',
    borderBottomWidth: 1,
    marginBottom: 10,
    width: '80%',
    marginTop: 10,
  },
  text: {
    color: palette.blue,
    borderBottomColor: '#999999',
    borderBottomWidth: 1,
    width: '80%', height: '5%',
    marginTop: '5%',
  },
  greyText: {
    marginTop: '3%',
    width: '80%',
    color: palette.grey,
  },
  smallButton: {
    width: '50%',
  },
  darkgreyButton: {
    height: 84,
    backgroundColor: palette.darkgrey,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blueButton: {
    height: 84,
    backgroundColor: palette.blue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  checkbox: {
    marginLeft: '40%', marginTop: '5%', marginBottom: '10%'
  },
  itemContainer: {
    paddingVertical: 8,
    paddingHorizontal: '12%',

  },
  itemCategory: {
    fontSize: 12,
    color: palette.grey,
  },
  itemText: {
    fontSize: 18,
    color: palette.blue,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    borderBottomWidth: 1,
  },
});

export default styles;
