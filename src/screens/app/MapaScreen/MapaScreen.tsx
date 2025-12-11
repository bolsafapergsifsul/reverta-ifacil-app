import React, {useEffect, useState} from 'react';
import {Screen} from '../../../components/Screen/Screen';

import {useEcoPointGetAll} from '../../../domain/EcoPoint/useCases/useEcoPointGetAll';
import {AppTabScreenProps} from '../../../routes/navigationType';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {useAuthCredentials} from '../../../services/authCredentials/useAuthCredentials';
import {
  FlatList,
  ListRenderItemInfo,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import {useAppTheme} from '../../../hooks/useAppTheme';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Box} from '../../../components/Box/Box';
import {Text} from '../../../components/Text/Text';
import {Icon} from '../../../components/Icon/Icon';
import {useDebounce} from '../../../hooks/useDebounce';

import {EcoPointNearbyResult} from '../../../domain/EcoPoint/ecoPointTypes';

import {ecoPointService} from '../../../domain/EcoPoint/ecoPointService';
import {useSearchNearby} from '../../../domain/EcoPoint/useCases/useSearchNearby';
import {MapCardInfo} from './components/MapCardInfo';

export function MapaScreen({}: AppTabScreenProps<'MapaScreen'>) {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search);
  const {data: searchData} = useSearchNearby(debouncedSearch);
  const [data, setData] = useState<EcoPointNearbyResult[]>([]);

  const {ecoPoints, isFetching, isLoading} = useEcoPointGetAll();

  const {authCredentials} = useAuthCredentials();
  const region = {
    latitude: Number(authCredentials.user.latitude),
    longitude: Number(authCredentials.user.longitude),
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  const {colors} = useAppTheme();
  function permissionLocation() {
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
    }
  }

  async function getInitialDataNearby() {
    const response = await ecoPointService.searchAllNearby(
      '',
      authCredentials.user.latitude,
      authCredentials.user.longitude,
    );
    setData(response);
  }

  useEffect(() => {
    getInitialDataNearby();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function renderItem({item}: ListRenderItemInfo<EcoPointNearbyResult>) {
    return <MapCardInfo {...item} />;
  }

  return (
    <Screen flex={1} noPaddingHorizontal noPaddingBottom>
      <Box flex={1}>
        <MapView
          onMapReady={permissionLocation}
          provider={PROVIDER_GOOGLE}
          mapType="standard"
          followsUserLocation={true}
          loadingEnabled={isFetching || isLoading ? true : false}
          initialRegion={region}
          showsUserLocation={true}
          style={{flex: 1}}>
          {ecoPoints?.map(ecoPoint => (
            <Marker
              coordinate={{
                latitude: ecoPoint.latitude,
                longitude: ecoPoint.longitude,
              }}
              key={ecoPoint.id}
              title={ecoPoint.name}
              pinColor={colors.primary}
            />
          ))}
        </MapView>
      </Box>
      <Box backgroundColor="white" flex={1} paddingHorizontal="s31">
        <Text marginTop="s20" preset="headingSmall" mb="s10" bold>
          Veja os Ecopontos e EcoColetores perto de você
        </Text>
        <Box mb="s10">
          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="Buscar por CEP"
            LeftComponent={<Icon name="busca" fillColor="gray4" />}
          />
        </Box>
        <FlatList
          data={searchData ? searchData : data}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.1}
          style={{flex: 1}}
          keyExtractor={item => item.id.toString()}
        />
      </Box>
    </Screen>
  );
}

// const styles = StyleSheet.create({
//   map: {
//     ...StyleSheet.absoluteFillObject,
//   },
// });
