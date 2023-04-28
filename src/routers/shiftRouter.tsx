import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainLayout from '../layout/MainLayout';

import { AppRouter } from './config';
import ShiftSeekerRegister from '../page/Shift/Auth/Register';

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
        <ShiftStack.Screen name={AppRouter.Shift.Auth.Register} component={ShiftSeekerRegister} />
        {/* <ShiftStack.Screen name={AppRouter.Shift.Auth.RegisterProfile} component={ShiftSeekerRegisterProfile} />
        <ShiftStack.Screen name={AppRouter.Shift.Auth.RegisterComplete} component={ShiftSeekerRegisterComplete} /> */}
      </ShiftStack.Navigator>
    </MainLayout>
  );
};

export default ShiftRouter;
