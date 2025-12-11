import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {Header} from '../../../components/Header/Header';
import {AppTabScreenProps} from '../../../routes/navigationType';
import {Box} from '../../../components/Box/Box';
import {useAuthCredentials} from '../../../services/authCredentials/useAuthCredentials';
import {useAuthSignOut} from '../../../domain/Auth/useCases/useAuthSignOut';

export function SettingsScreen({
  navigation,
}: AppTabScreenProps<'SettingsScreen'>) {
  const {authCredentials} = useAuthCredentials();
  const {signOut} = useAuthSignOut();

  function navigateToUpdateUserScreen() {
    navigation.navigate('UpdateUserScreen', {
      user: authCredentials.user,
    });
  }

  return (
    <Screen flex={1} HeaderComponent={<Header />} noPaddingHorizontal>
      <Box paddingHorizontal="s31" mt="s26">
        <Text preset="headingMedium" bold>
          {authCredentials.user.name}
        </Text>
        <Box borderBottomColor="gray3" borderBottomWidth={1} pb="s20" mt="s36">
          <Text
            semiBold
            preset="headingSmall"
            onPress={navigateToUpdateUserScreen}>
            Alterar meus dados
          </Text>
        </Box>
        <Box mt="s20" borderBottomColor="gray3" borderBottomWidth={1} pb="s20">
          <Text preset="headingSmall" onPress={signOut} semiBold>
            Sair
          </Text>
        </Box>
      </Box>
    </Screen>
  );
}
