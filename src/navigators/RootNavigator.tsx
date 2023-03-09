import React from 'react';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainNavigator from './MainNavigator';
import AuthNavigator from './AuthNavigator';
import { NavigatorNames } from '~types';
import { Colors } from '~theme/colors';

const Stack = createNativeStackNavigator();

const darkTheme: Theme = {
  dark: true,
  colors: {
    background: Colors.Black,
    primary: Colors.Green,
    text: Colors.White,
    border: Colors.Black,
    card: Colors.Black,
    notification: Colors.White,
  },
};

export default function RootNavigator() {
  return (
    <NavigationContainer theme={darkTheme}>
      <Stack.Navigator
        initialRouteName={NavigatorNames.AUTH_NAVIGATOR}
        screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name={NavigatorNames.MAIN_NAVIGATOR}
          component={MainNavigator}
        />
        <Stack.Screen
          name={NavigatorNames.AUTH_NAVIGATOR}
          component={AuthNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
