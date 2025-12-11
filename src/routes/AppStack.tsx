import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {NavigatorScreenParams} from '@react-navigation/native';
import {AppTabBottomTabParamList, AppTabNavigator} from './AppTabNavigator';
import {EcoPointScreen} from '../screens/app/EcoPointScreen/EcoPointScreen';

import {SuccessAppScreen} from '../screens/app/SuccessAppScreen/SuccessAppScreen';
import {ScheduleCollectScreen} from '../screens/app/ScheduleCollectScreen/ScheduleCollectScreen';
import {MaterialType} from '../domain/EcoPoint/ecoPointTypes';
import {ColetaInfoScreen} from '../screens/app/ColetaInfoScreen/ColetaInfoScreen';
import {RescheduleCollectScreen} from '../screens/app/RescheduleCollectScreen/RescheduleCollectScreen';
import {UpdateUserScreen} from '../screens/app/UpdateUserScreen/UpdateUserScreen';
import {User} from '../domain/User/userTypes';

export type AppStackParamList = {
  AppTabNavigator: NavigatorScreenParams<AppTabBottomTabParamList>;
  EcoPointScreen: {
    id: number;
  };
  ScheduleCollectScreen: {
    ecoPointId: number;
    materialsCollected: MaterialType[];
  };
  ColetaInfoScreen: {
    collectId: number;
  };
  SuccessAppScreen: undefined;
  RescheduleCollectScreen: {
    collectId: number;
    date: string;
  };
  UpdateUserScreen: {
    user: User;
  };
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}
      initialRouteName="AppTabNavigator">
      <Stack.Screen name="AppTabNavigator" component={AppTabNavigator} />
      <Stack.Screen name="EcoPointScreen" component={EcoPointScreen} />
      <Stack.Screen
        name="ScheduleCollectScreen"
        component={ScheduleCollectScreen}
      />
      <Stack.Screen name="ColetaInfoScreen" component={ColetaInfoScreen} />
      <Stack.Screen name="SuccessAppScreen" component={SuccessAppScreen} />
      <Stack.Screen
        name="RescheduleCollectScreen"
        component={RescheduleCollectScreen}
      />
      <Stack.Screen name="UpdateUserScreen" component={UpdateUserScreen} />
    </Stack.Navigator>
  );
}
