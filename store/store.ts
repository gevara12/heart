import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// import { apartments, currentApartment } from 'store/apartments/reducers';
// import { images } from 'store/images/reducers';
// import { auth } from 'store/auth/reducers';
// import { message } from 'store/message/reducers';

const rootReducer = combineReducers({
  // apartments,
  // currentApartment,
  // images,
  // auth,
  // message
});

const initialState = {};
const middleware = [thunk];
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
