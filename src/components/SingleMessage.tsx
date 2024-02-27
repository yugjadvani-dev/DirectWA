import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {COLORS, FONTSIZE, SPACING} from '../theme/theme';

const SingleMessage: React.FC = () => {
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

  const onSelect = (selectCountry: Country) => {
    setCountryCode(selectCountry.cca2);
    setCountry(selectCountry);
  };

  const withCountryNameButton = true;
  const withFlag = true;
  const withEmoji = true;
  const withFilter = true;
  const withAlphaFilter = false;
  const withCallingCode = false;
  const showCountry = false;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.countryCode}>
        <View style={styles.countryFlag}>
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
          <Text
            style={
              styles.countryText
            }>{`${country?.name} (${country?.currency}) +${country?.callingCode}`}</Text>
        </View>
        <View>
          <Icon name="keyboard-arrow-down" size={24} color="black" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: SPACING.space_24,
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
    marginBottom: SPACING.space_12,
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
});

export default SingleMessage;
