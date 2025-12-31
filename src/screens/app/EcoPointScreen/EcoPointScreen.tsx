import {Image} from 'react-native';
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
  return (
    <Screen canGoBack HeaderComponent={<Header />} noPaddingHorizontal>
      {isLoading || isFetching ? (
        <ActivityIndicator />
      ) : (
        <Box mt="s20" paddingHorizontal="s31">
          <Image
            style={{width: 'auto', borderRadius: 10}}
            source={{uri: ecoPoint?.images[0], width: 313, height: 180}}
          />
          <Text preset="headingSmall" semiBold mt="s10">
            {ecoPoint?.name}
          </Text>
          <Text
            mt="s10"
            preset="paragraphMedium">{`${ecoPoint?.street}, ${ecoPoint?.numberAddress} - ${ecoPoint?.neighborhood}, ${ecoPoint?.city} - ${ecoPoint?.state}`}</Text>
          <Text mt="s10" preset="paragraphMedium" medium>
            {ecoPoint?.serviceHours}
          </Text>
          {ecoPoint?.phoneNumber && (
            <Text mt="s10" preset="paragraphMedium">
              {formatPhoneNumber(ecoPoint?.phoneNumber)}
            </Text>
          )}
          {ecoPoint?.infos && (
            <Text mt="s19" preset="paragraphMedium" semiBold>
              {ecoPoint?.infos}
            </Text>
          )}
          <Text preset="paragraphSmall">
            Materiais:{' '}
            {ecoPoint?.materialsCollected.map(m => m.name).join(', ')}
          </Text>
          <Box mt="s24" flexDirection="row" justifyContent="space-between">
            <Button
              title="Agendar coleta"
              onPress={() =>
                navigation.navigate('ScheduleCollectScreen', {
                  ecoPointId: ecoPointId,
                  materialsCollected: ecoPoint?.materialsCollected || [],
                })
              }
              // width={170}
              flex={1}
            />
            {/* <Button title="Ligar" width={110} /> */}
          </Box>
        </Box>
      )}
    </Screen>
  );
}
