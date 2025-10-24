import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {Button} from '../../../components/Button/Button';
import {Header} from '../../../components/Header/Header';
import {Box} from '../../../components/Box/Box';
import {useAuthCredentials} from '../../../services/authCredentials/useAuthCredentials';
import {CardHome} from './components/CardHome/CardHome';

export function HomeScreen() {
  const {authCredentials} = useAuthCredentials();

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
            Acesse o seu histórico de coletas
          </Text>
          <Button title="Acessar" mt="s42" width={110} />
        </Box>
        <Box mt="s30" flexDirection="row" gap="s60">
          <CardHome title="Veja pontos de coleta" iconName="mapa" />
          <CardHome title="Coletas em andamento" iconName="busca" />
        </Box>
        <Box mt="s36" flexDirection="row" gap="s60">
          <CardHome title="Histórico de coletas" iconName="coleta" />
          <CardHome title="Coletas agendadas" iconName="calendar" />
        </Box>
        <Text mt="s30" preset="headingSmall" bold>
          Registrar uma coleta de materiais
        </Text>
        <Button title="Registar" preset="outline" mt="s20" />
      </Box>
    </Screen>
  );
}
