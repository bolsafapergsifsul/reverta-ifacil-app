import React, {useState} from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {Box} from '../../../components/Box/Box';
import {Calendar} from 'react-native-calendars';
import {Button} from '../../../components/Button/Button';
import {AppScreenProps} from '../../../routes/navigationType';
import {useAuthCredentials} from '../../../services/authCredentials/useAuthCredentials';
import {MultiSelect} from 'react-native-element-dropdown';
import {useForm} from 'react-hook-form';
import {
  sheduleCollectSchema,
  SheduleCollectSchema,
} from './sheduleCollectSchema';
import {zodResolver} from '@hookform/resolvers/zod';
import {FormTextInput} from '../../../components/Form/FormTextInput';
import {useToastService} from '../../../services/toast/useToast';
import {useCreateCollect} from '../../../domain/Collect/useCases/useCreateCollect';

export function ScheduleCollectScreen({
  navigation,
  route,
}: AppScreenProps<'ScheduleCollectScreen'>) {
  function navigateToSuccess() {
    navigation.navigate('SuccessAppScreen');
  }
  const {authCredentials} = useAuthCredentials();
  const today = new Date().toISOString().split('T')[0];
  const [selectedDate, setSelectedDate] = React.useState(today);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const materialsData = route.params.materialsCollected;
  const {showToast} = useToastService();
  const {control, formState, handleSubmit} = useForm<SheduleCollectSchema>({
    resolver: zodResolver(sheduleCollectSchema),
    defaultValues: {
      weight: '',
      observations: '',
    },
    mode: 'onChange',
  });

  const {isLoading, createCollect} = useCreateCollect({
    onError: message => showToast({message, type: 'error'}),
    onSuccess: () => navigateToSuccess(),
  });

  function submitForm(data: SheduleCollectSchema) {
    if (!selectedDate || selectedMaterials.length === 0) {
      showToast({
        message: 'Por favor, selecione uma data ou materiais.',
        type: 'error',
      });
      return;
    }
    createCollect({
      scheduledAt: selectedDate,
      materials: selectedMaterials.map(id => ({id: Number(id)})),
      estimatedWeight: data.weight,
      userId: authCredentials.user.id,
      notes: data.observations,
      ecoPointId: route.params.ecoPointId,
    });
  }

  return (
    <Screen canGoBack scrolllable>
      <Box backgroundColor="white" borderRadius="s10" mt="s10" padding="s10">
        <Text
          bold>{`${authCredentials.user.street}, ${authCredentials.user.numberAddress} - ${authCredentials.user.neighborhood}, ${authCredentials.user.city} - ${authCredentials.user.state}`}</Text>
      </Box>
      <Text preset="paragraphMedium" bold mt="s16" mb="s10">
        Quando será sua coleta?
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
      <Text preset="paragraphMedium" bold mt="s10">
        Quais materiais serão Coletados?
      </Text>
      <MultiSelect
        mode="modal"
        data={materialsData}
        labelField="name"
        valueField="id"
        value={selectedMaterials}
        placeholder="Selecione os materiais"
        onChange={item => {
          setSelectedMaterials(item);
        }}
      />
      <Text preset="paragraphMedium" bold mt="s10">
        Qual o peso aproximado da sua separação?
      </Text>
      <FormTextInput
        control={control}
        name="weight"
        placeholder="Digite o peso aproximado"
      />
      <Text preset="paragraphMedium" bold mt="s10">
        Tem alguma observação?
      </Text>
      <FormTextInput
        control={control}
        name="observations"
        placeholder="Digite sua observação"
        multiline={true}
        numberOfLines={1}
      />
      <Box mt="s20" alignItems="center">
        <Button
          title="Agendar Coleta"
          disabled={!formState.isValid || isLoading}
          onPress={handleSubmit(submitForm)}
        />
      </Box>
    </Screen>
  );
}
