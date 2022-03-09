import {StyleSheet} from 'react-native';
import Colors from './colors';

export default StyleSheet.create({
  text: {
    fontFamily: 'Open Sans',
    fontSize: 18,
    textAlign: 'center',
  },
  titleText: {
    fontFamily: 'Open Sans',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
  highlightText: {
    fontFamily: 'Open Sans',
    fontWeight: 'bold',
    color: Colors.primary,
  },
});
