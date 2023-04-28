import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import EmployerRegister from '../page/Employer/Registration';
import MainLayout from '../layout/MainLayout';
import { AppRouter } from './config';

const EmployerStack = createNativeStackNavigator();

const EmployerRouter = () => {
  return (
    <MainLayout isEmployer>
      <EmployerStack.Navigator
        initialRouteName={AppRouter.Employer.Auth.Register}
        screenOptions={{
          headerShown: false,
        }}
      >
        <EmployerStack.Screen name={AppRouter.Employer.Auth.Register} component={EmployerRegister} />
        {/* <EmployerStack.Screen name={ScreenRouter.Employer.Auth.Terms} component={Terms} /> */}

        {/* <EmployerStack.Screen name={ScreenRouter.Employer.Main.ShiftPost} component={ShitPost} />
        <EmployerStack.Screen name={ScreenRouter.Employer.Main.ShitList} component={ShiftList} />
        <EmployerStack.Screen name={ScreenRouter.Employer.Main.ShitDetail} component={ShiftDetail} /> */}
      </EmployerStack.Navigator>
    </MainLayout>
  );
};

export default EmployerRouter;
