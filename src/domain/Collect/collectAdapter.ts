import {CollectData, CollectDataAPI} from './collectTypes';

function toCollectInfo(data: CollectDataAPI): CollectData {
  return {
    id: data.id,
    scheduledAt: data.scheduledAt,
    estimatedWeight: data.estimatedWeight,
    status: data.status,
    ecoPoint: data.ecoPoint,
    materials: data.materials,
    notes: data.notes,
  };
}

export const collectAdapter = {
  toCollectInfo,
};
