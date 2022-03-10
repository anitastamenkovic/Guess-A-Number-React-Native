import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import Colors from '../../constants/colors';
import DefaultStyles from '../../constants/default-styles';

const List = ({value, numOfRound}) => {
  return (
    <View key={value} style={styles.listItem}>
      <Text style={DefaultStyles.text}>#{numOfRound}</Text>
      <Text style={DefaultStyles.text}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
});

export default List;
