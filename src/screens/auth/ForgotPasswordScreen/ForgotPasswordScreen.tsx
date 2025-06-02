import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Box} from '../../../components/Box/Box';
import {Button} from '../../../components/Button/Button';
import {AuthScreenProps} from '../../../routes/navigationType';

export function ForgotPasswordScreen({
  navigation,
}: AuthScreenProps<'ForgotPasswordScreen'>) {
  function navigateToCodeVerificationScreen() {
    navigation.navigate('CodeVerificationScreen');
  }

  return (
    <Screen canGoBack>
      <Text preset="headingMedium" mt="s26" bold>
        Esqueceu sua senha?
      </Text>
      <Text mt="s10" medium>
        Por favor, insira o email vinculado a sua conta
      </Text>
      <TextInput placeholder="Digite seu email" boxProps={{mt: 's24'}} />
      <Box mt="s42" alignItems="center">
        <Button
          title="Enviar código"
          onPress={navigateToCodeVerificationScreen}
        />
      </Box>
      <Text mt="s371" textAlign="center" medium>
        Lembrou da senha?
      </Text>
      <Text textAlign="center" color="primary" bold>
        Faça seu login
      </Text>
    </Screen>
  );
}
