import {StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import PhoneInput from 'react-native-phone-number-input';
import CountryPicker from 'react-native-country-picker-modal';
import {Country, CountryCode} from '../types/types';

const SingleMessage: React.FC = () => {
  const [countryCode, setCountryCode] = useState<CountryCode>('FR');
  const [country, setCountry] = useState<Country>(null);
  const [withCountryNameButton, setWithCountryNameButton] =
    useState<boolean>(false);
  const [withFlag, setWithFlag] = useState<boolean>(true);
  const [withEmoji, setWithEmoji] = useState<boolean>(true);
  const [withFilter, setWithFilter] = useState<boolean>(true);
  const [withAlphaFilter, setWithAlphaFilter] = useState<boolean>(false);
  const [withCallingCode, setWithCallingCode] = useState<boolean>(false);
  const [showCountry, setShowCountry] = useState<boolean>(false);

  const onSelect = (country: Country) => {
    setCountryCode(country.cca2);
    setCountry(country);
  };

  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  console.log(
    '🚀 ~ file: SingleMessage.tsx:8 ~ formattedValue 😀👏:',
    formattedValue,
  );
  // const [valid, setValid] = useState(false);
  // const [showMessage, setShowMessage] = useState(false);

  const phoneInput = useRef<PhoneInput>(null);

  return (
    <View style={styles.container}>
      <Text>Code</Text>
      {/* {showMessage && (
        <View>
          <Text>Value : {value}</Text>
          <Text>Formatted Value : {formattedValue}</Text>
          <Text>Valid : {valid ? 'true' : 'false'}</Text>
        </View>
      )} */}
      <PhoneInput
        ref={phoneInput}
        defaultValue={value}
        defaultCode="IN"
        layout="first"
        onChangeText={text => {
          setValue(text);
        }}
        onChangeFormattedText={text => {
          setFormattedValue(text);
        }}
        // withDarkTheme
        withShadow
        autoFocus
      />
      {/* <TouchableOpacity
        onPress={() => {
          const checkValid = phoneInput.current?.isValidNumber(value);
          setShowMessage(true);
          setValid(checkValid ? checkValid : false);
        }}>
        <Text>Check</Text>
      </TouchableOpacity> */}

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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // countryCode: {
  //   backgroundColor: COLORS.primaryWhiteHex,
  //   paddingHorizontal: SPACING.space_20,
  //   paddingVertical: 17,
  //   borderRadius: 150,
  //   shadowColor: '#000',
  //   shadowOffset: {
  //     width: 0,
  //     height: 3,
  //   },
  //   shadowOpacity: 0.05,
  //   shadowRadius: 6,
  //   elevation: 3,
  //   width: '100%',
  // },
});

export default SingleMessage;
