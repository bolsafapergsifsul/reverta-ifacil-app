import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';
import {Box} from '../../../components/Box/Box';
import {Button} from '../../../components/Button/Button';
import {SocialAuthButtons} from '../../../components/SocialAuthButtons/SocialAuthButtons';
import {AuthScreenProps} from '../../../routes/navigationType';

export function SignUpPersonalInfoScreen({
  navigation,
}: AuthScreenProps<'SignUpPersonalInfoScreen'>) {
  function navigateTologinScreen() {
    navigation.navigate('LoginScreen');
  }

  function navigateToSignUpContactInfoScreen() {
    navigation.navigate('SignUpContactInfoScreen');
  }

  return (
    <Screen canGoBack>
      <Text preset="headingMedium" mt="s26" bold>
        Olá!
      </Text>
      <Text preset="headingMedium" bold>
        Vamos começar?
      </Text>
      <TextInput placeholder="Nome" boxProps={{mt: 's24'}} />
      <TextInput placeholder="Email" boxProps={{mt: 's24'}} />
      <PasswordInput placeholder="Senha" boxProps={{mt: 's24'}} />
      <PasswordInput placeholder="Confirme a senha" boxProps={{mt: 's24'}} />
      <Box alignItems="center" mt="s42">
        <Button title="Avançar" onPress={navigateToSignUpContactInfoScreen} />
      </Box>
      <SocialAuthButtons title="Ou Cadastra-se com" />
      <Text preset="paragraphSmall" textAlign="center" mt="s34" medium>
        Já tem uma conta?
      </Text>
      <Text
        onPress={navigateTologinScreen}
        color="primary"
        textAlign="center"
        bold>
        Faça seu login
      </Text>
    </Screen>
  );
}
