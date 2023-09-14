import { configureStore } from "@reduxjs/toolkit";
import { BookReducer } from "../redux/book";

export const store = configureStore({
    reducer:{
        Book:BookReducer
    }
})