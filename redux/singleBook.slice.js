import { createSlice, current, createAsyncThunk } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { addToCart } from './cart.slice';
// import store from './store';
import { supabase } from '.././public/utils/supabase';

// export const fetchASingleBook = createAsyncThunk(
//   'single-book/fetchSingleBook',
//   async (id, { getState }) => {
//     console.log('getstate-', getState);
//     try {
//       let { data: Product, error } = await supabase
//         .from('Product')
//         .select('*')
//         .eq('id', id);
//       return {
//         props: {
//           singleBook: data,
//         },
//       };
//       // const { data } = await axios.get(
//       //   `http://localhost:3000/api/allProducts/`
//       // );
//       // dispatch(fetchSingleBook(data[0]));
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
    setBook: (state, action) => {
      return { ...state, ...action.payload };
    },

    incrementQuantity: (state, action) => {
      if (state.quantity === undefined) {
        return { ...state, quantity: 2 };
      }
      state.quantity++;
    },
    decrementQuantity: (state, action) => {
      {
        if (state.quantity > 1) {
          state.quantity--;
        }
      }
    },
    removeFromCart: (state, action) => {
      const index = state.findIndex(item => item.id === action.payload);
      state.splice(index, 1);
    },
  },
  // extraReducers: builder => {
  //   // Add reducers for additional action types here, and handle loading state as needed
  //   builder.addCase(fetchASingleBook.fulfilled, (state, action) => {
  //     // Add user to the state array
  //     console.log('STATE: ', state);
  //     state.cart.push(action.payload);
  //   });
  // },
});

export const bookReducer = bookSlice.reducer;

export const {
  setBook,

  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} = bookSlice.actions;
