import React from 'react';
import {Screen} from '../../../components/Screen/Screen';

import {useEcoPointGetAll} from '../../../domain/EcoPoint/useCases/useEcoPointGetAll';
import {ActivityIndicator} from '../../../components/ActivityIndicator/ActivityIndicator';
import {AppTabScreenProps} from '../../../routes/navigationType';
import MapView, {Marker} from 'react-native-maps';

export function MapaScreen({}: AppTabScreenProps<'MapaScreen'>) {
  const initialRegion = {
    latitude: -31.770514055189146,
    longitude: -52.34079319287451,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  const {ecoPoints, isFetching, isLoading} = useEcoPointGetAll();

  return (
    <Screen>
      {isLoading || isFetching ? (
        <ActivityIndicator />
      ) : (
        <MapView initialRegion={initialRegion}>
          {ecoPoints?.map(ecoPoint => (
            <Marker
              coordinate={{
                latitude: ecoPoint.latitude,
                longitude: ecoPoint.longitude,
              }}
              key={ecoPoint.id}
            />
          ))}
        </MapView>
      )}
    </Screen>
  );
}
