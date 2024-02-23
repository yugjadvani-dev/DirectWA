import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import HeaderBar from '../components/HeaderBar';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme';
import {ImageBackground} from 'react-native';
import {homeBg, mainLogo} from '../assets/images';
import SingleMessage from '../components/SingleMessage';

const HomeScreen: React.FC = () => {
  return (
    <>
      <View style={styles.container}>
        <HeaderBar />
        <Text style={styles.welcome}>Welcome Back!✌️</Text>
        <View style={styles.imageWrapper}>
          <ImageBackground
            source={homeBg}
            resizeMode="cover"
            style={styles.image}>
            <View style={styles.imageLogo}>
              <Image source={mainLogo} />
              <Text style={styles.directly}>
                Directly message anyone without saving phone as contact.
              </Text>
            </View>
            <SingleMessage />
          </ImageBackground>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACING.space_20,
    backgroundColor: COLORS.primaryWhiteHex,
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
