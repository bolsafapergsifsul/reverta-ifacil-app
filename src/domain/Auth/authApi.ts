import {AxiosRequestConfig} from 'axios';
import {api} from '../../api/apiConfig';
import {UserAPI} from '../User/userTypes';
import {
  AuthCredentialsAPI,
  EditPasswordParam,
  EmailIsAvailableAPI,
  ForgotPasswordParam,
  SignUpDataAPI,
  ValidateResetCodeAPI,
} from './authTypes';

async function signIn(
  email: string,
  password: string,
): Promise<AuthCredentialsAPI> {
  const response = await api.post<AuthCredentialsAPI>('/auth/signin', {
    email,
    password,
  });
  return response.data;
}

async function singUp(data: SignUpDataAPI): Promise<UserAPI> {
  const response = await api.post<UserAPI>('/auth/signup', data);
  return response.data;
}

async function signOut(): Promise<string> {
  const response = await api.post<string>('/auth/signout');
  return response.data;
}

async function isEmailAvailable(params: {
  email: string;
}): Promise<EmailIsAvailableAPI> {
  const response = await api.get<EmailIsAvailableAPI>('/auth/email-available', {
    params,
  });
  return response.data;
}

async function refreshToken(token: string): Promise<AuthCredentialsAPI> {
  const response = await api.post<AuthCredentialsAPI>('/auth/refresh-token', {
    token,
  });
  return response.data;
}

async function forgotPassword(params: ForgotPasswordParam): Promise<string> {
  const response = await api.post<string>('/forgot-password/code', params);
  return response.data;
}

async function validateCode(params: {
  email: string;
  resetCode: string;
}): Promise<ValidateResetCodeAPI | boolean> {
  const response = await api.post<ValidateResetCodeAPI | boolean>(
    '/forgot-password/validate-code',
    params,
  );
  return response.data;
}

async function editPassword(params: EditPasswordParam): Promise<string> {
  const response = await api.post<string>('/forgot-password/reset', params);
  return response.data;
}

function isRefreshTokenRequest(request: AxiosRequestConfig): boolean {
  const url = request.url;
  return url === '/auth/refresh-token';
}

export const authApi = {
  signIn,
  singUp,
  forgotPassword,
  validateCode,
  signOut,
  isEmailAvailable,
  refreshToken,
  editPassword,
  isRefreshTokenRequest,
};
