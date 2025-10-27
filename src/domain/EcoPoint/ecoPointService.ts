import {ecoPointApi} from './authApi';
import {EcoPointType, EcoPointTypeFormatted} from './ecoPointTypes';

async function getAllEcoPoints(): Promise<EcoPointTypeFormatted[] | null> {
  return await ecoPointApi.getAllEcoPoints();
}

async function getEcoPointById(id: number): Promise<EcoPointType | null> {
  return await ecoPointApi.getEcoPointById(id);
}

export const ecoPointService = {
  getAllEcoPoints,
  getEcoPointById,
};
