import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
// import throttle from 'lodash/throttle';

import { apartments, currentApartment } from '@store/apartments/reducers';
import { images } from '@store/images/reducers';
import { auth } from '@store/auth/reducers';
import { error } from '@store/error/reducers';
import { snackbar } from '@store/snackbar/reducers';
import { newApart } from '@store/newApartForm/reducers';
import { syncA } from '@store/syncA/reducers';
import { users } from '@store/users/reducers';

// import { loadState, saveState } from '@store/sessionStorage';

const composeEnhancers = composeWithDevTools({});

const rootReducer = combineReducers({
  apartments,
  currentApartment,
  images,
  auth,
  error,
  snackbar,
  newApart,
  syncA,
  users,
});

const initialState = {};
const middleware = [thunk];
const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middleware)));

// store.subscribe(
//   throttle(() => {
//     saveState({
//       ...store.getState(),
//     });
//   }, 1500)
// );

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
