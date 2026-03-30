import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Button} from '../../../components/Button/Button';
import {Box} from '../../../components/Box/Box';
import {Text} from '../../../components/Text/Text';
import {AppScreenProps} from '../../../routes/navigationType';
import {Icon} from '../../../components/Icon/Icon';

export function SuccessAppScreen({
  navigation,
}: AppScreenProps<'SuccessAppScreen'>) {
  function goCollectsScreen() {
    navigation.navigate('AppTabNavigator', {
      screen: 'ColetasScreen',
      params: {status: undefined},
    });
  }

  return (
    <Screen>
      <Box flex={1} alignItems="center" justifyContent="center">
        <Icon name="stickerCheck" color="primary" />
        <Text preset="headingMedium" mt="s30" textAlign="center" bold>
          Agendamento realizado com sucesso!
        </Text>
        <Box mt="s42" alignSelf="stretch">
          <Button title="Ver minhas coletas" onPress={goCollectsScreen} />
        </Box>
      </Box>
    </Screen>
  );
}
