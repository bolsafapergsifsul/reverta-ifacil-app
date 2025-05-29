import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';
import {Button} from '../../../components/Button/Button';
import {Box} from '../../../components/Box/Box';
import {SocialAuthButtons} from '../../../components/SocialAuthButtons/SocialAuthButtons';
import {AuthScreenProps} from '../../../routes/navigationType';

export function LoginScreen({navigation}: AuthScreenProps<'LoginScreen'>) {
  function navigateToSelectTypeUserScreen() {
    navigation.navigate('SelectTypeUserScreen');
  }

  return (
    <Screen canGoBack>
      <Text preset="paragraphMedium" mt="s26" bold>
        Bem-vindo de volta!
      </Text>
      <Text preset="paragraphMedium" bold>
        Faça seu login
      </Text>
      <TextInput placeholder="Digite seu email" boxProps={{mt: 's46'}} />
      <PasswordInput placeholder="Digite sua senha" boxProps={{mt: 's24'}} />
      <Text preset="paragraphSmall" textAlign="right" mt="s14" semiBold>
        Esqueceu a senha?
      </Text>
      <Box alignItems="center" mt="s42">
        <Button title="Entrar" />
      </Box>
      <SocialAuthButtons title="Ou entre com" />
      <Text mt="s123" textAlign="center" medium>
        Ainda não tem uma conta?
      </Text>
      <Text
        mt="s2"
        textAlign="center"
        color="primary"
        bold
        onPress={navigateToSelectTypeUserScreen}>
        Faça seu cadastro
      </Text>
    </Screen>
  );
}
