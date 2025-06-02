import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';
import {Box} from '../../../components/Box/Box';
import {Button} from '../../../components/Button/Button';
import {AuthScreenProps} from '../../../routes/navigationType';

export function NewPasswordScreen({
  navigation,
}: AuthScreenProps<'NewPasswordScreen'>) {
  function navigateToSuccessScreen() {
    navigation.navigate('SuccessScreen', {
      title: 'Tudo certo!',
      description: 'Sua senha foi alterada com sucesso!',
      icon: {
        name: 'stickerCheck',
        color: 'primary',
      },
    });
  }

  return (
    <Screen canGoBack>
      <Text preset="headingMedium" mt="s26" bold>
        Pronto!
      </Text>
      <Text preset="headingMedium" bold>
        Crie uma nova senha
      </Text>
      <PasswordInput
        placeholder="Digite uma nova senha"
        boxProps={{mt: 's24'}}
      />
      <PasswordInput
        placeholder="Confirmar nova senha"
        boxProps={{mt: 's24'}}
      />
      <Box mt="s42" alignItems="center">
        <Button title="Confirmar" onPress={navigateToSuccessScreen} />
      </Box>
    </Screen>
  );
}
