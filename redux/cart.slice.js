import { createSlice } from '@reduxjs/toolkit';
import { FaAcquisitionsIncorporated } from 'react-icons/fa';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      console.log('cart.slice.addToCart', action);
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
      {
        console.log('STATE-', state);
        console.log('ACTION-', action);
        const itemExists = state.find(item => {
          item.id === action.payload.id;
        });
        if (itemExists) {
          console.log('ITEM-', item.quantity);
          itemExists.quantity += action.payload.quantity;
        } else {
          state.push({ ...action.payload, quantity: action.payload.quantity });
        }
      }
    },
    incrementQuantity: (state, action) => {
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
  addToQuantityCart,
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} = cartSlice.actions;
