import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SPACING} from '../theme/theme';
import {logo} from '../assets/images';
import CustomIcon from './CustomIcon';
// import Icon from 'react-native-vector-icons/FontAwesome6';

const HeaderBar = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={logo} style={styles.image} />
      </View>
      <View>
        {/* <Icon name="crown" size={30} /> */}
        <CustomIcon name="crown" size={24} />
        <Text>TExt</Text>
      </View>
    </View>
  );
};

export default HeaderBar;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: SPACING.space_30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    // height: SPACING.space_36,
    // width: SPACING.space_36,
  },
});
