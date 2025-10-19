import {User, UserAPI} from '../User/userTypes';

export interface AuthCredentialsAPI {
  accessToken: string;
  user: UserAPI;
}

export interface AuthCredentials {
  token: string;
  user: User;
}

export interface SignUpDataAPI {
  name: string;
  email: string;
  password: string;
  cep: string;
  document: string;
  phone: string;
  numberAddress: string;
  complement: string | null;
}

export interface SignUpData {
  name: string;
  email: string;
  password: string;
  cep: string;
  document: string;
  phone: string;
  numberAddress: string;
  complement: string | null;
}
