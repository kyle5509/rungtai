import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  cart: [],
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const quantity = parseInt(product.quantity)
      const productExists = state.cart.find(el => el.id == product.id)
      if(productExists){
        productExists.quantity += quantity 
      }else{
        state.cart.push({...product, quantity})
      }
    },
    removeFromCart:(state, action) => {
      const id  = action.payload
      console.log(id)
      const newProducts = state.cart.filter(el => el.id !== id)
      state.cart = newProducts
    },
    updateQuantity: (state, action) => {
      const {id, quantity} = action.payload
      const newProducts = state.cart.map((product) => {
        if(product.id === id){
          return {
            ...product, 
            quantity
          }
        }
        return product
      })
      state.cart = newProducts
    }
  },
});

export const cartItems = (state: any) => state.cart;
export const cartTotalQty = (state: any) => {
  return state.cart.cart.reduce((total, item) => total + item.quantity , 0);
};
export const cartSum = (state: any) => {
  const sum = state.cart.cart.reduce((total: number, item: any) => total + (item.quantity * item.price * 1700), 0);
  return sum.toLocaleString()
};

export const { addToCart, removeFromCart, updateQuantity } = CartSlice.actions;
