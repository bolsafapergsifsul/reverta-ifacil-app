import {api} from '../../api/apiConfig';
import {UpdateUserParams, UserAPI} from './userTypes';

async function updateUser(
  userId: number,
  user: UpdateUserParams,
): Promise<UserAPI> {
  const response = await api.patch<UserAPI>(`/users/${userId}`, user);

  return response.data;
}

export const userApi = {
  updateUser,
};
