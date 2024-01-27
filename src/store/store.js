import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { cartSlice } from '../slice/cart.slice';
import { serverSlice } from '../slice/server.slice';
const reducers = combineReducers({
    cart:cartSlice.reducer,
    server:serverSlice.reducer
})
const store = configureStore({
    reducer:reducers
  });

export default store