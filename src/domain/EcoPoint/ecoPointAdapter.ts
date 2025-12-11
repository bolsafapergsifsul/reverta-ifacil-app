import {EcoPointMapType, EcoPointTypeAPI} from './ecoPointTypes';

function toEcoPointMapInfo(ecoPoint: EcoPointTypeAPI): EcoPointMapType {
  return {
    id: ecoPoint.id,
    name: ecoPoint.name,
    street: ecoPoint.street,
    numberAddress: ecoPoint.numberAddress,
    complement: ecoPoint.complement,
    neighborhood: ecoPoint.neighborhood,
    city: ecoPoint.city,
    state: ecoPoint.state,
    latitude: ecoPoint.latitude,
    longitude: ecoPoint.longitude,
    phoneNumber: ecoPoint.phoneNumber,
    serviceHours: ecoPoint.serviceHours,
  };
}
export const ecoPointAdapter = {
  toEcoPointMapInfo,
};
