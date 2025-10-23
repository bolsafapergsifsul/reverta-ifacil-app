import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {Box} from '../../../components/Box/Box';
import {Button} from '../../../components/Button/Button';
import {AuthScreenProps} from '../../../routes/navigationType';
import {useResetNavigation} from '../../../hooks/useResetNavigation';
import {useToastService} from '../../../services/toast/useToast';
import {useAuthValidateResetCode} from '../../../domain/Auth/useCases/useAuthValidateResetCode';
import {useForm} from 'react-hook-form';
import {
  codeVerificationSchema,
  CodeVerificationSchema,
} from './codeVerificationSchema';
import {zodResolver} from '@hookform/resolvers/zod';
import {FormTextInput} from '../../../components/Form/FormTextInput';
import {useAuthSendResetCode} from '../../../domain/Auth/useCases/useAuthSendResetCode';

export function CodeVerificationScreen({
  route,
}: AuthScreenProps<'CodeVerificationScreen'>) {
  const routeParams = route.params.email;
  const [email, setEmail] = React.useState('');

  const {reset} = useResetNavigation({
    firstRouteName: 'LoginScreen',
    secondRouteName: 'NewPasswordScreen',
  });
  const {showToast} = useToastService();
  const {validateResetCode, isLoading} = useAuthValidateResetCode({
    onSuccess: () => reset({email}),
    onError: message => showToast({message, type: 'error'}),
  });

  const {control, formState, handleSubmit} = useForm<CodeVerificationSchema>({
    resolver: zodResolver(codeVerificationSchema),
    defaultValues: {
      code: '',
    },
    mode: 'onChange',
  });

  function submitForm(data: CodeVerificationSchema) {
    setEmail(routeParams);
    validateResetCode(routeParams, data.code);
  }

  const {sendResetCode} = useAuthSendResetCode({
    onSuccess: () => null,
    onError: message => showToast({message, type: 'error'}),
  });

  function resendCode() {
    sendResetCode(routeParams);
  }

  return (
    <Screen canGoBack>
      <Text preset="headingMedium" mt="s26" bold>
        Verificação
      </Text>
      <Text mt="s10" medium>
        Insira abaixo o código de 4 dígitos que enviamos para o seu email
      </Text>
      {/* <Box mt="s24" gap="s16" flexDirection="row">
        <TextInput textAlign="center" />
        <TextInput textAlign="center" />
        <TextInput textAlign="center" />
        <TextInput textAlign="center" />
      </Box> */}
      <FormTextInput
        control={control}
        name="code"
        placeholder="Código"
        boxProps={{mt: 's24'}}
      />
      <Box mt="s42" gap="s24" alignItems="center">
        <Button
          title="Verificar"
          loading={isLoading}
          disabled={!formState.isValid}
          onPress={handleSubmit(submitForm)}
        />
        <Button title="Reenviar Código" onPress={resendCode} />
      </Box>
      <Text mt="s300" textAlign="center" medium>
        Não recebeu o código?
      </Text>
      <Text textAlign="center" color="primary" bold onPress={resendCode}>
        Reenviar
      </Text>
    </Screen>
  );
}
