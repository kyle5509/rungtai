import { createSlice } from "@reduxjs/toolkit"

type TInitialState = {
    products: any[]
    product: any
    quantity: number
}

const initialState: TInitialState = {
    products: [],
    product: {},
    quantity: 1
}

export const ProductSlice = createSlice({
    name: 'products',
    initialState, 
    reducers:({
        addProducts: (state, action) => {
            state.products = action.payload
        },
        addProduct: (state, action) => {
            state.product = action.payload
        },
        updateQuantity: (state, action) => {
            state.quantity = action.payload
        },
        revertQuantity: (state) => {
            state.quantity = 1
        }
    })
}) 


export const {addProduct, addProducts, updateQuantity, revertQuantity} = ProductSlice.actions