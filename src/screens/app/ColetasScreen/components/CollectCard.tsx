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
      ? 'gray1'
      : data.status === 'IN_PROGRESS'
      ? 'greenPrimaryLight'
      : data.status === 'COMPLETED'
      ? 'greenPrimary'
      : 'red';

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
      <Box backgroundColor="white" padding="s16" borderRadius="s13" mb="s20">
        <Text preset="paragraphLarge" color="greenPrimary" bold>
          Coleta no {data.ecoPoint.name}
        </Text>
        <Text>
          <Text semiBold>Data:</Text> {date.toLocaleDateString('pt-BR')}
        </Text>

        <Text>
          <Text semiBold>Materiais a serem coletados:</Text>{' '}
          {data.materials.map(material => material.material.name).join(', ')}
        </Text>
        <Box flexDirection="row" alignItems="center" gap="s4">
          {/* <Text semiBold>Status:</Text> */}
          <Box backgroundColor={statusColor} padding="s4">
            <Text color="white" bold>
              {statusText}
            </Text>
          </Box>
        </Box>
      </Box>
    </PressableBox>
  );
}
