import {User, UserAPI} from './userTypes';

function toUser(userAPI: UserAPI): User {
  return {
    id: userAPI.id,
    name: userAPI.name,
    email: userAPI.email,
    cep: userAPI.cep,
    document: userAPI.document,
    phone: userAPI.phone,
    numberAddress: userAPI.numberAddress,
    complement: userAPI.complement,
  };
}

export const userAdapter = {
  toUser,
};
