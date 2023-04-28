import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MenuProvider } from 'react-native-popup-menu';
import Router from './src/routers';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <MenuProvider>
        <Router />
      </MenuProvider>
    </SafeAreaProvider>
  );
}

export default App;
