export const getUser = (state: { users: any }) => state.users?.user;
export const getUserApartment = (apartId) => (state: { users: any }) => state.users?.user.apartments.find(({ id }) => id === apartId);
