import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {RootStackParamList} from './src/types/types';
import SplashScreen from './src/screens/SplashScreen';

export default function App() {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="SplashScreen"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
