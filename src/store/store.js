import { configureStore } from '@reduxjs/toolkit'
import { cartSlice } from '../slice/cart.slice';
import { serverSlice } from '../slice/server.slice';

const store = configureStore({
    reducer:{
      cart:cartSlice.reducer,
      server:serverSlice.reducer
    }
  });

export default store