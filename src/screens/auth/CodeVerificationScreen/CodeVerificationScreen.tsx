import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {Box} from '../../../components/Box/Box';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {AuthScreenProps} from '../../../routes/navigationType';

export function CodeVerificationScreen({
  navigation,
}: AuthScreenProps<'CodeVerificationScreen'>) {
  function navigateToNewPasswordScreen() {
    navigation.navigate('NewPasswordScreen');
  }

  return (
    <Screen canGoBack>
      <Text preset="headingMedium" mt="s26" bold>
        Verificação
      </Text>
      <Text mt="s10" medium>
        Insira abaixo o código de 4 dígitos que enviamos para o seu email
      </Text>
      <Box mt="s24" gap="s16" flexDirection="row">
        <TextInput textAlign="center" />
        <TextInput textAlign="center" />
        <TextInput textAlign="center" />
        <TextInput textAlign="center" />
      </Box>
      <Box mt="s42" gap="s24" alignItems="center">
        <Button title="Verificar" onPress={navigateToNewPasswordScreen} />
        <Button title="Reenviar Código" />
      </Box>
      <Text mt="s300" textAlign="center" medium>
        Não recebey o código?
      </Text>
      <Text textAlign="center" color="primary" bold>
        Reenviar
      </Text>
    </Screen>
  );
}
