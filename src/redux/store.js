import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './storeSlice'

// defining store 

export const store=configureStore({
    // configure different reducers as key value pairs 
    reducer:{
        counterReducer
    }
})