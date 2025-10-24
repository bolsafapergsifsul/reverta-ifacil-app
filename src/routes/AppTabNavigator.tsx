import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React from 'react';
import {AppTabBar} from './AppTabBar';
import {HomeScreen} from '../screens/app/HomeScreen/HomeScreen';
import {MapaScreen} from '../screens/app/MapaScreen/MapaScreen';
import {SearchScreen} from '../screens/app/SearchScreen/SearchScreen';
import {ColetasScreen} from '../screens/app/ColetasScreen/ColetasScreen';
import {AgendaScreen} from '../screens/app/AgendaScreen/AgrendaScreen';

export type AppTabBottomTabParamList = {
  HomeScreen: undefined;
  MapaScreen: undefined;
  SearchScreen: undefined;
  ColetasScreen: undefined;
  AgendaScreen: undefined;
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
      <Tab.Screen name="SearchScreen" component={SearchScreen} />
      <Tab.Screen name="ColetasScreen" component={ColetasScreen} />
      <Tab.Screen name="AgendaScreen" component={AgendaScreen} />
    </Tab.Navigator>
  );
}
