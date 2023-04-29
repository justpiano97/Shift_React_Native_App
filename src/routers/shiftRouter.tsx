import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainLayout from '../layout/MainLayout';

import { AppRouter } from './config';
import ShiftRegisterProfile from '../page/Shift/Auth/RegisterProfile';
import ShiftRegister from '../page/Shift/Auth/Register';
import ShiftRegisterComplete from '../page/Shift/Auth/RegisterComplete';

const ShiftStack = createNativeStackNavigator();

const ShiftRouter = () => {
  return (
    <MainLayout>
      <ShiftStack.Navigator
        initialRouteName={AppRouter.Shift.Auth.Register}
        screenOptions={{
          headerShown: false,
        }}
      >
        <ShiftStack.Screen name={AppRouter.Shift.Auth.Register} component={ShiftRegister} />
        <ShiftStack.Screen name={AppRouter.Shift.Auth.RegisterProfile} component={ShiftRegisterProfile} />
        <ShiftStack.Screen name={AppRouter.Shift.Auth.RegisterComplete} component={ShiftRegisterComplete} />
      </ShiftStack.Navigator>
    </MainLayout>
  );
};

export default ShiftRouter;
