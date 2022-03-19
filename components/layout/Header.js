import React from 'react';
import {StyleSheet, Text, View, Platform} from 'react-native';
import Colors from '../../constants/colors';

const Header = props => {
  return (
    <View
      style={{
        ...styles.headerBase,
        ...Platform.select({
          ios: styles.headerAndroid,
          android: styles.headerAndroid,
        }),
      }}>
      <Text style={styles.textHeader}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBase: {
    width: '100%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerIOS: {
    backgroundColor: 'white',
    borderBottomColor: Colors.grey,
    borderBottomWidth: 1,
  },
  headerAndroid: {
    backgroundColor: Colors.primary,
  },
  textHeader: {
    color: Platform.OS === 'android' ? Colors.lightPrimary : Colors.primary,
    fontFamily: 'Open Sans',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Header;
