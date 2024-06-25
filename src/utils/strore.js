import { configureStore } from "@reduxjs/toolkit";
import buttonSlice from "./buttonSlice";
import userSlice from "./userSlice"

const store=configureStore({
    reducer:{
        button:buttonSlice,
        user:userSlice,
    }
})

export default store;