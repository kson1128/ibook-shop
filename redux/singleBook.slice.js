// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// // export const fetchSingleProduct = (id) => {
// //   return async (dispatch) => {
// //     try {
// //       const { data } = await axios.get(`/api/products/${id}`);
// //       dispatch(getSingleProduct(data[0]));
// //     } catch (err) {
// //       console.log(err);
// //     }
// //   };
// // };

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

// export const bookSlice = createSlice({
//   name: 'single-book',
//   initialState: {},
//   reducers: {
//     fetchSingleBook: (state = initialState, action) => {

//       return action;
//     },
//     incrementQuantity: (state, action) => {
//       const item = state.find(item => item.id === action.payload);
//       item.quantity++;
//     },
//     decrementQuantity: (state, action) => {
//       const item = state.find(item => item.id === action.payload);
//       if (item.quantity === 1) {
//         const index = state.findIndex(item => item.id === action.payload);
//         state.splice(index, 1);
//       } else {
//         item.quantity--;
//       }
//     },
//     removeFromCart: (state, action) => {
//       const index = state.findIndex(item => item.id === action.payload);
//       state.splice(index, 1);
//     },
//   },
// });

// export const bookReducer = bookSlice.reducer;

// export const {
//   fetchSingleBook,
//   addToCart,
//   incrementQuantity,
//   decrementQuantity,
//   removeFromCart,
// } = bookSlice.actions;
