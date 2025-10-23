import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {AppStack} from './AppStack';
import {AuthStack} from './AuthStack';
import {useAuthCredentials} from '../services/authCredentials/useAuthCredentials';

export function Router() {
  const {authCredentials} = useAuthCredentials();
  return (
    <NavigationContainer>
      {authCredentials?.refreshToken ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
