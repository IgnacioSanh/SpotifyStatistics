import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';

import { RootNavigatorParamList, ScreenNames } from '~types';

const Stack = createNativeStackNavigator<RootNavigatorParamList>();

export default function RootNavigator() {
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name={ScreenNames.HOME}
        component={() => <Text>Hello</Text>}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  </NavigationContainer>;
}
