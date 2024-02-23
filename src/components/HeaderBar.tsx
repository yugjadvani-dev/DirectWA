import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {logo} from '../assets/images';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {BORDERRADIUS, COLORS, SPACING} from '../theme/theme';

const HeaderBar = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={logo} />
      </View>

      <View style={styles.iconWrapper}>
        <TouchableOpacity style={styles.crownIconView}>
          <Icon
            name="crown-outline"
            size={SPACING.space_30}
            color={'#272D36'}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.crownIconView}>
          <Icon
            name="share-variant-outline"
            size={SPACING.space_30}
            color={'#272D36'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderBar;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: SPACING.space_8,
  },
  iconWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: SPACING.space_12,
  },
  crownIconView: {
    backgroundColor: COLORS.primaryGreyHex,
    borderRadius: BORDERRADIUS.radius_100,
    height: 44,
    width: 44,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
});
