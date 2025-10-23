import {api} from '../../api/apiConfig';
import {authAdapter} from './authAdapter';
import {authApi} from './authApi';
import {
  AuthCredentials,
  EditPasswordParam,
  SignUpData,
  ValidateResetCode,
} from './authTypes';

async function signIn(
  email: string,
  password: string,
): Promise<AuthCredentials> {
  try {
    const authCredentialsAPI = await authApi.signIn(email, password);
    return authAdapter.toAuthCredentials(authCredentialsAPI);
  } catch (error) {
    throw new Error('Email ou senha inválidos');
  }
}

async function signUp(signUpData: SignUpData): Promise<void> {
  await authApi.singUp(signUpData);
}

async function signOut(): Promise<string> {
  const message = await authApi.signOut();
  return message;
}

async function isEmailAvailable(email: string): Promise<boolean> {
  const {isAvailable} = await authApi.isEmailAvailable({email});
  return isAvailable;
}

async function requestNewPassword(email: string): Promise<string> {
  const message = await authApi.forgotPassword({email});
  return message;
}

async function validateResetCode(
  email: string,
  resetCode: string,
): Promise<ValidateResetCode | boolean> {
  const result = await authApi.validateCode({email, resetCode});
  return result;
}

async function updatePassword(params: EditPasswordParam): Promise<string> {
  const message = await authApi.editPassword(params);
  return message;
}

function updateToken(token: string) {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
}

function removeToken() {
  api.defaults.headers.common.Authorization = null;
}

async function authenticateByRefreshToken(
  refreshToken: string,
): Promise<AuthCredentials> {
  const acAPI = await authApi.refreshToken(refreshToken);
  return authAdapter.toAuthCredentials(acAPI);
}

export const authService = {
  signIn,
  signUp,
  signOut,
  isEmailAvailable,
  requestNewPassword,
  validateResetCode,
  updatePassword,
  updateToken,
  removeToken,
  authenticateByRefreshToken,
  isRefreshTokenRequest: authApi.isRefreshTokenRequest,
};
