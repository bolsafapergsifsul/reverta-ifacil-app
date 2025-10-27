export interface UserAPI {
  id: number;
  name: string;
  email: string;
  profilePic: string | null;
  phone: string;
  document: string;
  zipCode: string;
  latitude: number;
  longitude: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
  profilePic: string | null;
  phone: string;
  document: string;
  zipCode: string;
  latitude: number;
  longitude: number;
}
