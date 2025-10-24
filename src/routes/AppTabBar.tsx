import React from 'react';

import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

import {mapScreenToProps} from './mapScreenToProps';
import {useAppSafeArea} from '../hooks/useAppSafeArea';
import {
  Box,
  BoxProps,
  TouchableOpacityBox,
  TouchableOpacityBoxProps,
} from '../components/Box/Box';
import {$shadowProps} from '../theme/theme';
import {AppTabBottomTabParamList} from './AppTabNavigator';
import {Icon} from '../components/Icon/Icon';
import {Text, TextProps} from '../components/Text/Text';

export function AppTabBar({state, descriptors, navigation}: BottomTabBarProps) {
  const {bottom} = useAppSafeArea();
  return (
    <Box {...$boxWrapper} style={[{paddingBottom: bottom}, $shadowProps]}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const tabItem =
          mapScreenToProps[route.name as keyof AppTabBottomTabParamList];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({
              name: route.name,
              params: route.params,
              merge: true,
            });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacityBox
            key={route.name}
            {...$itemWrapper}
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1}}>
            <Icon
              fillColor={isFocused ? 'primary' : 'gray3'}
              name={isFocused ? tabItem.icon.focused : tabItem.icon.unfocused}
            />
            <Text {...$label} color={isFocused ? 'primary' : 'gray3'}>
              {tabItem.label}
            </Text>
          </TouchableOpacityBox>
        );
      })}
    </Box>
  );
}

const $label: TextProps = {
  semiBold: true,
  marginTop: 's4',
  preset: 'paragraphCaption',
};

const $itemWrapper: TouchableOpacityBoxProps = {
  activeOpacity: 1,
  alignItems: 'center',
  accessibilityRole: 'button',
};

const $boxWrapper: BoxProps = {
  paddingTop: 's12',
  backgroundColor: 'white',
  flexDirection: 'row',
};
