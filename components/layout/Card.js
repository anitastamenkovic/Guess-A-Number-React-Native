import React from 'react';
import {StyleSheet, View} from 'react-native';
import Colors from '../../constants/colors';

const Card = props => {
  return (
    <View style={{...styles.container, ...props.style}}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: Colors.grey,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8, // for android
    backgroundColor: Colors.lightGrey,
    padding: 20,
    borderRadius: 10,
  },
});

export default Card;
