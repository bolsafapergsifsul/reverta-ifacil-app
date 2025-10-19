import {api} from '../../api/apiConfig';
import {UserAPI} from '../User/userTypes';
import {AuthCredentialsAPI, SignUpDataAPI} from './authTypes';

async function signIn(
  email: string,
  password: string,
): Promise<AuthCredentialsAPI> {
  const response = await api.post<AuthCredentialsAPI>('/auth/signin', {
    email,
    password,
  });
  console.log(response.data);
  return response.data;
}

async function singUp(data: SignUpDataAPI): Promise<UserAPI> {
  const response = await api.post<UserAPI>('/auth/signup', data);
  return response.data;
}

export const authApi = {
  signIn,
  singUp,
};
