import {Image, Linking} from 'react-native';
import {ActivityIndicator} from '../../../components/ActivityIndicator/ActivityIndicator';
import {Box} from '../../../components/Box/Box';
import {Button} from '../../../components/Button/Button';
import {Header} from '../../../components/Header/Header';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {useEcoPointGetById} from '../../../domain/EcoPoint/useCases/useEcoPointGetById';
import {AppScreenProps} from '../../../routes/navigationType';
import {formatPhoneNumber} from '../../../utils/formatData';

export function EcoPointScreen({
  route,
  navigation,
}: AppScreenProps<'EcoPointScreen'>) {
  const ecoPointId = route.params.id;
  const {ecoPoint, isFetching, isLoading} = useEcoPointGetById(
    Number(ecoPointId),
  );

  function callPhone() {
    if (ecoPoint?.phoneNumber) {
      Linking.openURL(`tel:${ecoPoint.phoneNumber}`);
    }
  }

  return (
    <Screen canGoBack HeaderComponent={<Header />} noPaddingHorizontal>
      {isLoading || isFetching ? (
        <ActivityIndicator />
      ) : (
        <Box mt="s20" paddingHorizontal="s31">
          <Image
            style={{width: '100%', height: 200, borderRadius: 10}}
            source={{uri: ecoPoint?.images[0]}}
            resizeMode="cover"
          />
          <Text preset="headingSmall" semiBold mt="s10">
            {ecoPoint?.name}
          </Text>
          <Text mt="s10" preset="paragraphMedium" color="textSecondary">
            {`${ecoPoint?.street}, ${ecoPoint?.numberAddress} - ${ecoPoint?.neighborhood}, ${ecoPoint?.city} - ${ecoPoint?.state}`}
          </Text>
          <Text mt="s10" preset="paragraphMedium" medium color="primary">
            {ecoPoint?.serviceHours}
          </Text>
          {ecoPoint?.phoneNumber && (
            <Text mt="s10" preset="paragraphMedium">
              {formatPhoneNumber(ecoPoint?.phoneNumber)}
            </Text>
          )}
          {ecoPoint?.infos && (
            <Text mt="s10" preset="paragraphMedium" color="primary" semiBold>
              {ecoPoint?.infos}
            </Text>
          )}
          <Text preset="paragraphSmall" color="textSecondary" mt="s8">
            Materiais:{' '}
            {ecoPoint?.materialsCollected.map(m => m.name).join(', ')}
          </Text>
          <Box mt="s24" flexDirection="row" gap="s16">
            <Button
              title="Agendar coleta"
              flex={1}
              onPress={() =>
                navigation.navigate('ScheduleCollectScreen', {
                  ecoPointId: ecoPointId,
                  materialsCollected: ecoPoint?.materialsCollected || [],
                })
              }
            />
            {ecoPoint?.phoneNumber && (
              <Button
                title="Ligar"
                preset="outline"
                flex={1}
                onPress={callPhone}
              />
            )}
          </Box>
        </Box>
      )}
    </Screen>
  );
}
