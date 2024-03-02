import React from 'react';
import * as reactNative from 'react-native';
import * as theme from '../theme/theme';
import LinearGradient from 'react-native-linear-gradient';
import {global} from '../assets/styles/globalStyle';

const FeatureList = () => {
  return (
    <reactNative.View style={styles.listMain}>
      <reactNative.Text style={styles.listText}>
        Have an{' '}
        <reactNative.Text
          style={{
            color: theme.COLORS.primaryBlackHex,
          }}>
          Ads free
        </reactNative.Text>{' '}
        experience
      </reactNative.Text>
      <reactNative.Text style={styles.listText}>
        Increase Multi message limit to{' '}
        <reactNative.Text
          style={{
            color: theme.COLORS.primaryBlackHex,
          }}>
          30 numbers
        </reactNative.Text>
      </reactNative.Text>
      <reactNative.Text style={styles.listText}>
        Increase CSV limit to{' '}
        <reactNative.Text
          style={{
            color: theme.COLORS.primaryBlackHex,
          }}>
          30 numbers
        </reactNative.Text>
      </reactNative.Text>
    </reactNative.View>
  );
};

const PremiumFeature = () => {
  return (
    <reactNative.View style={styles.container}>
      <reactNative.View style={styles.card}>
        <reactNative.Text style={styles.basicText}>Basic</reactNative.Text>
        <reactNative.Text>
          <reactNative.Text style={styles.priceText}>₹79.00</reactNative.Text>
          <reactNative.Text style={styles.monthText}>/Monthly</reactNative.Text>
        </reactNative.Text>
        <FeatureList />
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={['#0E7E73', '#075E55']}
          style={global.chatBtn}>
          <reactNative.TouchableOpacity>
            <reactNative.Text style={global.chatText}>
              Choose this Plan
            </reactNative.Text>
          </reactNative.TouchableOpacity>
        </LinearGradient>
      </reactNative.View>

      <reactNative.View style={styles.card}>
        <reactNative.View style={styles.cardHeader}>
          <reactNative.View>
            <reactNative.Text style={styles.basicText}>
              Advance
            </reactNative.Text>
            <reactNative.Text>
              <reactNative.Text style={styles.priceText}>
                ₹568.00
              </reactNative.Text>
              <reactNative.Text style={styles.monthText}>
                /Yearly
              </reactNative.Text>
            </reactNative.Text>
          </reactNative.View>
          <reactNative.Text style={styles.discountText}>
            40% Off
          </reactNative.Text>
        </reactNative.View>
        <FeatureList />
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={['#0E7E73', '#075E55']}
          style={global.chatBtn}>
          <reactNative.TouchableOpacity>
            <reactNative.Text style={global.chatText}>
              Choose this Plan
            </reactNative.Text>
          </reactNative.TouchableOpacity>
        </LinearGradient>
      </reactNative.View>
    </reactNative.View>
  );
};

const styles = reactNative.StyleSheet.create({
  container: {
    padding: theme.SPACING.space_20,
    gap: theme.SPACING.space_20,
  },
  card: {
    backgroundColor: '#FAFAFA',
    borderRadius: theme.BORDERRADIUS.radius_20,
    padding: theme.SPACING.space_20,
  },
  basicText: {
    fontFamily: theme.FONTFAMILY.inter_black,
    fontSize: theme.FONTSIZE.size_16,
    fontStyle: 'normal',
    color: '#444B54',
    fontWeight: '600',
    marginBottom: 5,
  },
  priceText: {
    color: '#212529',
    fontFamily: theme.FONTFAMILY.inter_extrabold,
    fontSize: theme.FONTSIZE.size_24,
    fontWeight: '600',
  },
  monthText: {
    color: '#ADB5BD',
    fontFamily: theme.FONTFAMILY.inter_extrabold,
    fontSize: theme.FONTSIZE.size_24,
    fontWeight: '400',
  },
  listMain: {
    marginVertical: theme.SPACING.space_16,
    gap: 6,
  },
  listText: {
    color: '#868E96',
    fontSize: theme.FONTSIZE.size_14,
    fontWeight: '500',
    fontFamily: theme.FONTFAMILY.inter_regular,
  },
  discountText: {
    backgroundColor: '#eaf1ef',
    borderRadius: 50,
    paddingVertical: 6,
    paddingHorizontal: theme.SPACING.space_10,
    color: '#075E55',
    fontSize: theme.FONTSIZE.size_14,
    fontFamily: theme.FONTFAMILY.inter_regular,
    fontWeight: '500',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});

export default PremiumFeature;
