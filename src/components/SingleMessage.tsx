import React, {useState} from 'react';
import * as reactNative from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme';
import LinearGradient from 'react-native-linear-gradient';
import Snackbar from 'react-native-snackbar';

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

  const withCountryNameButton = true;
  const withFlag = true;
  const withEmoji = true;
  const withFilter = true;
  const withAlphaFilter = false;
  const withCallingCode = false;
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

  const copyToClipboard = () => {
    reactNative.Clipboard.setString(message);

    return Snackbar.show({
      text: 'Message Copy to clipboard',
      backgroundColor: '#323232',
      textColor: '#FFFFFF',
    });
  };

  return (
    <reactNative.View style={styles.container}>
      <reactNative.View style={styles.countryCode}>
        <reactNative.TouchableOpacity style={styles.countryFlag}>
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
          <reactNative.Text
            style={
              styles.countryText
            }>{`${country?.name} (${country?.currency}) +${country?.callingCode}`}</reactNative.Text>
        </reactNative.TouchableOpacity>
        <reactNative.View>
          <Icon name="keyboard-arrow-down" size={24} color="black" />
        </reactNative.View>
      </reactNative.View>
      <reactNative.View>
        <reactNative.Text style={styles.label}>Phone Number</reactNative.Text>
        <reactNative.View style={styles.input}>
          <Ionicons name="call-outline" size={20} color="black" />
          <reactNative.TextInput
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
            value={message}
            placeholder="Enter Message"
            onChangeText={onChangeMessage}
            keyboardType="numbers-and-punctuation"
          />
          <reactNative.TouchableOpacity
            onPress={() => copyToClipboard()}
            style={styles.copyIcon}>
            <Ionicons name="copy-outline" size={16} color="#075E55" />
          </reactNative.TouchableOpacity>
        </reactNative.View>
      </reactNative.View>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={['#0E7E73', '#075E55']}
        style={styles.chatBtn}>
        <reactNative.TouchableOpacity onPress={() => handleOpenChat()}>
          <reactNative.Text style={styles.chatText}>Open Chat</reactNative.Text>
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
  countryCode: {
    backgroundColor: COLORS.primaryWhiteHex,
    paddingHorizontal: SPACING.space_20,
    paddingVertical: 17,
    borderRadius: 150,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 3,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginBottom: SPACING.space_12,
  },
  countryFlag: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  countryText: {
    color: COLORS.primaryBlackHex,
    fontSize: FONTSIZE.size_14,
    fontWeight: '500',
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
  chatBtn: {
    paddingHorizontal: 18,
    paddingVertical: 15,
    borderRadius: 60,
  },
  chatText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
    fontFamily: FONTFAMILY.inter_bold,
  },
});

export default SingleMessage;
