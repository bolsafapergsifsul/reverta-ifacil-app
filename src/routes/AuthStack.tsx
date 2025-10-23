import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {InitialScreen} from '../screens/auth/InitialScreen/InitialScreen';
import {LoginScreen} from '../screens/auth/LoginScreen/LoginScreen';
import {SuccessScreen} from '../screens/auth/SuccessScreen/SuccessScreen';
import {ForgotPasswordScreen} from '../screens/auth/ForgotPasswordScreen/ForgotPasswordScreen';
import {CodeVerificationScreen} from '../screens/auth/CodeVerificationScreen/CodeVerificationScreen';
import {NewPasswordScreen} from '../screens/auth/NewPasswordScreen/NewPasswordScreen';
import {IconProps} from '../components/Icon/Icon';
import {SignUpScreen} from '../screens/auth/SignUpScreen/SignUpScreen';

export type AuthStackParamList = {
  InitialScreen: undefined;
  LoginScreen: undefined;
  SignUpScreen: undefined;
  ForgotPasswordScreen: undefined;
  CodeVerificationScreen: {
    email: string;
  };
  NewPasswordScreen: {
    email: string;
  };
  SuccessScreen: {
    title: string;
    description: string;
    icon: Pick<IconProps, 'name' | 'color'>;
  };
};

export type AuthStackNames = keyof AuthStackParamList;

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
