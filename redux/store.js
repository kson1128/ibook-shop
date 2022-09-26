import {
  combineReducers,
  configureStore,
  applyMiddleware,
} from '@reduxjs/toolkit';
import { cartReducer } from './cart.slice';
import { bookReducer } from './singleBook.slice';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import thunk from 'redux-thunk';

// const bindMiddleware = middleware => {
//   if (process.env.NODE_ENV !== 'production') {
//     const { composeWithDevTools } = require('redux-devtools-extension');
//     return composeWithDevTools(applyMiddleware(...middleware));
//   }
//   return applyMiddleware(...middleware);
// };

const reducer = combineReducers({
  cart: cartReducer,
  singleBook: bookReducer,
});

const store = configureStore({
  reducer,
});

export default store;
