import React from 'react';
import * as reactNative from 'react-native';
import * as reactNativeGoogleMobileAds from 'react-native-google-mobile-ads';
import HeaderBar from '../components/HeaderBar';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme';
import {homeBg, mainLogo} from '../assets/images';
import SingleMessage from '../components/SingleMessage';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const adUnitId: string | undefined = __DEV__
  ? reactNativeGoogleMobileAds.TestIds.ADAPTIVE_BANNER
  : 'ca-app-pub-4150812329940329~6918087907';

// const adUnitId2 = __DEV__
//   ? reactNativeGoogleMobileAds.TestIds.INTERSTITIAL
//   : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';

// const interstitial =
//   reactNativeGoogleMobileAds.InterstitialAd.createForAdRequest(adUnitId2, {
//     requestNonPersonalizedAdsOnly: true,
//     keywords: ['fashion', 'clothing'],
//   });

const Home: React.FC<HomeProps> = ({navigation}) => {
  // const [loaded, setLoaded] = useState(false);

  // useEffect(() => {
  //   const unsubscribe = interstitial.addAdEventListener(
  //     reactNativeGoogleMobileAds.AdEventType.LOADED,
  //     () => {
  //       setLoaded(true);
  //     },
  //   );

  //   // Start loading the interstitial straight away
  //   interstitial.load();

  //   // Unsubscribe from events on unmount
  //   return unsubscribe;
  // }, []);

  // // No advert ready to show yet
  // if (!loaded) {
  //   return null;
  // }

  return (
    <>
      <reactNative.ScrollView keyboardShouldPersistTaps="handled">
        <reactNative.SafeAreaView style={styles.container}>
          <reactNative.View>
            <reactNative.View style={{padding: SPACING.space_20}}>
              <HeaderBar navigation={navigation} />
              <reactNativeGoogleMobileAds.BannerAd
                unitId={adUnitId}
                size={
                  reactNativeGoogleMobileAds.BannerAdSize
                    .ANCHORED_ADAPTIVE_BANNER
                }
                requestOptions={{
                  requestNonPersonalizedAdsOnly: true,
                }}
              />
              <reactNative.Text style={styles.welcome}>
                Welcome Back!✌️
              </reactNative.Text>
            </reactNative.View>
            <reactNative.View>
              <reactNative.ImageBackground
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
                {/* <reactNative.View
                  style={{
                    marginVertical: SPACING.space_10,
                  }}>
                  <reactNative.Button
                    title="Show Interstitial"
                    onPress={() => {
                      interstitial.show();
                    }}
                  />
                </reactNative.View> */}
              </reactNative.ImageBackground>
            </reactNative.View>
          </reactNative.View>
        </reactNative.SafeAreaView>
      </reactNative.ScrollView>
    </>
  );
};

const styles = reactNative.StyleSheet.create({
  container: {
    flex: 1,
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
    backgroundColor: '#F9F9F9',
    padding: 24,
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
    color: '#495057',
  },
});

export default Home;
