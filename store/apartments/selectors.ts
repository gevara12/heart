import { TApartment } from '@utils/types';

type TCurrentApartment = {
  currentApartment: TApartment;
}

export const getApartmentsList = (state: { apartments: [] }) => state.apartments;
export const getCurrentApartment = (state: { currentApartment: TCurrentApartment }) => state.currentApartment;
