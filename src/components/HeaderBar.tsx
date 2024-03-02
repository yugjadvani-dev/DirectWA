import React from 'react';
import * as reactNative from 'react-native';
import {logo} from '../assets/images';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {BORDERRADIUS, COLORS, SPACING} from '../theme/theme';

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
          <Icon
            name="crown-outline"
            size={SPACING.space_30}
            color={'#272D36'}
          />
        </reactNative.TouchableOpacity>
        <reactNative.TouchableOpacity
          onPress={() => handleOnShare()}
          style={styles.crownIconView}>
          <Icon
            name="share-variant-outline"
            size={SPACING.space_30}
            color={'#272D36'}
          />
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
    backgroundColor: COLORS.primaryGreyHex,
    borderRadius: BORDERRADIUS.radius_100,
    height: 44,
    width: 44,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
});
