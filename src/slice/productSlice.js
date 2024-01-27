import { createSlice } from "@reduxjs/toolkit";

const productSlice=createSlice({
    name:'',
    initialState:{
        products:[],
        loading:false,
        error:null
    },
    reducers:{
        addProducts:(state,{payload:{products}})=>{
            state.products=products
        },
    }
})
export const {actions,reducer}= productSlice