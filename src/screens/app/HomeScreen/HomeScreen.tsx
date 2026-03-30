import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {Button} from '../../../components/Button/Button';
import {Header} from '../../../components/Header/Header';
import {Box} from '../../../components/Box/Box';
import {useAuthCredentials} from '../../../services/authCredentials/useAuthCredentials';
import {CardHome} from './components/CardHome/CardHome';
import {AppTabScreenProps} from '../../../routes/navigationType';
import {Icon} from '../../../components/Icon/Icon';
import {TouchableOpacityBox} from '../../../components/Box/Box';

export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>) {
  const {authCredentials} = useAuthCredentials();

  function navigateToMapScreen() {
    navigation.navigate('MapaScreen');
  }

  function navigateToHistoryCollectsScreen() {
    navigation.navigate('ColetasScreen', {status: undefined});
  }

  function navigateToScheduleCollectScreen() {
    navigation.navigate('ColetasScreen', {status: 'PENDING'});
  }

  function navigateToInProgressCollectsScreen() {
    navigation.navigate('ColetasScreen', {status: 'IN_PROGRESS'});
  }

  return (
    <Screen
      HeaderComponent={<Header />}
      noPaddingHorizontal
      scrolllable
      backgroundColor="background">
      <Box paddingHorizontal="s31">
        <Text preset="headingMedium" bold mt="s26">
          Olá, {authCredentials?.user.name}
        </Text>

        {/* Banner card */}
        <Box
          mt="s18"
          backgroundColor="primary"
          paddingHorizontal="s16"
          paddingTop="s19"
          paddingBottom="s29"
          borderRadius="s10"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between">
          <Box flex={1} mr="s16">
            <Text preset="paragraphLarge" color="white" bold>
              Acesse seu histórico
            </Text>
            <Text preset="paragraphSmall" color="white" mt="s4">
              Veja suas coletas anteriores
            </Text>
          </Box>
          <Button
            title="Acessar"
            backgroundColor="white"
            textColor="primary"
            onPress={navigateToHistoryCollectsScreen}
          />
        </Box>

        {/* Acesso rápido */}
        <Text preset="paragraphLarge" bold mt="s30" mb="s16">
          Acesso rápido
        </Text>
        <Box flexDirection="row" gap="s16" mb="s16">
          <CardHome
            title="Pontos de coleta"
            iconName="mapa"
            onPress={navigateToMapScreen}
          />
          <CardHome
            title="Coletas em andamento"
            iconName="coleta"
            onPress={navigateToInProgressCollectsScreen}
          />
        </Box>
        <Box flexDirection="row" gap="s16">
          <CardHome
            title="Histórico de coletas"
            iconName="coleta"
            onPress={navigateToHistoryCollectsScreen}
          />
          <CardHome
            title="Coletas agendadas"
            iconName="calendar"
            onPress={navigateToScheduleCollectScreen}
          />
        </Box>

        {/* Registrar coleta */}
        <Text preset="paragraphLarge" bold mt="s30" mb="s16">
          Registrar uma coleta
        </Text>
        <TouchableOpacityBox
          backgroundColor="white"
          borderRadius="s10"
          paddingHorizontal="s16"
          paddingVertical="s16"
          flexDirection="row"
          alignItems="center"
          onPress={navigateToMapScreen}>
          <Box
            width={40}
            height={40}
            borderRadius="s8"
            backgroundColor="backgroundSmooth"
            alignItems="center"
            justifyContent="center"
            mr="s16">
            <Icon name="busca" />
          </Box>
          <Box flex={1}>
            <Text preset="paragraphMedium" bold>
              Registrar coleta
            </Text>
            <Text preset="paragraphSmall" color="textSecondary">
              Agende a coleta de resíduos
            </Text>
          </Box>
          <Text color="textSecondary">{'>'}</Text>
        </TouchableOpacityBox>
      </Box>
    </Screen>
  );
}
