import React from 'react';
import {StyleSheet, View} from 'react-native';
import HeaderBar from '../components/HeaderBar';

const HomeScreen: React.FC = () => {
  return (
    <>
      <View style={styles.container}>
        <HeaderBar />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});

export default HomeScreen;
