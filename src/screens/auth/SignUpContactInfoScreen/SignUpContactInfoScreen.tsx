import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Box} from '../../../components/Box/Box';
import {Button} from '../../../components/Button/Button';

export function SignUpContactInfoScreen() {
  return (
    <Screen>
      <Text preset="headingMedium" mt="s26" bold>
        Olá!
      </Text>
      <Text preset="headingMedium" bold>
        Vamos começar?
      </Text>
      <TextInput placeholder="CPF/CNPJ" boxProps={{mt: 's24'}} />
      <TextInput placeholder="Telefone" boxProps={{mt: 's24'}} />
      <TextInput placeholder="CEP" boxProps={{mt: 's24'}} />
      <Box mt="s24" flexDirection="row" gap="s20">
        <TextInput placeholder="Número" />
        <TextInput placeholder="Complemento" />
      </Box>
      {
        //TODO: implementar campo para selecionar se aceita receber notificações
      }
      <Box mt="s42" alignItems="center">
        <Button title="Cadastrar" />
      </Box>
    </Screen>
  );
}
