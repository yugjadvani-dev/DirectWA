import React, {useState} from 'react';
import * as reactNative from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS, FONTFAMILY, SPACING} from '../theme/theme';
import LinearGradient from 'react-native-linear-gradient';
import {global} from '../assets/styles/globalStyle';

const SingleMessage: React.FC = () => {
  const [number, setNumberInput] = useState<string>('');
  const [message, onChangeMessage] = useState<string>('');
  const [countryCode, setCountryCode] = useState<CountryCode>('FR');
  const [country, setCountry] = useState<Country>({
    callingCode: ['33'],
    cca2: 'FR',
    currency: ['EUR'],
    flag: 'flag-fr',
    name: 'France',
    region: 'Europe',
    subregion: 'Western Europe',
  });

  const withCountryNameButton = false;
  const withFlag = true;
  const withEmoji = true;
  const withFilter = true;
  const withAlphaFilter = true;
  const withCallingCode = true;
  const showCountry = false;

  const handleNumberInputChange = (num: string) => {
    setNumberInput(num.replace(/[^0-9]/g, ''));
  };

  const onSelect = (selectCountry: Country) => {
    setCountryCode(selectCountry.cca2);
    setCountry(selectCountry);
  };

  const handleOpenChat = () => {
    try {
      const whatsappLink = `https://wa.me/+${
        country?.callingCode
      }${number}?text=${encodeURIComponent(message)}`;

      reactNative.Linking.openURL(whatsappLink);

      setNumberInput('');
      onChangeMessage('');
    } catch (error: any) {
      reactNative.Alert.alert(error.message);
    }
  };

  const handlePasteText = async () => {
    const clipboardContent = await reactNative.Clipboard.getString();
    onChangeMessage(clipboardContent);
  };

  return (
    <reactNative.View style={styles.container}>
      <reactNative.View>
        <reactNative.Text style={styles.label}>Phone Number</reactNative.Text>
        <reactNative.View style={styles.input}>
          <CountryPicker
            {...{
              countryCode,
              withFilter,
              withFlag,
              withCountryNameButton,
              withAlphaFilter,
              withCallingCode,
              withEmoji,
              onSelect,
            }}
            visible={showCountry}
          />
          <reactNative.TextInput
            style={styles.textInput}
            value={number}
            placeholder="Phone number"
            onChangeText={handleNumberInputChange}
            keyboardType="number-pad"
          />
        </reactNative.View>
      </reactNative.View>
      <reactNative.View>
        <reactNative.Text style={styles.label}>Message</reactNative.Text>
        <reactNative.View style={[styles.input, styles.messageInput]}>
          <reactNative.TextInput
            style={styles.textInput}
            value={message}
            placeholder="Enter Message"
            onChangeText={onChangeMessage}
            keyboardType="numbers-and-punctuation"
          />
          <reactNative.TouchableOpacity
            onPress={handlePasteText}
            style={styles.copyIcon}>
            <Ionicons name="copy-outline" size={16} color="#075E55" />
          </reactNative.TouchableOpacity>
        </reactNative.View>
      </reactNative.View>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={['#0E7E73', '#075E55']}
        style={global.chatBtn}>
        <reactNative.TouchableOpacity onPress={() => handleOpenChat()}>
          <reactNative.Text style={global.chatText}>Open Chat</reactNative.Text>
        </reactNative.TouchableOpacity>
      </LinearGradient>
    </reactNative.View>
  );
};

const styles = reactNative.StyleSheet.create({
  container: {
    marginTop: SPACING.space_24,
    gap: 16,
  },
  input: {
    paddingHorizontal: 18,
    borderRadius: 150,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 3,
    backgroundColor: COLORS.primaryWhiteHex,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    height: 56,
    // placeholderTextColor: '#ADB5BD',
  },
  messageInput: {
    position: 'relative',
    justifyContent: 'space-between',
    height: 109,
    borderRadius: 12,
    alignItems: 'baseline',
  },
  copyIcon: {
    position: 'absolute',
    right: 15,
    top: 15,
  },
  label: {
    fontFamily: FONTFAMILY.inter_medium,
    fontSize: 14,
    fontWeight: '500',
    color: '#272B33',
    marginBottom: 8,
  },
  textInput: {
    color: '#000',
    // placeholderTextColor: '#ADB5BD',
  },
});

export default SingleMessage;
