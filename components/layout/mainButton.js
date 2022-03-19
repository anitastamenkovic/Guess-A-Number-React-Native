import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  Dimensions,
} from 'react-native';
import Colors from '../../constants/colors';

const MainButton = ({children, onClick, style}) => {
  let ButtonComponent = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    ButtonComponent = TouchableNativeFeedback;
  }

  const [buttonWidth, setButtonWidth] = useState(
    Dimensions.get('window').width / 4,
  );

  useEffect(() => {
    const updateLayout = () => {
      setButtonWidth(Dimensions.get('window').width / 4);
    };
    const subscribe = Dimensions.addEventListener('change', updateLayout);
    return () => {
      subscribe.remove();
    };
  });
  return (
    <View style={styles.container}>
      <ButtonComponent activeOpacity={0.6} onPress={onClick}>
        <View style={{...styles.btnContainer, ...style}}>
          <Text style={styles.btnText}>{children}</Text>
        </View>
      </ButtonComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  btnContainer: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: Colors.lightPrimary,
    fontFamily: 'Open Sans',
    fontSize: 18,
  },
});

export default MainButton;
