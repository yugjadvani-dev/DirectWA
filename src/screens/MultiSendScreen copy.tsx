import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Linking,
} from 'react-native';

const MultiSendScreen: React.FC = () => {
  const [numberInput, setNumberInput] = useState<string>('');
  const [textInput, setTextInput] = useState<string>('');

  const handleNumberInputChange = (text: string) => {
    setNumberInput(text);
  };

  const handleTextInputChange = (text: string) => {
    setTextInput(text);
  };

  const handleSendMessage = () => {
    try {
      // Split the input string into an array of phone numbers
      const phoneNumbers = numberInput.split(',').map(number => number.trim());

      // Iterate over each phone number and send the message
      phoneNumbers.forEach(phoneNumber => {
        const whatsappLink = `https://wa.me/+91${phoneNumber}?text=${encodeURIComponent(
          textInput,
        )}`;
        Linking.openURL(whatsappLink);
      });
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter comma-separated numbers"
        keyboardType="default"
        value={numberInput}
        onChangeText={handleNumberInputChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter a message"
        value={textInput}
        onChangeText={handleTextInputChange}
      />
      <TouchableOpacity style={styles.button} onPress={handleSendMessage}>
        <Text>Send Messages</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
    marginTop: 20,
  },
});

export default MultiSendScreen;
