import React from 'react';
import {StyleSheet, View, Text, Button, Image} from 'react-native';
import Colors from '../../constants/colors';
import DefaultStyles from '../../constants/default-styles';

const GameOverScreen = ({roundsNumber, userNumber, onRestart}) => {
  return (
    <View style={styles.screen}>
      <Text style={DefaultStyles.text}>Game is Over!</Text>
      <View style={styles.imageContainer}><Image style={styles.image} resizeMode='cover' source={require('../../assets/success.png')} /></View>
      <Text style={DefaultStyles.text}>Number of rounds: {roundsNumber}</Text>
      <Text style={DefaultStyles.text}>Number was: {userNumber}</Text>
      <Button title="NEW GAME" onPress={onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: { 
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.grey,
    marginVertical: 20,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  }
});

export default GameOverScreen;
