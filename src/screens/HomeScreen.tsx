import React, {useEffect, useState} from 'react';
import * as reactNative from 'react-native';
import HeaderBar from '../components/HeaderBar';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme';
import {ImageBackground} from 'react-native';
import {homeBg, mainLogo} from '../assets/images';
import SingleMessage from '../components/SingleMessage';
import * as reactNativeGoogleMobileAds from 'react-native-google-mobile-ads';

const adUnitId = __DEV__
  ? reactNativeGoogleMobileAds.TestIds.ADAPTIVE_BANNER
  : 'ca-app-pub-4150812329940329/1094538281';

const adUnitId2 = __DEV__
  ? reactNativeGoogleMobileAds.TestIds.INTERSTITIAL
  : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';

const interstitial =
  reactNativeGoogleMobileAds.InterstitialAd.createForAdRequest(adUnitId2, {
    requestNonPersonalizedAdsOnly: true,
    keywords: ['fashion', 'clothing'],
  });

const adUnitId3 = __DEV__
  ? reactNativeGoogleMobileAds.TestIds.REWARDED
  : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';

const rewarded = reactNativeGoogleMobileAds.RewardedAd.createForAdRequest(
  adUnitId3,
  {
    keywords: ['fashion', 'clothing'],
  },
);

const HomeScreen: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const [loaded1, setLoaded1] = useState(false);

  useEffect(() => {
    const unsubscribe = interstitial.addAdEventListener(
      reactNativeGoogleMobileAds.AdEventType.LOADED,
      () => {
        setLoaded(true);
      },
    );

    // Start loading the interstitial straight away
    interstitial.load();

    // Unsubscribe from events on unmount
    return unsubscribe;
  }, []);

  useEffect(() => {
    const unsubscribeLoaded = rewarded.addAdEventListener(
      reactNativeGoogleMobileAds.RewardedAdEventType.LOADED,
      () => {
        setLoaded1(true);
      },
    );
    const unsubscribeEarned = rewarded.addAdEventListener(
      reactNativeGoogleMobileAds.RewardedAdEventType.EARNED_REWARD,
      reward => {
        console.log('User earned reward of ', reward);
      },
    );

    // Start loading the rewarded ad straight away
    rewarded.load();

    // Unsubscribe from events on unmount
    return () => {
      unsubscribeLoaded();
      unsubscribeEarned();
    };
  }, []);

  if (!loaded1) {
    return null;
  }

  // No advert ready to show yet
  if (!loaded) {
    return null;
  }

  return (
    <>
      <reactNative.ScrollView keyboardShouldPersistTaps="handled">
        <reactNative.SafeAreaView style={styles.container}>
          <reactNative.View>
            <HeaderBar />
            <reactNativeGoogleMobileAds.BannerAd
              unitId={adUnitId}
              size={
                reactNativeGoogleMobileAds.BannerAdSize.ANCHORED_ADAPTIVE_BANNER
              }
              requestOptions={{
                requestNonPersonalizedAdsOnly: true,
              }}
            />
            <reactNative.Text style={styles.welcome}>
              Welcome Back!✌️
            </reactNative.Text>
            <reactNative.View style={styles.imageWrapper}>
              <ImageBackground
                source={homeBg}
                resizeMode="cover"
                style={styles.image}>
                <reactNative.View style={styles.imageLogo}>
                  <reactNative.Image source={mainLogo} />
                  <reactNative.Text style={styles.directly}>
                    Directly message anyone without saving phone as contact.
                  </reactNative.Text>
                </reactNative.View>
                <SingleMessage />
              </ImageBackground>
            </reactNative.View>
            <reactNative.View style={{marginBottom: SPACING.space_10}}>
              <reactNative.Button
                title="Show Interstitial"
                onPress={() => {
                  interstitial.show();
                }}
              />
            </reactNative.View>
            <reactNative.Button
              title="Show Rewarded Ad"
              onPress={() => {
                rewarded.show();
              }}
            />
          </reactNative.View>
        </reactNative.SafeAreaView>
      </reactNative.ScrollView>
    </>
  );
};

const styles = reactNative.StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACING.space_20,
    backgroundColor: COLORS.primaryWhiteHex,
    height: '100%',
  },
  welcome: {
    color: COLORS.secondaryGreyHex,
    fontFamily: FONTFAMILY.inter_extrabold,
    fontSize: FONTSIZE.size_26,
    fontWeight: '700',
    marginTop: SPACING.space_8,
    marginBottom: SPACING.space_10,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  imageWrapper: {
    paddingVertical: 24,
  },
  imageLogo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  directly: {
    fontFamily: FONTFAMILY.inter_regular,
    fontSize: FONTSIZE.size_16,
    fontWeight: '400',
    textAlign: 'center',
    paddingTop: SPACING.space_14,
    maxWidth: '79%',
  },
});

export default HomeScreen;
