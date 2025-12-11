import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React from 'react';
import {AppTabBar} from './AppTabBar';
import {HomeScreen} from '../screens/app/HomeScreen/HomeScreen';
import {MapaScreen} from '../screens/app/MapaScreen/MapaScreen';
import {ColetasScreen} from '../screens/app/ColetasScreen/ColetasScreen';
import {CollectStatusType} from '../domain/Collect/collectTypes';
import {SettingsScreen} from '../screens/app/SettingsScreen/SettingsScreen';

export type AppTabBottomTabParamList = {
  HomeScreen: undefined;
  MapaScreen: undefined;
  ColetasScreen: {
    status?: CollectStatusType;
    isRefreshing?: boolean;
  };
  SettingsScreen: undefined;
};

const Tab = createBottomTabNavigator<AppTabBottomTabParamList>();

export function AppTabNavigator() {
  function renderTabBar(props: BottomTabBarProps) {
    return <AppTabBar {...props} />;
  }

  return (
    <Tab.Navigator
      tabBar={renderTabBar}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          paddingTop: 20,
        },
      }}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="MapaScreen" component={MapaScreen} />
      <Tab.Screen name="ColetasScreen" component={ColetasScreen} />
      <Tab.Screen name="SettingsScreen" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
