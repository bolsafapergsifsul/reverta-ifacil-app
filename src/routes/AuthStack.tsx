import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {InitialScreen} from '../screens/auth/InitialScreen/InitialScreen';
import {LoginScreen} from '../screens/auth/LoginScreen/LoginScreen';
import {SelectTypeUserScreen} from '../screens/auth/SelectTypeUserScreen/SelectTypeUserScreen';
import {SignUpPersonalInfoScreen} from '../screens/auth/SignUpPersonalInfoScreen/SignUpPersonalInfoScreen';
import {SuccessScreen} from '../screens/auth/SuccessScreen/SuccessScreen';
import {ForgotPasswordScreen} from '../screens/auth/ForgotPasswordScreen/ForgotPasswordScreen';
import {CodeVerificationScreen} from '../screens/auth/CodeVerificationScreen/CodeVerificationScreen';
import {NewPasswordScreen} from '../screens/auth/NewPasswordScreen/NewPasswordScreen';
import {SignUpContactInfoScreen} from '../screens/auth/SignUpContactInfoScreen/SignUpContactInfoScreen';
import {IconProps} from '../components/Icon/Icon';

export type AuthStackParamList = {
  InitialScreen: undefined;
  LoginScreen: undefined;
  SelectTypeUserScreen: undefined;
  SignUpPersonalInfoScreen: undefined;
  SignUpContactInfoScreen: undefined;
  ForgotPasswordScreen: undefined;
  CodeVerificationScreen: undefined;
  NewPasswordScreen: undefined;
  SuccessScreen: {
    title: string;
    description: string;
    icon: Pick<IconProps, 'name' | 'color'>;
  };
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
      <Stack.Screen
        name="SignUpPersonalInfoScreen"
        component={SignUpPersonalInfoScreen}
      />
      <Stack.Screen
        name="SignUpContactInfoScreen"
        component={SignUpContactInfoScreen}
      />
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
