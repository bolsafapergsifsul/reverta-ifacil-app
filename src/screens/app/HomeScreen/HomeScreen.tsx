import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {Button} from '../../../components/Button/Button';
import {Header} from '../../../components/Header/Header';
import {Box} from '../../../components/Box/Box';
import {useAuthCredentials} from '../../../services/authCredentials/useAuthCredentials';
import {CardHome} from './components/CardHome/CardHome';
import {AppTabScreenProps} from '../../../routes/navigationType';

export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>) {
  const {authCredentials} = useAuthCredentials();
  function navigateToMapScreen() {
    navigation.navigate('MapaScreen');
  }

  function navigateToHistoryCollectsScreen() {
    navigation.navigate('ColetasScreen', {status: undefined});
  }
  function navigateToScheduleCollectScreen() {
    navigation.navigate('ColetasScreen', {status: 'IN_PROGRESS'});
  }

  return (
    <Screen HeaderComponent={<Header />} noPaddingHorizontal scrolllable>
      <Box paddingHorizontal="s31">
        <Text preset="headingMedium" bold mt="s26">
          Olá, {authCredentials?.user.name}
        </Text>
        <Box
          mt="s18"
          backgroundColor="white"
          paddingHorizontal="s16"
          paddingTop="s19"
          paddingBottom="s29"
          borderRadius="s10">
          <Text preset="paragraphLarge" color="gray1">
            Conheça os pontos de coleta mais próximos e agende uma coleta de
            materiais!
          </Text>
          <Button
            title="Acessar"
            mt="s20"
            width={110}
            onPress={navigateToMapScreen}
          />
        </Box>
        <Box mt="s30" flexDirection="row" gap="s60">
          <CardHome
            title="Coletas agendadas"
            iconName="calendar"
            onPress={navigateToScheduleCollectScreen}
          />
          <CardHome
            title="Histórico de coletas"
            iconName="coleta"
            onPress={navigateToHistoryCollectsScreen}
          />
        </Box>
        {/* <Text mt="s30" preset="headingSmall" bold>
          Registrar uma coleta de materiais
        </Text>
        <Button title="Registar" preset="outline" mt="s20" /> */}
      </Box>
    </Screen>
  );
}
