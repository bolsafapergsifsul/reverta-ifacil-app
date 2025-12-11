import {api} from '../../api/apiConfig';
import {
  CollectDataAPI,
  CollectStatusType,
  CreateCollectType,
} from './collectTypes';

async function createCollect(data: CreateCollectType): Promise<CollectDataAPI> {
  const response = await api.post<CollectDataAPI>('/collects', data);
  return response.data;
}

async function getCollectById(collectId: number): Promise<CollectDataAPI> {
  const response = await api.get<CollectDataAPI>(`/collects/${collectId}`);
  return response.data;
}

async function getCollectsByUserIdWithFilter(
  userId: number,
  status?: CollectStatusType,
): Promise<CollectDataAPI[]> {
  const response = await api.get<CollectDataAPI[]>(`/collects/user/${userId}`, {
    params: {
      status: status || undefined,
    },
  });
  return response.data;
}

async function cancelCollect(
  collectId: number,
  status = 'CANCELED',
): Promise<string> {
  const response = await api.patch<string>(`/collects/${collectId}/cancel`, {
    status,
  });
  return response.data;
}

async function rescheduleCollect(
  collectId: number,
  newDate: string,
): Promise<CollectDataAPI> {
  const response = await api.patch<CollectDataAPI>(`/collects/${collectId}`, {
    scheduledAt: newDate,
  });
  return response.data;
}

export const collectApi = {
  createCollect,
  getCollectById,
  getCollectsByUserIdWithFilter,
  cancelCollect,
  rescheduleCollect,
};
