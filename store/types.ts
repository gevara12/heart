export type TPlaceType =
  | 'entire-place'
  | 'private-room'
  | 'hotel-room'
  | 'shared-room';

export type TApartment = {
  description: string;
  name: string;
  placeType: TPlaceType;
  amount: number;
};

export type TUser = {
  data: {
    enabled: boolean;
    id: string;
    name: string;
    status: 'ACTIVE' | 'DISABLED';
  };
};

export type TAuth = {
  isLoggedIn: boolean;
  user: TUser;
};
