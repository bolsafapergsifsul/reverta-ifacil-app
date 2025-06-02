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
    navigation.navigate('SelectTypeUserScreen');
  }

  function navigateToLoginScreen() {
    navigation.navigate('LoginScreen');
  }

  return (
    <Screen>
      <Box mt="s95">
        <Image
          source={require('../../../assets/images/image-initial-screen.png')}
          style={{width: 'auto'}}
        />
      </Box>
      <Box alignItems="center" mt="s95">
        <Icon name="logo" size={86} />
        <Text preset="headingLarge" mt="s30" bold>
          Reverta IFácil
        </Text>
        <Button title="Entrar" mt="s78" onPress={navigateToLoginScreen} />
        <Button
          title="Quero me cadastrar"
          mt="s26"
          preset="outline"
          onPress={navigateToSelectTypeUserScreen}
        />
      </Box>
    </Screen>
  );
}
