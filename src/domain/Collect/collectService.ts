import {collectAdapter} from './collectAdapter';
import {collectApi} from './collectApi';
import {
  CollectData,
  CollectStatusType,
  CreateCollectType,
} from './collectTypes';

async function createCollect(data: CreateCollectType): Promise<CollectData> {
  const response = await collectApi.createCollect(data);
  return collectAdapter.toCollectInfo(response);
}

async function getCollectById(collectId: number): Promise<CollectData> {
  const response = await collectApi.getCollectById(collectId);
  return collectAdapter.toCollectInfo(response);
}

async function getCollectsByUserIdWithFilter(
  userId: number,
  status?: CollectStatusType,
): Promise<CollectData[]> {
  const response = await collectApi.getCollectsByUserIdWithFilter(
    userId,
    status,
  );
  return response.map(collectAdapter.toCollectInfo);
}

async function cancelCollect(
  collectId: number,
  status = 'CANCELED',
): Promise<string> {
  const response = await collectApi.cancelCollect(collectId, status);
  return response;
}

async function rescheduleCollect(
  collectId: number,
  newDate: string,
): Promise<CollectData> {
  const response = await collectApi.rescheduleCollect(collectId, newDate);
  return collectAdapter.toCollectInfo(response);
}

export const collectService = {
  createCollect,
  getCollectById,
  getCollectsByUserIdWithFilter,
  cancelCollect,
  rescheduleCollect,
};
