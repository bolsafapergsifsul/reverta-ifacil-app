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
  profilePic: null,
  document: '',
  phone: '',
  zipCode: '',
  street: '',
  numberAddress: '',
  complement: null,
  neighborhood: '',
  city: '',
  state: '',
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
    signUp(formValues);
  }

  const emailValidation = useAsyncValidation({
    watch,
    getFieldState,
    fieldName: 'email',
    errorMessage: 'Este e-mail já está em uso.',
    isAvailableFunc: authService.isEmailAvailable,
  });

  return (
    <Screen canGoBack scrolllable>
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
        name="phone"
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
        name="street"
        placeholder="Digite sua rua"
        boxProps={{mb: 's24'}}
      />
      <FormTextInput
        control={control}
        name="numberAddress"
        placeholder="Digite seu número"
        boxProps={{mb: 's24'}}
      />
      <FormTextInput
        control={control}
        name="complement"
        placeholder="Digite seu complemento"
        boxProps={{mb: 's24'}}
      />
      <FormTextInput
        control={control}
        name="neighborhood"
        placeholder="Digite seu bairro"
        boxProps={{mb: 's24'}}
      />
      <FormTextInput
        control={control}
        name="city"
        placeholder="Digite sua cidade"
        boxProps={{mb: 's24'}}
      />
      <FormTextInput
        control={control}
        name="state"
        placeholder="Digite seu estado"
        boxProps={{mb: 's80'}}
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
