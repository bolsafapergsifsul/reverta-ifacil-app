import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {Button} from '../../../components/Button/Button';
import {Box} from '../../../components/Box/Box';
import {SocialAuthButtons} from '../../../components/SocialAuthButtons/SocialAuthButtons';
import {AuthScreenProps} from '../../../routes/navigationType';
import {useAuthSignIn} from '../../../domain/Auth/useCases/useAuthSignIn';
import {useForm} from 'react-hook-form';
import {loginSchema, LoginSchema} from './loginSchema';
import {zodResolver} from '@hookform/resolvers/zod';
import {FormTextInput} from '../../../components/Form/FormTextInput';
import {FormPasswordInput} from '../../../components/Form/FormPasswordInput';

export function LoginScreen({navigation}: AuthScreenProps<'LoginScreen'>) {
  function navigateToSelectTypeUserScreen() {
    navigation.navigate('SelectTypeUserScreen');
  }

  function navigateToForgotPasswordScreen() {
    navigation.navigate('ForgotPasswordScreen');
  }

  const {isLoading, signIn} = useAuthSignIn();

  const {control, formState, handleSubmit} = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function submitForm({email, password}: LoginSchema) {
    console.log('tel login:', {email, password});
    signIn({email, password});
  }

  return (
    <Screen canGoBack>
      <Text preset="headingMedium" mt="s26" bold>
        Bem-vindo de volta!
      </Text>
      <Text preset="headingMedium" bold>
        Faça seu login
      </Text>
      <FormTextInput
        control={control}
        name="email"
        placeholder="Digite seu email"
        boxProps={{mt: 's46'}}
      />
      <FormPasswordInput
        control={control}
        name="password"
        placeholder="Digite sua senha"
        boxProps={{mt: 's24'}}
      />
      <Text
        preset="paragraphSmall"
        textAlign="right"
        mt="s14"
        onPress={navigateToForgotPasswordScreen}
        semiBold>
        Esqueceu a senha?
      </Text>
      <Box alignItems="center" mt="s42">
        <Button
          title="Entrar"
          loading={isLoading}
          disabled={!formState.isValid}
          onPress={handleSubmit(submitForm)}
        />
      </Box>
      <SocialAuthButtons title="Ou entre com" />
      <Text mt="s123" textAlign="center" medium>
        Ainda não tem uma conta?
      </Text>
      <Text
        mt="s2"
        textAlign="center"
        color="primary"
        bold
        onPress={navigateToSelectTypeUserScreen}>
        Faça seu cadastro
      </Text>
    </Screen>
  );
}
