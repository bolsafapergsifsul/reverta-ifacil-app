import React, {useCallback} from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {AppTabScreenProps} from '../../../routes/navigationType';
import {useGetAllCollectsByUser} from '../../../domain/Collect/useCases/useGetAllCollectsByUser';
import {useAuthCredentials} from '../../../services/authCredentials/useAuthCredentials';
import {FlatList, ListRenderItemInfo, RefreshControl} from 'react-native';
import {CollectCard} from './components/CollectCard';
import {CollectData} from '../../../domain/Collect/collectTypes';
import {Header} from '../../../components/Header/Header';
import {Box} from '../../../components/Box/Box';
import {ActivityIndicator} from '../../../components/ActivityIndicator/ActivityIndicator';
import {Button} from '../../../components/Button/Button';
import {useFocusEffect} from '@react-navigation/native';

export function ColetasScreen({
  navigation,
  route,
}: AppTabScreenProps<'ColetasScreen'>) {
  const filter = route.params?.status;
  const isRefreshing = route.params?.isRefreshing || false;
  const {authCredentials} = useAuthCredentials();
  const {collects, isLoading, isError, refetch, isFetching} =
    useGetAllCollectsByUser(
      authCredentials.user.id,
      filter ? filter : undefined,
    );

  function renderItem({item}: ListRenderItemInfo<CollectData>) {
    return <CollectCard {...item} />;
  }

  useFocusEffect(
    useCallback(() => {
      if (isRefreshing) {
        refetch();
      }
    }, [isRefreshing, refetch]),
  );

  return (
    <Screen flex={1} HeaderComponent={<Header />} noPaddingHorizontal>
      <Box paddingHorizontal="s31" flex={1}>
        <Text preset="headingSmall" bold mt="s20" mb="s20">
          Histórico de coletas
        </Text>
        {isError && (
          <Box>
            <Box>
              <Text preset="headingMedium" semiBold textAlign="center">
                Erro ao carregar coletas.
              </Text>
              <Button title="Recarregar" onPress={() => refetch()} />
            </Box>
          </Box>
        )}
        {collects?.length === 0 && (
          <Box>
            <Text preset="paragraphLarge">
              Você não possui coletas, clique no botão abaixo para procurar o
              ecoponto mais próximo e agendar uma coleta.
            </Text>
            <Button
              mt="s30"
              title="Ir para o mapa"
              onPress={() => navigation.navigate('MapaScreen')}
            />
          </Box>
        )}
        {isLoading || isFetching ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={collects}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            onEndReachedThreshold={0.1}
            refreshing={isLoading || isFetching}
            refreshControl={
              <RefreshControl refreshing={isLoading} onRefresh={refetch} />
            }
            keyExtractor={item => item.id.toString()}
          />
        )}
      </Box>
    </Screen>
  );
}
