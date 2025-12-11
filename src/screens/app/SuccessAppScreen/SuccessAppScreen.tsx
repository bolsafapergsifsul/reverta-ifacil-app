import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Button} from '../../../components/Button/Button';
import {Box} from '../../../components/Box/Box';
import {Text} from '../../../components/Text/Text';
import {AppScreenProps} from '../../../routes/navigationType';

export function SuccessAppScreen({
  navigation,
}: AppScreenProps<'SuccessAppScreen'>) {
  function goCollectsScreen() {
    navigation.navigate('AppTabNavigator', {
      screen: 'ColetasScreen',
    });
  }

  return (
    <Screen>
      <Box alignItems="center" mt="s238">
        <Text preset="headingMedium" mt="s42" textAlign="center" bold>
          Agendamento realizado com sucesso!
        </Text>

        <Button title="Avançar" mt="s42" onPress={goCollectsScreen} />
      </Box>
    </Screen>
  );
}
