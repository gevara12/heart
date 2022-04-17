import { Characteristics } from '@features/CreateApartment/components/Characteristics';

export type TPlaceType = 'entire-place' | 'private-room' | 'hotel-room' | 'shared-room';

export type TApartment = {
  placeType: 'entire-place' | 'private-room' | 'hotel-room' | 'shared-room';
  address: {
    city: { value: string };
    street: { value: string };
    longitude: { value: number };
    latitude: { value: number };
  };
  name: { value: string };
  description?: { value: string };
  amount: { value: number };
  characteristics: {
    guest: { value: number };
    bed: { value: number };
    floor: { value: number };
    square: { value: number };
  };
  qualities?: {
    wiFi: {
      value: boolean;
    };
    kitchen: {
      value: boolean;
    };
    washingMachine: {
      value: boolean;
    };
    conditioner: {
      value: boolean;
    };
    parking: {
      value: boolean;
    };
    tv: {
      value: boolean;
    };
  };
  betterComfort?: {
    workZone: {
      value: boolean;
    };
    swimmingPool: {
      value: boolean;
    };
    jacuzzi: {
      value: boolean;
    };
    backYard: {
      value: boolean;
    };
    bbqZone: {
      value: boolean;
    };
    fitnessZone: {
      value: boolean;
    };
  };
  checkInTime: string;
  checkOutTime: string;
  additionalRules?: {
    allowedSmoke: {
      value: boolean;
    };
    allowedAnimals: {
      value: boolean;
    };
    allowedParties: {
      value: boolean;
    };
    allowedChildren: {
      value: boolean;
    };
  };
  images: [
    {
      image: string;
      imageId: string;
      title: string;
      isCover: boolean;
    },
  ];
};

export type TUser = {
  data: {
    enabled: boolean;
    id: string;
    name?: string;
    email?: string;
    canSendOnEmail?: boolean;
    canShowPhoneNumber?: boolean;
    city?: string;
    dateOfBirth?: string;
    description?: string;
    dateOfRegistration?: string;
    avatar?: string;
    refWhatsapp?: string;
    refTelegram?: string;
  };
};

export type TAuth = {
  isLoggedIn: boolean;
  user: TUser;
};
