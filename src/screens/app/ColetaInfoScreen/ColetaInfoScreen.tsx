import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {AppScreenProps} from '../../../routes/navigationType';
import {useGetCollecyById} from '../../../domain/Collect/useCases/useGetCollecyById';
import {ActivityIndicator} from '../../../components/ActivityIndicator/ActivityIndicator';
import {Box} from '../../../components/Box/Box';
import {useAuthCredentials} from '../../../services/authCredentials/useAuthCredentials';
import {Button} from '../../../components/Button/Button';
import {Alert} from 'react-native';
import {useCancelCollect} from '../../../domain/Collect/useCases/useCancelCollect';

export function ColetaInfoScreen({
  route,
  navigation,
}: AppScreenProps<'ColetaInfoScreen'>) {
  const {collectId} = route.params;

  const {collect, isLoading, isFetched} = useGetCollecyById(collectId);
  const {isLoading: isCancelLoading, cancelCollect} = useCancelCollect({
    onSuccess: () =>
      navigation.navigate('AppTabNavigator', {
        screen: 'ColetasScreen',
        params: {isRefreshing: true},
      }),
  });
  const {authCredentials} = useAuthCredentials();
  let date = null;
  if (collect) {
    date = new Date(collect.scheduledAt);
  }
  let isCollectInProgress = null;
  if (collect?.status === 'IN_PROGRESS' || collect?.status === 'PENDING') {
    isCollectInProgress = true;
  } else {
    isCollectInProgress = false;
  }

  function cancelCollectFunction() {
    Alert.alert(
      'Cancelar coleta',
      'Tem certeza que deseja cancelar esta coleta?',
      [
        {text: 'Não', style: 'cancel'},
        {text: 'Sim', onPress: () => cancelCollect(collectId, 'CANCELED')},
      ],
    );
  }

  function handleRescheduleScreen() {
    if (collect) {
      navigation.navigate('RescheduleCollectScreen', {
        collectId,
        date: collect.scheduledAt,
      });
    }
  }

  return (
    <Screen canGoBack>
      {isLoading || !isFetched ? (
        <ActivityIndicator />
      ) : (
        <Box mt="s26">
          <Text preset="headingSmall" bold>
            {' '}
            {collect?.status === 'PENDING' || collect?.status === 'IN_PROGRESS'
              ? 'Dados da sua coleta em andamento'
              : 'Dados da sua coleta'}
          </Text>
          <Box
            mt="s20"
            backgroundColor="white"
            borderRadius="s13"
            padding="s16">
            <Text
              medium>{`${authCredentials.user.street}, ${authCredentials.user.numberAddress} - ${authCredentials.user.neighborhood}, ${authCredentials.user.city} - ${authCredentials.user.state}`}</Text>
            <Text mt="s10" preset="paragraphMedium" medium color="greenPrimary">
              {date?.toLocaleDateString('pt-BR') +
                ' - ' +
                collect?.materials
                  .map(material => material.material.name)
                  .join(', ')}
            </Text>
          </Box>
          <Box
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            gap="s10"
            mt="s60">
            {isCollectInProgress === true && (
              <Box flexDirection="row" gap="s10">
                <Button
                  title="Reagendar coleta"
                  flex={1}
                  disabled={isCancelLoading}
                  onPress={handleRescheduleScreen}
                />
                <Button
                  title="Cancelar coleta"
                  backgroundColor="red"
                  flex={1}
                  loading={isCancelLoading}
                  onPress={cancelCollectFunction}
                />
              </Box>
            )}
          </Box>
        </Box>
      )}
    </Screen>
  );
}
