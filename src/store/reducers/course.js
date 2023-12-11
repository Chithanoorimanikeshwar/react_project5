import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const getCourses=createAsyncThunk('courses/fetchcourses',async()=>{
    console.log('data is fetching.....')
    const response=await fetch("http://localhost:3000/courses");
    const data=await response.json();
    return data
})


const courses=createSlice({
    name:"courses",
    initialState:{
        courses:[],
        dataLoaded:false,
    },
    reducers:{
        },
    extraReducers: (builder) => {
        builder
          .addCase(getCourses.fulfilled, (state, action) => {
            state.courses = [...state.courses, ...action.payload];
            state.dataLoaded = true;
          });
      },
})

export {getCourses}

 export const selectItemById = (courseId) => (state) =>state.courses.courses.find((item) => item.courseId===courseId);


export default courses.reducer