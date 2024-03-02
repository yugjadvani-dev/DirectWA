import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
// import MultiSendScreen from './screens/MultiSendScreen';
import HomeScreen from './screens/HomeScreen';
import SplashScreen from 'react-native-splash-screen';

function App(): React.JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <HomeScreen />
          {/* <MultiSendScreen /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
