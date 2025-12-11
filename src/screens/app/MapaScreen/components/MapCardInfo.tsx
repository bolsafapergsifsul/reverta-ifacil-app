import React from 'react';
import {Box, BoxProps, PressableBox} from '../../../../components/Box/Box';
import {Text} from '../../../../components/Text/Text';
import {EcoPointNearbyResult} from '../../../../domain/EcoPoint/ecoPointTypes';
import {Icon} from '../../../../components/Icon/Icon';
import {useNavigation} from '@react-navigation/native';
import {formatPhoneNumber} from '../../../../utils/formatData';

export function MapCardInfo(ecoPointData: EcoPointNearbyResult) {
  const navigation = useNavigation();

  function goToEcoPointDetailScreen() {
    navigation.navigate('EcoPointScreen', {id: ecoPointData.id});
  }
  return (
    <PressableBox onPress={goToEcoPointDetailScreen} mt="s8">
      <Box
        flexDirection="row"
        alignItems="center"
        gap="s4"
        borderRadius="s8"
        padding="s8"
        {...$shadowProps}>
        <Icon name="marker" />
        <Text preset="paragraphSmall" semiBold>
          {ecoPointData.name}
        </Text>
      </Box>

      <Text mt="s8" preset="paragraphSmall">
        {`${ecoPointData.street}, ${ecoPointData.numberAddress} - ${ecoPointData.neighborhood}`}
      </Text>
      <Text preset="paragraphSmall" color="greenPrimary" mt="s8">
        {ecoPointData.serviceHours}
      </Text>
      {ecoPointData.phoneNumber && (
        <Text preset="paragraphSmall" mt="s8">
          {formatPhoneNumber(ecoPointData.phoneNumber)}
        </Text>
      )}
    </PressableBox>
  );
}

const $shadowProps: BoxProps = {
  shadowColor: 'black1',
  shadowOpacity: 0.1,
  shadowRadius: 15,
  shadowOffset: {width: 0, height: 4},
  elevation: 6,
  backgroundColor: 'white',
};
