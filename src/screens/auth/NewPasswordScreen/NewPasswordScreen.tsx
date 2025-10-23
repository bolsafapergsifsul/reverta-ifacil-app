import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {Box} from '../../../components/Box/Box';
import {Button} from '../../../components/Button/Button';
import {AuthScreenProps} from '../../../routes/navigationType';
import {useToastService} from '../../../services/toast/useToast';
import {useAuthUpdatePassword} from '../../../domain/Auth/useCases/useAuthUpdatePassword';
import {useForm} from 'react-hook-form';
import {newPasswordSchema, NewPasswordSchema} from './newPasswordSchema';
import {zodResolver} from '@hookform/resolvers/zod';
import {FormPasswordInput} from '../../../components/Form/FormPasswordInput';
import {AuthStackParamList} from '../../../routes/AuthStack';
import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess';

const resetParam: AuthStackParamList['SuccessScreen'] = {
  title: 'Tudo certo!',
  description: 'Sua senha foi alterada com sucesso!',
  icon: {
    name: 'stickerCheck',
    color: 'primary',
  },
};

export function NewPasswordScreen({
  route,
}: AuthScreenProps<'NewPasswordScreen'>) {
  const email = route.params.email;
  const {reset} = useResetNavigationSuccess();
  function navigateToSuccessScreen() {
    reset(resetParam);
  }

  const {showToast} = useToastService();
  const {updatePassword, isLoading} = useAuthUpdatePassword({
    onSuccess: () => navigateToSuccessScreen(),
    onError: message => showToast({message, type: 'error'}),
  });

  const {control, formState, handleSubmit} = useForm<NewPasswordSchema>({
    resolver: zodResolver(newPasswordSchema),
    defaultValues: {
      newPassword: '',
      confirmPassword: '',
    },
    mode: 'onChange',
  });

  function submitForm(data: NewPasswordSchema) {
    updatePassword({email, newPassword: data.newPassword});
  }

  return (
    <Screen canGoBack>
      <Text preset="headingMedium" mt="s26" bold>
        Pronto!
      </Text>
      <Text preset="headingMedium" bold>
        Crie uma nova senha
      </Text>
      <FormPasswordInput
        control={control}
        name="newPassword"
        placeholder="Digite uma nova senha"
        boxProps={{mt: 's24'}}
      />
      <FormPasswordInput
        control={control}
        name="confirmPassword"
        placeholder="Confirme sua nova senha"
        boxProps={{mt: 's24'}}
      />
      <Box mt="s42" alignItems="center">
        <Button
          title="Confirmar"
          loading={isLoading}
          disabled={!formState.isValid}
          onPress={handleSubmit(submitForm)}
        />
      </Box>
    </Screen>
  );
}
