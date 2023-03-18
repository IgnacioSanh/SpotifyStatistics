import React from 'react';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainNavigator from './MainNavigator';
import AuthNavigator from './AuthNavigator';
import { NavigatorNames } from '~types';
import { Colors } from '~theme/colors';
import { useAuthContext } from '~store/AuthProvider';

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
  const { userIsLogged } = useAuthContext();
  return (
    <NavigationContainer theme={darkTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {userIsLogged ? (
          <Stack.Screen
            name={NavigatorNames.MAIN_NAVIGATOR}
            component={MainNavigator}
          />
        ) : (
          <Stack.Screen
            name={NavigatorNames.AUTH_NAVIGATOR}
            component={AuthNavigator}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
