import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {InitialScreen} from '../screens/auth/InitialScreen/InitialScreen';
import {LoginScreen} from '../screens/auth/LoginScreen/LoginScreen';
import {SelectTypeUserScreen} from '../screens/auth/SelectTypeUserScreen/SelectTypeUserScreen';
import {SignUpScreen} from '../screens/auth/SignUpScreen/SignUpScreen';
import {SuccessScreen} from '../screens/auth/SuccessScreen/SuccessScreen';
import {ForgotPasswordScreen} from '../screens/auth/ForgotPasswordScreen/ForgotPasswordScreen';
import {CodeVerificationScreen} from '../screens/auth/CodeVerificationScreen/CodeVerificationScreen';
import {NewPasswordScreen} from '../screens/auth/NewPasswordScreen/NewPasswordScreen';

export type AuthStackParamList = {
  InitialScreen: undefined;
  LoginScreen: undefined;
  SelectTypeUserScreen: undefined;
  SignUpScreen: undefined;
  SuccessScreen: undefined;
  ForgotPasswordScreen: undefined;
  CodeVerificationScreen: undefined;
  NewPasswordScreen: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

export function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}
      initialRouteName="InitialScreen">
      <Stack.Screen name="InitialScreen" component={InitialScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen
        name="SelectTypeUserScreen"
        component={SelectTypeUserScreen}
      />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
      />
      <Stack.Screen
        name="CodeVerificationScreen"
        component={CodeVerificationScreen}
      />
      <Stack.Screen name="NewPasswordScreen" component={NewPasswordScreen} />
    </Stack.Navigator>
  );
}
