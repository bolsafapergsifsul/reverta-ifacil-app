import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {RadioInput} from '../../../components/RadioInput/RadioInput';
import {Box} from '../../../components/Box/Box';
import {Button} from '../../../components/Button/Button';
import {SocialAuthButtons} from '../../../components/SocialAuthButtons/SocialAuthButtons';
import {AuthScreenProps} from '../../../routes/navigationType';

export function SelectTypeUserScreen({
  navigation,
}: AuthScreenProps<'SelectTypeUserScreen'>) {
  const [selectedOption, setSelectedOption] = React.useState<string>('cliente');

  function selectTypeUserValue(value: string) {
    setSelectedOption(value);
  }

  function navigateToSignUpPersonalInfoScreen() {
    if (selectedOption === 'cliente') {
      navigation.navigate('SignUpPersonalInfoScreen');
    }
  }

  function navigateTologinScreen() {
    navigation.navigate('LoginScreen');
  }

  return (
    <Screen canGoBack>
      <Text mt="s26" preset="headingMedium" bold>
        Olá
      </Text>
      <Text preset="headingMedium" bold>
        Vamos começar?
      </Text>
      <Text mt="s10" medium>
        Por favor, selecione o tipo de usuário
      </Text>
      <Box mt="s80" marginLeft="s68" gap="s18">
        <RadioInput
          label="Cliente"
          selected={selectedOption === 'cliente'}
          onPress={() => selectTypeUserValue('cliente')}
        />
        <RadioInput
          label="Fornecedor"
          selected={selectedOption === 'fornecedor'}
          onPress={() => selectTypeUserValue('fornecedor')}
        />
        <RadioInput
          label="Distribuidor"
          selected={selectedOption === 'distribuidor'}
          onPress={() => selectTypeUserValue('distribuidor')}
        />
      </Box>
      <Box alignItems="center" mt="s93">
        <Button title="Avançar" onPress={navigateToSignUpPersonalInfoScreen} />
      </Box>
      <SocialAuthButtons title="Ou cadastra-se com" />
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
