import {api} from '../../api/apiConfig';
import {EcoPointType, EcoPointTypeFormatted} from './ecoPointTypes';

async function getAllEcoPoints(): Promise<EcoPointTypeFormatted[] | null> {
  const response = await api.get<EcoPointTypeFormatted[]>('/eco-points');
  return response.data;
}

async function getEcoPointById(id: number): Promise<EcoPointType | null> {
  const response = await api.get<EcoPointType>(`/eco-points/${id}`);
  return response.data;
}

export const ecoPointApi = {
  getAllEcoPoints,
  getEcoPointById,
};
