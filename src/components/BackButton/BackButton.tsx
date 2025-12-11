import React from 'react';
import {TouchableOpacityBox, TouchableOpacityBoxProps} from '../Box/Box';
import {Icon} from '../Icon/Icon';
import {useNavigation} from '@react-navigation/native';

interface BackButtonProps extends TouchableOpacityBoxProps {}

export function BackButton(props: BackButtonProps) {
  const navigation = useNavigation();
  return (
    <TouchableOpacityBox onPress={navigation.goBack} mt="s31" {...props}>
      <Icon name="arrowLeft" color="primary" />
    </TouchableOpacityBox>
  );
}
