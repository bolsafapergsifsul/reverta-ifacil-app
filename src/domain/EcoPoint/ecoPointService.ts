import {ecoPointAdapter} from './ecoPointAdapter';
import {ecoPointApi} from './ecoPointApi';
import {
  EcoPointMapType,
  EcoPointNearbyResult,
  EcoPointType,
} from './ecoPointTypes';

async function getAllEcoPoints(): Promise<EcoPointMapType[]> {
  const ecoPoints = await ecoPointApi.getAllEcoPoints();
  const ecoPointsFormated = ecoPoints.map(ecoPointAdapter.toEcoPointMapInfo);
  return ecoPointsFormated;
}

async function getEcoPointById(id: number): Promise<EcoPointType | null> {
  return await ecoPointApi.getEcoPointById(id);
}

async function searchAllNearby(
  zipCode?: string,
  latitude?: number,
  longitude?: number,
): Promise<EcoPointNearbyResult[]> {
  const ecoPoints = await ecoPointApi.getListNearby(
    zipCode,
    latitude,
    longitude,
  );

  return ecoPoints;
}

export const ecoPointService = {
  getAllEcoPoints,
  getEcoPointById,
  searchAllNearby,
};
