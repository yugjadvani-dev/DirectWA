import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, SPACING} from '../theme/theme';
import {TouchableOpacity} from 'react-native';

const SingleMessage = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.countryCode}>
        <Text>Hello</Text>
      </TouchableOpacity>
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
