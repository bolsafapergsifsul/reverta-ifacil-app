import {User, UserAPI} from '../User/userTypes';

export interface AuthCredentialsAPI {
  accessToken: string;
  refreshToken: string;
  user: UserAPI;
}

export interface AuthCredentials {
  token: string;
  refreshToken: string;
  user: User;
}

export interface ForgotPasswordParam {
  email: string;
}

export interface EditPasswordParam {
  email: string;
  newPassword: string;
}

export interface EmailIsAvailableAPI {
  message: string;
  isAvailable: boolean;
}

export interface ValidateResetCodeAPI {
  message: string;
  error: string;
  statusCode: number;
}

export interface ValidateResetCode {
  message: string;
  error: string;
  statusCode: number;
}
export interface SignUpDataAPI {
  name: string;
  email: string;
  password: string;
  profilePic: string | null;
  phone: string;
  document: string; // CPF or CNPJ
  zipCode: string; // CEP
  street: string; // logradouro
  numberAddress: string;
  complement: string | null;
  neighborhood: string; // bairro
  city: string;
  state: string;
}

export interface SignUpData {
  name: string;
  email: string;
  password: string;
  profilePic: string | null;
  phone: string;
  document: string;
  zipCode: string;
  street: string;
  numberAddress: string;
  complement: string | null;
  neighborhood: string;
  city: string;
  state: string;
}
