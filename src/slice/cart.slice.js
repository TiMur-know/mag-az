import { createSlice, current } from "@reduxjs/toolkit"
import { ProductItemToProductCart } from "../Util/functions"
const initialState ={
  cartItems:[]}


export const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
      addProductToCart:(state,{payload:product})=>{
        const cartItem=ProductItemToProductCart(product)
        if(!state.cartItems.some(p=>p.id===product.id)){
          state.cartItems.push(cartItem)
        }
    },
    deleteProductFromCart:(state, { payload: productId })=>{
      state.cartItems = state.cartItems.filter(p => p.id !== productId);
    },
    incrementProductInCart: (state, { payload: productId }) => {
      const productToIncrement = state.cartItems.find(p => p.id === productId);
      if (productToIncrement) {
        productToIncrement.count += 1;
      }
    },
    decrementProductInCart: (state, { payload: productId }) => {
      const productToDecrement = state.cartItems.find((p) => p.id === productId);
      if (productToDecrement) {
        productToDecrement.count -= 1;
        if (productToDecrement.count === 0) {
          state.cartItems = state.cartItems.filter((p) => p.id !== productId);
        }
      }
    },
    }
})
console.log(initialState)
export const {actions,reducer}=cartSlice