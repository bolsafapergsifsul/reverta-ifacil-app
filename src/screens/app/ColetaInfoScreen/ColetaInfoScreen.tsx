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
  const isCollectInProgress =
    collect?.status === 'IN_PROGRESS' || collect?.status === 'PENDING';

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
            {collect?.status === 'PENDING' || collect?.status === 'IN_PROGRESS'
              ? 'Dados da sua coleta em andamento'
              : 'Dados da sua coleta'}
          </Text>
          <Box
            mt="s20"
            backgroundColor="white"
            borderRadius="s10"
            padding="s16">
            <Text medium>
              {`${authCredentials.user.street}, ${authCredentials.user.numberAddress} - ${authCredentials.user.neighborhood}, ${authCredentials.user.city} - ${authCredentials.user.state}`}
            </Text>
            <Text mt="s10" preset="paragraphMedium" medium color="primary">
              {date?.toLocaleDateString('pt-BR') +
                ' - ' +
                collect?.materials
                  .map(material => material.material.name)
                  .join(', ')}
            </Text>
          </Box>
          {isCollectInProgress && (
            <Box flexDirection="row" gap="s16" mt="s60">
              <Button
                title="Reagendar"
                flex={1}
                preset="outline"
                disabled={isCancelLoading}
                onPress={handleRescheduleScreen}
              />
              <Button
                title="Cancelar"
                flex={1}
                backgroundColor="error"
                loading={isCancelLoading}
                onPress={cancelCollectFunction}
              />
            </Box>
          )}
        </Box>
      )}
    </Screen>
  );
}
