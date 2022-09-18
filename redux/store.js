import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './cart.slice';
import { bookReducer } from './singleBook.slice';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';

const reducer = {
  cart: cartReducer,
  singleBook: bookReducer,
};

export const store = configureStore({
  reducer,
});
// export const makeStore = () =>
//   configureStore({
//     reducer,
//   });
console.log('store:', store.getState());

export const wrapper = createWrapper(store);
export default wrapper;
