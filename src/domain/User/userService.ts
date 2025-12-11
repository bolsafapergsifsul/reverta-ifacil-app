import {userAdapter} from './userAdapter';
import {userApi} from './userApi';
import {UpdateUserParams, User} from './userTypes';

async function updateUser(
  userId: number,
  user: UpdateUserParams,
): Promise<User> {
  const userUpdated = await userApi.updateUser(userId, user);
  return userAdapter.toUser(userUpdated);
}

export const userService = {
  updateUser,
};
