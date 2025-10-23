import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';

import {Box} from '../../../components/Box/Box';
import {Button} from '../../../components/Button/Button';
import {AuthScreenProps} from '../../../routes/navigationType';
import {useResetNavigation} from '../../../hooks/useResetNavigation';
import {useForm} from 'react-hook-form';
import {
  forgotPasswordSchema,
  ForgotPasswordSchema,
} from './forgotPasswordSchema';
import {zodResolver} from '@hookform/resolvers/zod';
import {FormTextInput} from '../../../components/Form/FormTextInput';
import {useToastService} from '../../../services/toast/useToast';
import {useAuthSendResetCode} from '../../../domain/Auth/useCases/useAuthSendResetCode';

export function ForgotPasswordScreen({
  navigation,
}: AuthScreenProps<'ForgotPasswordScreen'>) {
  const [email, setEmail] = React.useState('');
  const {reset} = useResetNavigation({
    firstRouteName: 'LoginScreen',
    secondRouteName: 'CodeVerificationScreen',
  });
  const {showToast} = useToastService();

  const {sendResetCode, isLoading} = useAuthSendResetCode({
    onSuccess: () => reset({email}),
    onError: message => showToast({message, type: 'error'}),
  });

  const {control, formState, handleSubmit} = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
    mode: 'onChange',
  });

  function submitForm(data: ForgotPasswordSchema) {
    setEmail(data.email);
    sendResetCode(data.email);
  }

  function navigateToLogin() {
    navigation.navigate('LoginScreen');
  }

  return (
    <Screen canGoBack>
      <Text preset="headingMedium" mt="s26" bold>
        Esqueceu sua senha?
      </Text>
      <Text mt="s10" medium>
        Por favor, insira o email vinculado a sua conta
      </Text>
      <FormTextInput
        control={control}
        name="email"
        placeholder="Digite seu e-mail"
        boxProps={{mt: 's24'}}
      />
      <Box mt="s42" alignItems="center">
        <Button
          title="Enviar código"
          loading={isLoading}
          disabled={!formState.isValid}
          onPress={handleSubmit(submitForm)}
        />
      </Box>
      <Text mt="s371" textAlign="center" medium>
        Lembrou da senha?
      </Text>
      <Text textAlign="center" color="primary" bold onPress={navigateToLogin}>
        Faça seu login
      </Text>
    </Screen>
  );
}
