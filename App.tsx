import React from 'react';
import { Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MenuProvider } from 'react-native-popup-menu';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <MenuProvider>
        <Text>AAA</Text>
      </MenuProvider>
    </SafeAreaProvider>
  );
}

export default App;
