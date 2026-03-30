import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {Box} from '../../../components/Box/Box';
import {Button} from '../../../components/Button/Button';
import {AuthScreenProps} from '../../../routes/navigationType';
import {useResetNavigation} from '../../../hooks/useResetNavigation';
import {useToastService} from '../../../services/toast/useToast';
import {useAuthValidateResetCode} from '../../../domain/Auth/useCases/useAuthValidateResetCode';
import {useForm, Controller} from 'react-hook-form';
import {
  codeVerificationSchema,
  CodeVerificationSchema,
} from './codeVerificationSchema';
import {zodResolver} from '@hookform/resolvers/zod';
import {useAuthSendResetCode} from '../../../domain/Auth/useCases/useAuthSendResetCode';
import {OtpInput} from '../../../components/OtpInput/OtpInput';

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
      <Controller
        control={control}
        name="code"
        render={({field}) => (
          <Box mt="s24">
            <OtpInput value={field.value} onChange={field.onChange} />
          </Box>
        )}
      />
      <Box mt="s42" gap="s14">
        <Button
          title="Verificar"
          loading={isLoading}
          disabled={!formState.isValid}
          onPress={handleSubmit(submitForm)}
        />
        <Button title="Reenviar Código" preset="outline" onPress={resendCode} />
      </Box>
      <Box mt="s42">
        <Text textAlign="center" medium>
          Não recebeu o código?
        </Text>
        <Text textAlign="center" color="primary" bold onPress={resendCode}>
          Reenviar
        </Text>
      </Box>
    </Screen>
  );
}
