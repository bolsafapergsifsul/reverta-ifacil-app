import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {AuthScreenProps} from '../../../routes/navigationType';
import {Icon} from '../../../components/Icon/Icon';
import {Button} from '../../../components/Button/Button';
import {Box} from '../../../components/Box/Box';

export function SuccessScreen({
  route,
  navigation,
}: AuthScreenProps<'SuccessScreen'>) {
  function goBackToBegin() {
    navigation.goBack();
  }
  return (
    <Screen flex={1}>
      <Box flex={1} alignItems="center" justifyContent="center">
        <Icon {...route.params.icon} />
        <Text preset="headingMedium" mt="s42" bold textAlign="center">
          {route.params.title}
        </Text>
        <Text mt="s10" medium textAlign="center">
          {route.params.description}
        </Text>
        <Box mt="s42" alignSelf="stretch">
          <Button title="Fazer login" onPress={goBackToBegin} />
        </Box>
      </Box>
    </Screen>
  );
}
