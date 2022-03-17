import React, {useState, useRef, useEffect} from 'react';
import {StyleSheet, View, Text, Button, Alert, ScrollView, FlatList} from 'react-native';

import NumberContainer from '../components/layout/NumberContainer';
import Card from '../components/layout/Card';
import MainButton from '../components/layout/mainButton';
import List from '../components/layout/List';
import Colors from '../constants/colors';
import DefaultStyles from '../constants/default-styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const generateRandomNumber = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return rndNum;
  }
};

const GameScreen = ({userChoice, onGameOver}) => {
  const initialGuess = generateRandomNumber(1, 100, userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [pastGuesses, setPastGuesses] = useState([initialGuess.toString()]);

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(pastGuesses.length);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = direction => {
    if (
      (direction === 'lower' && currentGuess < userChoice) ||
      (direction === 'greater' && currentGuess > userChoice)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        {text: 'Sorry!', style: 'cancel'},
      ]);
      return;
    }
    if (direction === 'lower') {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess + 1;
    }
    const nextNumber = generateRandomNumber(
      currentLow.current,
      currentHigh.current,
      currentGuess,
    );
    setCurrentGuess(nextNumber);
    setPastGuesses(currentPastGueses => [nextNumber.toString(), ...currentPastGueses]);
  };

  return (
    <View style={styles.screen}>
      <Card style={styles.card}>
        <Text style={DefaultStyles.text}>Opponent's Guess</Text>
        <NumberContainer number={currentGuess} />
        <View style={styles.btnContainer}>
          <MainButton
            style={styles.btn}
            color={Colors.primary}
            onClick={nextGuessHandler.bind(this, 'lower')}>
            <Ionicons name="md-remove" size={24} color={Colors.lightPrimary} />
          </MainButton>
          <MainButton
            style={styles.btn}
            color={Colors.primary}
            onClick={nextGuessHandler.bind(this, 'greater')}>
            <Ionicons name="md-add" size={24} color={Colors.lightPrimary} />
          </MainButton>
        </View>
      </Card>
      {/* <View style={styles.listContainer}>
        <ScrollView contentContainerStyle={styles.list}>
          {pastGuesses.map((guess, index) => (
            <List value={guess} numOfRound={pastGuesses.length - index} />
          ))}
        </ScrollView>
      </View> */}
      <FlatList keyExtractor={item => item} data={pastGuesses} renderItem={itemData => <List value={itemData.item.value} numOfRound={itemData.length} />} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  card: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
    marginVertical: 20,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 300,
    maxWidth: '80%',
  },
  btn: {
    width: '100%',
    fontFamily: 'Open Sans',
  },
  listContainer: {
    flex: 1,
    width: '80%',
  },
  list: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

export default GameScreen;
