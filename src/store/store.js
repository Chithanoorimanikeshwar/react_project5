import { configureStore } from "@reduxjs/toolkit";
import courses from "./reducers/course";
import userEnquires from './reducers/userqueries'
export const store=configureStore({
    reducer:{
        courses,
        userEnquires
    }
})

