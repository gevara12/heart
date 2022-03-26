export type TPlaceType = 'entire-place' | 'private-room' | 'hotel-room' | 'shared-room';

export type TImage = {
  image: string;
  imageId: string;
  title: string;
};

export type TApartment = {
  description: string;
  name: string;
  placeType: TPlaceType;
  amount: number;
  images?: TImage[];
};
