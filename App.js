import React, {useState} from 'react';
import type {Node} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Header from './components/layout/Header.js';
import StartGameScreen from './components/screens/StartGameScreen.js';
import GameScreen from './components/screens/GameScreen.js';
import GameOverScreen from './components/screens/GameOverScreen.js';

const App: () => Node = () => {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber);
  };

  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds);
  };

  const startNewGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {!userNumber && <StartGameScreen onStartGame={startGameHandler} />}
      {userNumber && guessRounds <= 0 && (
        <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
      )}
      {guessRounds > 0 && (
        <GameOverScreen
          userNumber={userNumber}
          roundsNumber={guessRounds}
          onRestart={startNewGameHandler}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default App;
