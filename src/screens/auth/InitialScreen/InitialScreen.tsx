import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {Image} from 'react-native';
import {Button} from '../../../components/Button/Button';
import {Box} from '../../../components/Box/Box';
import {Icon} from '../../../components/Icon/Icon';
import {AuthScreenProps} from '../../../routes/navigationType';

export function InitialScreen({navigation}: AuthScreenProps<'InitialScreen'>) {
  function navigateToSelectTypeUserScreen() {
    navigation.navigate('SignUpScreen');
  }

  function navigateToLoginScreen() {
    navigation.navigate('LoginScreen');
  }

  return (
    <Screen>
      <Box mt="s95" alignItems="center">
        <Image
          source={require('../../../assets/images/image-initial-screen.png')}
          style={{width: 280, height: 220}}
          resizeMode="contain"
        />
      </Box>
      <Box alignItems="center" mt="s30">
        <Box flexDirection="row" alignItems="center" gap="s10">
          <Icon name="logo" size={36} />
          <Text preset="headingMedium" bold>
            Reverta IFácil
          </Text>
        </Box>
        <Text preset="paragraphMedium" mt="s30" textAlign="center">
          Agende coletas e descarte seus resíduos corretamente
        </Text>
      </Box>
      <Box mt="s30" gap="s14">
        <Button title="Entrar" onPress={navigateToLoginScreen} />
        <Button
          title="Quero me cadastrar"
          preset="outline"
          onPress={navigateToSelectTypeUserScreen}
        />
      </Box>
    </Screen>
  );
}
