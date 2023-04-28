import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MenuProvider } from 'react-native-popup-menu';
import Router from './src/routers';
import { StatusBar } from 'react-native';
import { dark } from './src/utils/constants/color';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <MenuProvider>
        <StatusBar backgroundColor={dark} />
        <Router />
      </MenuProvider>
    </SafeAreaProvider>
  );
}

export default App;
