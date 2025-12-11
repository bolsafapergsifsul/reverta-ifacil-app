import {api} from '../../api/apiConfig';
import {EcoPointNearbyResultApi, EcoPointTypeAPI} from './ecoPointTypes';

async function getAllEcoPoints(): Promise<EcoPointTypeAPI[]> {
  const response = await api.get<EcoPointTypeAPI[]>('/eco-points');
  return response.data;
}

async function getEcoPointById(id: number): Promise<EcoPointTypeAPI | null> {
  const response = await api.get<EcoPointTypeAPI>(`/eco-points/${id}`);
  return response.data;
}

async function getListNearby(
  zipCode?: string,
  latitude?: number,
  longitude?: number,
): Promise<EcoPointNearbyResultApi[]> {
  const response = await api.get<EcoPointNearbyResultApi[]>(
    '/eco-points/search',
    {
      params: {
        zipCode,
        latitude,
        longitude,
      },
    },
  );
  return response.data;
}

export const ecoPointApi = {
  getAllEcoPoints,
  getEcoPointById,
  getListNearby,
};
