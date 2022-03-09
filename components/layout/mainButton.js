import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Colors from '../../constants/colors';

const MainButton = ({title, onClick, style}) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onClick}>
      <View style={{...styles.btnContainer, ...style}}>
        <Text style={styles.btnText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 10,
  },
  btnText: {
    color: Colors.lightPrimary,
    fontFamily: 'Open Sans',
    fontSize: 18,
  },
});

export default MainButton;
