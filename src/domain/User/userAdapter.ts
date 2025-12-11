import {User, UserAPI} from './userTypes';

function toUser(userAPI: UserAPI): User {
  return {
    id: userAPI.id,
    name: userAPI.name,
    email: userAPI.email,
    profilePic: userAPI.profilePic,
    phoneNumber: userAPI.phoneNumber,
    document: userAPI.document,
    zipCode: userAPI.zipCode,
    street: userAPI.street,
    numberAddress: userAPI.numberAddress,
    neighborhood: userAPI.neighborhood,
    city: userAPI.city,
    state: userAPI.state,
    complement: userAPI.complement,
    latitude: userAPI.latitude,
    longitude: userAPI.longitude,
  };
}

export const userAdapter = {
  toUser,
};
