import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchData=createAsyncThunk('server/fetchData',async (api_point)=>{
    try{
        const response = await fetch(api_point)
        const data = await response.json()
        return data
    }catch(error){
        console.error('Error fetching data: ',error)
        throw error
    }
}
)
export const serverSlice=createSlice({
     name:'server',
     initialState:{
        data:null,
        loading:false,
        error:null
     },
     reducers:{},
     extraReducers:(builder)=>{
        builder
        .addCase(fetchData.pending,(state)=>{
            state.loading=true;
            state.error=null
        })
        .addCase(fetchData.fulfilled,(state,action)=>{
            state.loading=false
            state.data=action.payload
        })
        .addCase(fetchData.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.error.code+" "+action.error.message
        })
     }
})
export const {actions,reducer}= serverSlice