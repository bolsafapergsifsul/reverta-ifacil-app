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
    <Screen>
      <Box alignItems="center" mt="s238">
        <Icon {...route.params.icon} />
        <Text preset="headingMedium" mt="s42" bold>
          {route.params.title}
        </Text>
        <Text mt="s10" medium>
          {route.params.description}
        </Text>
        <Button title="Fazer login" mt="s42" onPress={goBackToBegin} />
      </Box>
    </Screen>
  );
}
