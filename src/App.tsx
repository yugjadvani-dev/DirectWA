import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
// import MultiSendScreen from './screens/MultiSendScreen';
import HomeScreen from './screens/HomeScreen';

function App(): React.JSX.Element {
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
