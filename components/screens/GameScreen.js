import React, {useState, useRef, useEffect} from 'react';
import {StyleSheet, View, Text, Button, Alert} from 'react-native';

import NumberContainer from '../layout/NumberContainer';
import Card from '../layout/Card';
import Colors from '../../constants/colors';
import DefaultStyles from '../../constants/default-styles';

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
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomNumber(1, 100, userChoice),
  );
  const [rounds, setRounds] = useState(0);

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(rounds);
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
      currentLow.current = currentGuess;
    }
    const nextNumber = generateRandomNumber(
      currentLow.current,
      currentHigh.current,
      currentGuess,
    );
    setCurrentGuess(nextNumber);
    setRounds(currentRounds => currentRounds + 1);
  };

  return (
    <View style={styles.screen}>
      <Card style={styles.card}>
        <Text style={DefaultStyles.text}>Opponent's Guess</Text>
        <NumberContainer number={currentGuess} />
        <View style={styles.btnContainer}>
          <Button
            title="LOWER"
            style={styles.btn}
            color={Colors.primary}
            onPress={nextGuessHandler.bind(this, 'lower')}
          />
          <Button
            title="GREATER"
            style={styles.btn}
            color={Colors.primary}
            onPress={nextGuessHandler.bind(this, 'greater')}
          />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    alignItems: 'center',
  },
  card: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 300,
    maxWidth: '80%',
  },
  btn: {
    width: 100,
    fontFamily: 'Open Sans',
  },
});

export default GameScreen;
