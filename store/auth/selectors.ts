import { TAuth } from '@store/types';

export const getUserStatus = (state: { auth: TAuth }) => state.auth;
