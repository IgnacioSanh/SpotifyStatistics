import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenNames, HomeNavigatorParamList } from '~types';

import { HomeScreen, ArtistDetailScreen } from '~screens';

const Stack = createNativeStackNavigator<HomeNavigatorParamList>();

export default function HomeNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ScreenNames.HOME} component={HomeScreen} />
      <Stack.Screen
        name={ScreenNames.ARTIST_DETAIL}
        component={ArtistDetailScreen}
      />
    </Stack.Navigator>
  );
}
