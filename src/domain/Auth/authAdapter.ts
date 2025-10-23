import {userAdapter} from '../User/userAdapter';
import {AuthCredentials, AuthCredentialsAPI} from './authTypes';

function toAuthCredentials(
  AuthCredentialsApi: AuthCredentialsAPI,
): AuthCredentials {
  return {
    token: AuthCredentialsApi.accessToken,
    refreshToken: AuthCredentialsApi.refreshToken,
    user: userAdapter.toUser(AuthCredentialsApi.user),
  };
}

export const authAdapter = {toAuthCredentials};
