import { createSlice } from "@reduxjs/toolkit"
const initialState ={
  cartItems:[]
}
export const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
      addProductToCart:(state,{payload:{product}})=>{
        const cartItem={product,count:1}
        if(state.cartItems.some(p=>p.id===product.id)) return
        state.cartItems.push(cartItem)
    },
    deleteProductFromCart:(state, { payload: productId })=>{
      state.cartItems = state.cartItems.filter((p) => p.product.id !== productId);
    },
    incrementProductInCart: (state, { payload: productId }) => {
      const productToIncrement = state.cartItems.find((p) => p.id === productId);
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


export const {actions,reducer}=cartSlice