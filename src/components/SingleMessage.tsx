import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CountryPicker, {Country} from 'react-native-country-picker-modal';
import {COLORS, SPACING} from '../theme/theme';
import {TouchableOpacity} from 'react-native';

const SingleMessage = () => {
  const [selectedCountry, setSelectedCountry] = React.useState<
    Country | null | undefined
  >(null);
  console.log(
    '🚀 ~ file: SingleMessage.tsx:7 ~ selectedCountry 😀👏:',
    selectedCountry,
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.countryCode}>
        <CountryPicker
          withFlag
          withCallingCode
          withEmoji
          countryCode="US"
          onSelect={country => setSelectedCountry(country)}
          visible
          //   countryCode={selectedCountry?.cca2}
        />
      </TouchableOpacity>
      {/* <Text>
        {selectedCountry
          ? `${selectedCountry?.flag} ${selectedCountry?.name} +${selectedCountry?.callingCode}`
          : 'Select a country'}
      </Text> */}
      {/* {selectedCountry && (
        <View>
          <CountryPicker
            withFlagButton={false}
            countryCode={selectedCountry.cca2}
            withFlag
            withEmoji={false}
            withFilter={false}
          />
          <Text>
            {selectedCountry
              ? `${selectedCountry?.name} +${selectedCountry?.callingCode}`
              : 'Select a country'}
          </Text>
        </View>
      )} */}
    </View>
  );
};

export default SingleMessage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  },
});
