import React from 'react';
import {TouchableOpacityBox} from '../Box/Box';
import {Icon} from '../Icon/Icon';
import {useNavigation} from '@react-navigation/native';

export function BackButton() {
  const navigation = useNavigation();
  return (
    <TouchableOpacityBox onPress={navigation.goBack} mt="s31">
      <Icon name="arrowLeft" color="primary" />
    </TouchableOpacityBox>
  );
}
