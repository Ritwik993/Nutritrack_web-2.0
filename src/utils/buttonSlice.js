import { createSlice } from "@reduxjs/toolkit";

const buttonSlice=createSlice({
    name:"button",
    initialState:{
        isLogin:false,
    },
    reducers:{
        toggleButton:(state)=>{
            state.isLogin=!state.isLogin;
        }
    }
});
export const {toggleButton}=buttonSlice.actions;
export default buttonSlice.reducer;