import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';

import Card from '../layout/Card';
import Input from '../layout/Input';
import MainButton from '../layout/mainButton';
import NumberContainer from '../layout/NumberContainer';
import Colors from '../../constants/colors';
import DefaultStyles from '../../constants/default-styles';

const StartGameScreen = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const keyboardDismiss = () => {
    Keyboard.dismiss();
  };

  const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };

  const resetInputHandler = () => {
    setEnteredValue('');
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid number!',
        'Number has to be number between 1 and 99.',
        [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}],
      );
      return;
    }
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue('');
    Keyboard.dismiss();
  };

  const startGameHandler = () => {
    props.onStartGame(selectedNumber);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardDismiss}>
      <View style={styles.screen}>
        <Text style={DefaultStyles.titleText}>Start a New Game!</Text>
        <Card style={styles.inputContainer}>
          <Text style={DefaultStyles.text}>Select a Number</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.btnContainer}>
            <MainButton
              title="Reset"
              onClick={resetInputHandler}
              style={styles.resetBtn}
            />
            <MainButton title="Confirm" onClick={confirmInputHandler} />
          </View>
        </Card>
        {confirmed && (
          <Card style={styles.outputContainer}>
            <Text style={DefaultStyles.text}>You selected</Text>
            <NumberContainer number={selectedNumber} />
            <MainButton title="START GAME" onClick={startGameHandler} />
          </Card>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  resetBtn: {
    backgroundColor: Colors.accent,
  },
  input: {
    width: 50,
    textAlign: 'center',
    marginBottom: 30,
    fontFamily: 'Open Sans',
    fontSize: 18,
  },
  outputContainer: {
    marginTop: 20,
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
});

export default StartGameScreen;
