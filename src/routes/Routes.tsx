import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {AppStack} from './AppStack';
import {AuthStack} from './AuthStack';
import {useAuthCredentials} from '../services/authCredentials/useAuthCredentials';

const navigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFFFFF',
  },
};

export function Router() {
  const {authCredentials} = useAuthCredentials();
  return (
    <NavigationContainer theme={navigationTheme}>
      {authCredentials?.refreshToken ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
