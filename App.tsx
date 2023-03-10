import React from 'react';
import { StatusBar } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigator from '~navigators/RootNavigator';
import AppProvider from '~store/AppProvider';

export default function App() {
  return (
    <SafeAreaProvider>
      <AppProvider>
        <StatusBar barStyle="light-content" />
        <RootNavigator />
      </AppProvider>
    </SafeAreaProvider>
  );
}
