import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUserQueries=createAsyncThunk('userEnquires/fetchUserQueries',async()=>{

    const response=await axios.get("http://localhost:3000/enquires")
    return response.data

    
})

const userEnquires=createSlice({
    name:"userEnquires",
    initialState:{
        dataAvailable:false,
        userQueries:[]
    },
    reducers:{
       addItem:(state,action)=>{
            state.userQueries=[...state.userQueries,action.payload]
       }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchUserQueries.fulfilled,(state,action)=>{
            console.log(action.payload)
            state.userQueries=action.payload;
            state.dataAvailable=true
        })
    }
})

export const getQueryById=(courseId)=>(state)=>state.userEnquires.userQueries.find((item)=>item.id===courseId)

export default userEnquires.reducer
export const {addItem}=userEnquires.actions
export {fetchUserQueries}