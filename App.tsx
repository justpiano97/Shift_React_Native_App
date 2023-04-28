import React from 'react';
import { Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MenuProvider } from 'react-native-popup-menu';
import Router from './src/routers';
import Home from './src/page/Home';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <MenuProvider>
        <Router />
        {/* <Home /> */}
      </MenuProvider>
    </SafeAreaProvider>
  );
}

export default App;
