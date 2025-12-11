export interface EcoPointTypeAPI {
  id: number;
  name: string;
  zipCode: string;
  street: string;
  numberAddress: string;
  complement: string | null;
  neighborhood: string;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
  phoneNumber: string;
  serviceHours: string;
  infos: string;
  images: string[];
  materialsCollected: MaterialType[];
}
export interface MaterialType {
  id: number;
  name: string;
}
export interface EcoPointType {
  id: number;
  name: string;
  zipCode: string;
  street: string;
  numberAddress: string;
  complement: string | null;
  neighborhood: string;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
  phoneNumber: string;
  serviceHours: string;
  infos: string;
  images: string[];
  materialsCollected: MaterialType[];
}

export interface EcoPointMapType {
  id: number;
  name: string;
  street: string;
  numberAddress: string;
  complement: string | null;
  neighborhood: string;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
  phoneNumber: string;
  serviceHours: string;
}

export interface EcoPointNearbyResultApi {
  id: number;
  name: string;
  street: string;
  numberAddress: string;
  neighborhood: string;
  distance: number;
  phoneNumber: string;
  serviceHours: string;
}

export interface EcoPointNearbyResult {
  id: number;
  name: string;
  street: string;
  numberAddress: string;
  neighborhood: string;
  distance: number;
  phoneNumber: string;
  serviceHours: string;
}
