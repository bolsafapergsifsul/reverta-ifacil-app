import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {Header} from '../../../components/Header/Header';
import {AppTabScreenProps} from '../../../routes/navigationType';
import {Box, TouchableOpacityBox} from '../../../components/Box/Box';
import {useAuthCredentials} from '../../../services/authCredentials/useAuthCredentials';
import {useAuthSignOut} from '../../../domain/Auth/useCases/useAuthSignOut';
import {Icon} from '../../../components/Icon/Icon';

interface MenuRowProps {
  iconName: string;
  label: string;
  onPress?: () => void;
  labelColor?: string;
}

function MenuRow({iconName, label, onPress, labelColor}: MenuRowProps) {
  return (
    <TouchableOpacityBox
      flexDirection="row"
      alignItems="center"
      gap="s16"
      paddingVertical="s16"
      borderBottomWidth={1}
      borderBottomColor="gray100"
      onPress={onPress}>
      <Icon name={iconName as any} />
      <Text
        preset="paragraphMedium"
        semiBold
        flex={1}
        color={(labelColor as any) || 'textPrimary'}>
        {label}
      </Text>
    </TouchableOpacityBox>
  );
}

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
        <Text preset="headingMedium" bold mb="s24">
          {authCredentials.user.name}
        </Text>
        <MenuRow
          iconName="profile"
          label="Meus dados"
          onPress={navigateToUpdateUserScreen}
        />
        <TouchableOpacityBox
          flexDirection="row"
          alignItems="center"
          gap="s16"
          paddingVertical="s16"
          onPress={signOut}>
          <Icon name="profile" />
          <Text preset="paragraphMedium" semiBold color="error">
            Sair
          </Text>
        </TouchableOpacityBox>
      </Box>
    </Screen>
  );
}
