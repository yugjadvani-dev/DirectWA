import React, {useEffect} from 'react';
import Home from './screens/Home';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PremiumFeature from './screens/PremiumFeature';

export type RootStackParamList = {
  Home: undefined;
  PremiumFeature: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Wa Direct'}}
        />
        <Stack.Screen
          name="PremiumFeature"
          component={PremiumFeature}
          options={{title: 'Premium Feature'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
