import { TAuth } from '@store/types';

export const getUserStatus = (state: { auth: TAuth }) => state.auth;
export const getCurrentUser = (state: { auth: TAuth }) => state.auth?.user?.data;
export const getUserKey = (state: { auth: TAuth }) => state.auth?.user?.data?.id.substring(0, 4);
