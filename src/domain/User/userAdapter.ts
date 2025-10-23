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
    street: userAPI.street,
    numberAddress: userAPI.numberAddress,
    complement: userAPI.complement,
    neighborhood: userAPI.neighborhood,
    city: userAPI.city,
    state: userAPI.state,
  };
}

export const userAdapter = {
  toUser,
};
