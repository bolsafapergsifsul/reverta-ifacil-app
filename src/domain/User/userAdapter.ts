import {User, UserAPI} from './userTypes';

function toUser(userAPI: UserAPI): User {
  return {
    id: userAPI.id,
    name: userAPI.name,
    email: userAPI.email,
    profilePic: userAPI.profilePic,
    phone: userAPI.phone,
    document: userAPI.document,
    zipCode: userAPI.zipCode,
    latitude: userAPI.latitude,
    longitude: userAPI.longitude,
  };
}

export const userAdapter = {
  toUser,
};
