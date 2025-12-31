import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {AppScreenProps} from '../../../routes/navigationType';
import {useRescheduleCollect} from '../../../domain/Collect/useCases/useRescheduleCollect';
import {useToastService} from '../../../services/toast/useToast';
import {Calendar} from 'react-native-calendars';
import {Button} from '../../../components/Button/Button';
import {Box} from '../../../components/Box/Box';

export function RescheduleCollectScreen({
  navigation,
  route,
}: AppScreenProps<'RescheduleCollectScreen'>) {
  const {collectId, date} = route.params;
  const originalDate = new Date(date);
  const today = new Date().toISOString().split('T')[0];
  const nextDay = new Date(originalDate);
  nextDay.setDate(originalDate.getDate());
  const [selectedDate, setSelectedDate] = React.useState(
    formatDateToYMD(nextDay),
  );
  const {showToast} = useToastService();
  const {isLoading, rescheduleCollect} = useRescheduleCollect({
    onSuccess: () =>
      navigation.reset({
        index: 0,
        routes: [
          {
            name: 'AppTabNavigator',
            params: {
              screen: 'ColetasScreen',
              params: {isRefreshing: true},
            },
          },
        ],
      }),

    onError: message => showToast({message, type: 'error'}),
  });

  function rescheduleCollectUser() {
    if (!selectedDate) {
      showToast({
        message: 'Por favor, selecione uma nova data',
        type: 'error',
      });
      return;
    }
    rescheduleCollect(collectId, selectedDate);
  }

  function formatDateToYMD(data: Date) {
    const year = data.getFullYear();
    const month = String(data.getMonth() + 1).padStart(2, '0');
    const day = String(data.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  return (
    <Screen>
      <Text mt="s30" mb="s30" preset="headingSmall" bold>
        Escolha uma nova data para sua coleta
      </Text>
      <Calendar
        markedDates={{
          [selectedDate]: {
            selected: true,
            marked: true,
            selectedColor: '#319E42',
          },
        }}
        minDate={today}
        onDayPress={day => {
          setSelectedDate(day.dateString);
        }}
      />
      <Box mt="s30" alignItems="center">
        <Button
          title="Reagendar"
          onPress={rescheduleCollectUser}
          loading={isLoading}
        />
      </Box>
    </Screen>
  );
}
