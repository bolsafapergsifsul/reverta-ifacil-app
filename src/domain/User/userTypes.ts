export interface UserAPI {
  id: number;
  name: string;
  email: string;
  cep: string;
  document: string;
  phone: string;
  numberAddress: string;
  complement: string | null;
}

export interface User {
  id: number;
  name: string;
  email: string;
  cep: string;
  document: string;
  phone: string;
  numberAddress: string;
  complement: string | null;
}
