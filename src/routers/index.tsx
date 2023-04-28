import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../page/Home';
import { AppRouter } from './config';
import { dark } from '../utils/constants/color';

const MainStack = createNativeStackNavigator();

export type MainStackParamsList = {
  [key in string]: any;
};

const Router: React.FC = () => {
  return (
    <View style={{ flex: 1, backgroundColor: dark }}>
      <NavigationContainer>
        <MainStack.Navigator
          initialRouteName={AppRouter.Main.Home}
          screenOptions={{
            headerShown: false,
          }}
        >
          <MainStack.Screen name={AppRouter.Main.Home} component={Home} />
        </MainStack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default Router;
