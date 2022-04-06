type TQuizReducer = {
  type: string;
  payload: {
    qualities?: [];
  };
};

const initialState = {
  currentApartment: {},
};

export const initializer = (initialValue = initialState) =>
  JSON.parse(localStorage.getItem('currentApartment')) || initialValue;

export const ApartmentReducer = (state, { type, payload }: TQuizReducer) => {
  switch (type) {
    case 'update': {
      // console.info('initializer', initializer());
      // console.info('state in red', state);
      // console.info('payload reducer', payload);
      return {
        ...state,
        currentApartment: {
          ...state.currentApartment,
          ...payload,
        },
      };
    }

    case 'set': {
      return payload;
    }

    default:
      return state;
  }
};
