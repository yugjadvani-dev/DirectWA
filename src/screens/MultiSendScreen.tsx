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
  const [numberInputs, setNumberInputs] = useState<string[]>(['']);
  const [textInput, setTextInput] = useState<string>('');

  const handleNumberInputChange = (text: string, index: number) => {
    const newNumberInputs = [...numberInputs];
    newNumberInputs[index] = text.replace(/[^0-9]/g, '');
    setNumberInputs(newNumberInputs);
  };

  const handleAddNumberInput = () => {
    setNumberInputs([...numberInputs, '']);
  };

  const handleTextInputChange = (text: string) => {
    setTextInput(text);
  };

  const handleSendMessage = async () => {
    try {
      for (const numberInput of numberInputs) {
        const formattedNumber = `+91${numberInput}`;
        const whatsappLink = `https://wa.me/${formattedNumber}?text=${encodeURIComponent(
          textInput,
        )}`;

        await Linking.openURL(whatsappLink);
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <View style={styles.container}>
      {numberInputs.map((number, index) => (
        <TextInput
          key={index.toString()}
          style={styles.input}
          placeholder={`Enter number ${index + 1}`}
          keyboardType="numeric"
          value={number}
          onChangeText={text => handleNumberInputChange(text, index)}
        />
      ))}
      <TouchableOpacity style={styles.button} onPress={handleAddNumberInput}>
        <Text>Add Number</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Enter a message"
        value={textInput}
        onChangeText={handleTextInputChange}
      />
      <TouchableOpacity style={styles.button} onPress={handleSendMessage}>
        <Text>Open Chat</Text>
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
    marginVertical: 8,
    borderWidth: 1,
    padding: 10,
    width: '100%',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    width: '100%',
    padding: 10,
    marginVertical: 8,
  },
});

export default MultiSendScreen;
