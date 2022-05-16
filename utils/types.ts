export type TPlaceType = 'entire_home' | 'private_home' | 'hotel_home' | 'shared_home';

export type TImage = {
  image: string;
  imageId: string;
  title: string;
};

export type TApartment = {
  id?: string;
  description?: { value: string };
  name?: { value: string };
  placeType?: { value: TPlaceType };
  amount?: number;
  images?: TImage[];
  publicInfo: object;
};

export type TCharacteristic = {
  guest: { value: number };
  bed: { value: number };
  bathrooms: { value: number };
  rooms: { value: number };
  floor: { value: number };
  square: { value: number };
};
