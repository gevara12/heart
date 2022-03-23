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
  enabled: boolean;
  id: string;
  username: string;
  status: 'ACTIVE' | 'DISABLED';
};

export type TAuth = {
  isLoggedIn: boolean;
  user: TUser;
};


