import React from 'react';
import { StatusBar } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';

import RootNavigator from '~navigators/RootNavigator';
import AuthProvider from '~store/AuthProvider';

export default function App() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <StatusBar barStyle="light-content" />
        <RootNavigator />
        <Toast />
      </AuthProvider>
    </SafeAreaProvider>
  );
}
