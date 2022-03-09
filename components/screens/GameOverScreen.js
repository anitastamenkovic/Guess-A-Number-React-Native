import React from 'react';
import {StyleSheet, View, Text, Button, Image} from 'react-native';

import MainButton from '../layout/mainButton';
import Colors from '../../constants/colors';
import DefaultStyles from '../../constants/default-styles';

const GameOverScreen = ({roundsNumber, userNumber, onRestart}) => {
  return (
    <View style={styles.screen}>
      <Text style={DefaultStyles.text}>Game is Over!</Text>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={require('../../assets/success.png')}
          // Network image
          //   fadeDuration={1000}
          //   source={{
          //     uri: 'https://cdn.mos.cms.futurecdn.net/ntFmJUZ8tw3ULD3tkBaAtf-970-80.jpg.webp',
          //   }}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={DefaultStyles.text}>
          Your phone needed
          <Text style={DefaultStyles.highlightText}> {roundsNumber}</Text>{' '}
          rounds to guess the number
          <Text style={DefaultStyles.highlightText}> {userNumber}.</Text>
        </Text>
      </View>
      <MainButton title="NEW GAME" onClick={onRestart} />
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
  },
  textContainer: {
    marginHorizontal: 30,
    marginBottom: 20,
  },
});

export default GameOverScreen;
