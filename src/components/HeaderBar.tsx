import React from 'react';
import * as reactNative from 'react-native';
import {crown, logo, share} from '../assets/images';
import {BORDERRADIUS, SPACING} from '../theme/theme';

const HeaderBar = () => {
  const handleOnShare = async () => {
    try {
      const result = await reactNative.Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === reactNative.Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === reactNative.Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
      reactNative.Alert.alert(error.message);
    }
  };

  return (
    <reactNative.View style={styles.container}>
      <reactNative.View>
        <reactNative.Image source={logo} />
      </reactNative.View>

      <reactNative.View style={styles.iconWrapper}>
        <reactNative.TouchableOpacity style={styles.crownIconView}>
          <reactNative.Image source={crown} />
        </reactNative.TouchableOpacity>
        <reactNative.TouchableOpacity
          onPress={() => handleOnShare()}
          style={styles.crownIconView}>
          <reactNative.Image source={share} />
        </reactNative.TouchableOpacity>
      </reactNative.View>
    </reactNative.View>
  );
};

export default HeaderBar;

const styles = reactNative.StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: SPACING.space_8,
    marginBottom: SPACING.space_10,
  },
  iconWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: SPACING.space_12,
  },
  crownIconView: {
    backgroundColor: '#F9F9F9',
    borderRadius: BORDERRADIUS.radius_100,
    height: 44,
    width: 44,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
});
