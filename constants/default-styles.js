import {StyleSheet, Dimensions} from 'react-native';
import Colors from './colors';

export default StyleSheet.create({
  text: {
    fontFamily: 'Open Sans',
    fontSize: Dimensions.get('window').height < 400 ? 16 : 18,
    textAlign: 'center',
    color: Colors.grey,
  },
  titleText: {
    fontFamily: 'Open Sans',
    fontSize: Dimensions.get('window').height < 400 ? 18 : 20,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
    color: Colors.grey,
  },
  highlightText: {
    fontFamily: 'Open Sans',
    fontWeight: 'bold',
    color: Colors.primary,
  },
});
