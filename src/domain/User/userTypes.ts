export interface UserAPI {
  id: number;
  name: string;
  email: string;
  profilePic: string | null;
  phoneNumber: string;
  document: string;
  zipCode: string;
  street: string;
  numberAddress: string;
  neighborhood: string;
  city: string;
  state: string;
  complement: null | string;
  latitude: number;
  longitude: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
  profilePic: string | null;
  phoneNumber: string;
  document: string;
  zipCode: string;
  street: string;
  numberAddress: string;
  neighborhood: string;
  city: string;
  state: string;
  complement: null | string;
  latitude: number;
  longitude: number;
}

export interface UpdateUserParams {
  name: string;
  profilePic: string | null;
  numberAddress: string;
  phoneNumber: string;
  document: string;
  zipCode: string;
}
