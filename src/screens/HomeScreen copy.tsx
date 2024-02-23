import React, {useState} from 'react';
import * as reactNative from 'react-native';

const HomeScreen: React.FC = () => {
  const [numberInput, setNumberInput] = useState<string>('');
  const [textInput, setTextInput] = useState<string>('');

  const handleNumberInputChange = (text: string) => {
    setNumberInput(text.replace(/[^0-9]/g, ''));
  };

  const handleTextInputChange = (text: string) => {
    setTextInput(text);
  };

  const handleSendMessage = () => {
    try {
      const whatsappLink = `https://wa.me/+91${numberInput}?text=${encodeURIComponent(
        textInput,
      )}`;

      reactNative.Linking.openURL(whatsappLink);
    } catch (error) {
      console.log('🚀 ~ file: HomeScreen.tsx:27 ~ error 😀👏:', error);
    }
  };

  return (
    <>
      <reactNative.View style={styles.container}>
        <reactNative.TextInput
          style={styles.input}
          placeholder="Enter a number"
          keyboardType="numeric"
          value={numberInput}
          onChangeText={handleNumberInputChange}
        />
        <reactNative.TextInput
          style={styles.input}
          placeholder="Enter a message"
          value={textInput}
          onChangeText={handleTextInputChange}
        />
        <reactNative.TouchableOpacity
          style={styles.button}
          onPress={handleSendMessage}>
          <reactNative.Text>Open Chat</reactNative.Text>
        </reactNative.TouchableOpacity>
      </reactNative.View>
    </>
  );
};

const styles = reactNative.StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '100%',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    width: '100%',
    padding: 10,
  },
});

export default HomeScreen;
