import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "../Slice/cart";
import { useDispatch } from "react-redux";
import { ProductSlice } from "../Slice/products";

export const store = configureStore({
    reducer:{
        cart: CartSlice.reducer,
        products: ProductSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

