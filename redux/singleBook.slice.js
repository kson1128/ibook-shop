import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { store } from './store';

// console.log('STOREEE', store.getState());
// export const fetchASingleBook = createAsyncThunk(
//   'single-book/fetchSingleBook',
//   async (id, thunkAPI) => {
//     try {
//       const { data } = await axios.get(
//         `http://localhost:3000/api/allProducts/`
//       );
//       dispatch(fetchSingleBook(data[0]));
//     } catch (err) {
//       // custom error
//       console.log(err);
//       console.log('ERRRORRR');
//     }
//   }
// );

export const bookSlice = createSlice({
  name: 'single-book',
  initialState: {},
  reducers: {
    increment: (state, action) => {
      {
        if (action.payload.singleBook.quantity === undefined) {
          action.payload.singleBook.quantity = 1;
        } else {
          action.payload.singleBook.quantity++;
          return { ...action.payload.singleBook };
        }
      }
    },

    decrement: (state, action) => {
      {
        if (action.payload.quantity > 1) {
          action.payload.quantity--;
          return { ...action.payload };
        }
      }
    },
    removeFromCart: (state, action) => {
      const index = state.findIndex(item => item.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const bookReducer = bookSlice.reducer;

export const { addToQuantityCart, increment, decrement, removeFromCart } =
  bookSlice.actions;
