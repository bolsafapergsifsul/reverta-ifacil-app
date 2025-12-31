import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {AuthStackParamList} from '../../../routes/AuthStack';
import {signUpSchema, SignUpSchema} from './signUpSchema';
import {AuthScreenProps} from '../../../routes/navigationType';
import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess';
import {useAuthSignUp} from '../../../domain/Auth/useCases/useAuthSignUp';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {useAsyncValidation} from '../../../form/useAsyncValidation';
import {authService} from '../../../domain/Auth/authService';
import {FormTextInput} from '../../../components/Form/FormTextInput';
import {ActivityIndicator} from '../../../components/ActivityIndicator/ActivityIndicator';
import {FormPasswordInput} from '../../../components/Form/FormPasswordInput';
import {Button} from '../../../components/Button/Button';
import {Box} from '../../../components/Box/Box';

const resetParam: AuthStackParamList['SuccessScreen'] = {
  title: 'Sua conta foi criada com sucesso!',
  description:
    'Agora você já pode fazer o login e começar utilizar o aplicativo.',
  icon: {
    name: 'checkRound',
    color: 'greenPrimaryLight',
  },
};

const defaultValues: SignUpSchema = {
  name: '',
  email: '',
  password: '',
  profilePic: '',
  document: '',
  phoneNumber: '',
  zipCode: '',
  numberAddress: '',
};

export function SignUpScreen({}: AuthScreenProps<'SignUpScreen'>) {
  const {reset} = useResetNavigationSuccess();
  const {signUp, isLoading} = useAuthSignUp({
    onSuccess: () => {
      reset(resetParam);
    },
  });

  const {control, formState, handleSubmit, watch, getFieldState} =
    useForm<SignUpSchema>({
      resolver: zodResolver(signUpSchema),
      defaultValues,
      mode: 'onChange',
    });

  function submitForm(formValues: SignUpSchema) {
    signUp({
      ...formValues,
    });
  }

  const emailValidation = useAsyncValidation({
    watch,
    getFieldState,
    fieldName: 'email',
    errorMessage: 'Este e-mail já está em uso.',
    isAvailableFunc: authService.isEmailAvailable,
  });

  return (
    <Screen canGoBack scrolllable flex={1}>
      <Text preset="headingMedium" bold mb="s24">
        Criar uma conta
      </Text>

      <FormTextInput
        control={control}
        name="name"
        placeholder="Digite seu nome"
        boxProps={{mb: 's24'}}
      />
      <FormTextInput
        control={control}
        name="email"
        placeholder="Digite seu e-mail"
        errorMessage={emailValidation.errorMessage}
        RightComponent={
          emailValidation.isFetching ? (
            <ActivityIndicator size="small" />
          ) : undefined
        }
        boxProps={{mb: 's24'}}
      />

      <FormPasswordInput
        control={control}
        name="password"
        placeholder="Digite sua senha"
        boxProps={{mb: 's24'}}
      />
      <FormTextInput
        control={control}
        name="document"
        placeholder="Digite seu CPF"
        boxProps={{mb: 's24'}}
      />
      <FormTextInput
        control={control}
        name="phoneNumber"
        placeholder="Digite seu telefone"
        boxProps={{mb: 's24'}}
      />
      <FormTextInput
        control={control}
        name="zipCode"
        placeholder="Digite seu CEP"
        boxProps={{mb: 's24'}}
      />
      <FormTextInput
        control={control}
        name="numberAddress"
        placeholder="Digite o número do seu endereço"
        boxProps={{mb: 's24'}}
      />
      <Box justifyContent="center" alignItems="center" paddingBottom="s20">
        <Button
          title="Cadastrar"
          loading={isLoading}
          disabled={!formState.isValid}
          onPress={handleSubmit(submitForm)}
        />
      </Box>
    </Screen>
  );
}
