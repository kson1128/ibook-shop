import { createSlice, current } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const itemExists = state.find(item => {
        return item.id === action.payload.id;
      });

      if (itemExists !== undefined) {
        itemExists.quantity++;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    addToQuantityCart: (state, action) => {
      let index = 1;
      {
        const itemExists = state.find((item, idx) => {
          index = idx;
          if (item.id === action.payload.id) {
            item.quantity += action.payload.quantity;
            // return { ...state, ...action.payload };
          }
        });
      }
      state.push({
        ...action.payload,
        quantity: action.payload.quantity,
      });
      state.splice(index + 1, 1);
    },
    incrementQuantity: (state, action) => {
      console.log('state.id', state);
      console.log('action', action);
      const item = state.find(item => item.id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.find(item => item.id === action.payload);
      if (item.quantity === 1) {
        const index = state.findIndex(item => item.id === action.payload);
        state.splice(index, 1);
      } else {
        item.quantity--;
      }
    },
    removeFromCart: (state, action) => {
      const index = state.findIndex(item => item.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const {
  addToCart,
  addToQuantityCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} = cartSlice.actions;

export default cartReducer;
