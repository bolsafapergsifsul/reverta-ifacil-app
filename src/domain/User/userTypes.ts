export interface UserAPI {
  id: number;
  name: string;
  email: string;
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

export interface User {
  id: number;
  name: string;
  email: string;
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
