import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Colors from '../../constants/colors';

const NumberContainer = props => {
  return (
    <View style={styles.numberContainer}>
      <Text style={styles.number}>{props.number}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  numberContainer: {
    borderWidth: 2,
    borderColor: Colors.accent,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  number: {
    color: Colors.accent,
    fontSize: 22,
    fontFamily: 'Open Sans',
    fontWeight: 'bold',
  },
});

export default NumberContainer;
