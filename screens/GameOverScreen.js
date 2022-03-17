import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
  Dimensions,
} from 'react-native';

import MainButton from '../components/layout/mainButton';
import Colors from '../constants/colors';
import DefaultStyles from '../constants/default-styles';

const GameOverScreen = ({roundsNumber, userNumber, onRestart}) => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <Text style={DefaultStyles.text}>Game is Over!</Text>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={require('../assets/success.png')}
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
            <Text style={DefaultStyles.highlightText}>
              {' '}
              {roundsNumber}
            </Text>{' '}
            rounds to guess the number
            <Text style={DefaultStyles.highlightText}> {userNumber}.</Text>
          </Text>
        </View>
        <MainButton onClick={onRestart}>NEW GAME</MainButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  imageContainer: {
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').width * 0.7,
    borderRadius: (Dimensions.get('window').width * 0.7) / 2,
    borderWidth: 3,
    borderColor: Colors.grey,
    marginVertical: Dimensions.get('window').height / 30,
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
