import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import Colors from '../../constants/colors';

const Input = props => {
  return <TextInput {...props} style={{...styles.input, ...props.style}} />;
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderBottomColor: Colors.primary,
    borderBottomWidth: 1,
    marginVertical: 10,
    fontFamily: 'Open Sans',
  },
});

export default Input;
