import React from 'react';
import {Box, PressableBox} from '../../../../components/Box/Box';
import {Text} from '../../../../components/Text/Text';
import {CollectData} from '../../../../domain/Collect/collectTypes';
import {ThemeColors} from '../../../../theme/theme';
import {useNavigation} from '@react-navigation/native';

export function CollectCard(data: CollectData) {
  const navigation = useNavigation();
  const date = new Date(data.scheduledAt);

  const statusColor: ThemeColors =
    data.status === 'PENDING'
      ? 'gray100'
      : data.status === 'IN_PROGRESS'
      ? 'greenPrimaryLight'
      : data.status === 'COMPLETED'
      ? 'greenPrimary'
      : 'error';

  const statusTextColor: ThemeColors =
    data.status === 'PENDING'
      ? 'textSecondary'
      : data.status === 'IN_PROGRESS'
      ? 'primary'
      : data.status === 'COMPLETED'
      ? 'white'
      : 'white';

  const statusText =
    data.status === 'PENDING'
      ? 'Pendente'
      : data.status === 'IN_PROGRESS'
      ? 'Em Progresso'
      : data.status === 'COMPLETED'
      ? 'Concluído'
      : 'Cancelado';

  function navigateToColetaInfoScreen() {
    navigation.navigate('ColetaInfoScreen', {
      collectId: data.id,
    });
  }

  return (
    <PressableBox onPress={navigateToColetaInfoScreen}>
      <Box backgroundColor="white" padding="s16" borderRadius="s10" mb="s16" borderWidth={1} borderColor="gray100">
        <Text preset="paragraphMedium" color="primary" bold>
          Coleta no {data.ecoPoint.name}
        </Text>
        <Text mt="s8" preset="paragraphSmall">
          <Text preset="paragraphSmall" semiBold>
            Data:{' '}
          </Text>
          {date.toLocaleDateString('pt-BR')}
        </Text>
        <Text mt="s4" preset="paragraphSmall">
          <Text preset="paragraphSmall" semiBold>
            Materiais:{' '}
          </Text>
          {data.materials.map(material => material.material.name).join(', ')}
        </Text>
        <Box mt="s8" alignSelf="flex-start">
          <Box
            backgroundColor={statusColor}
            paddingHorizontal="s10"
            paddingVertical="s4"
            borderRadius="s60">
            <Text preset="paragraphCaption" color={statusTextColor} bold>
              {statusText}
            </Text>
          </Box>
        </Box>
      </Box>
    </PressableBox>
  );
}
