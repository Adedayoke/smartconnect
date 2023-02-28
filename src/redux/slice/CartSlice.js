import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cart : [],
    cartNum: 0
}
const CartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        ADD_TO_CART(state, action){
            state.cart = [...state.cart, action.payload]
            if (state.cartNum >= 0){
                state.cartNum = state.cartNum + 1 
            }
        },
        REMOVE_FROM_CART(state, action){
            state.cart = state.cart.filter((product)=>product.id !== action.payload.id)
        },
        INCREASE_QUANTITY(state, action){
            state.cart.forEach(product => {
                if(product.id === action.payload){
                    product.quantity = product.quantity + 1
                }
            });
        },
        DECREASE_QUANTITY(state, action){
            state.cart.forEach(product => {
                if(product.id === action.payload){
                    product.quantity = product.quantity - 1
                }
            });
        }
    }
})
export const {ADD_TO_CART, REMOVE_FROM_CART, INCREASE_QUANTITY, DECREASE_QUANTITY} = CartSlice.actions
export const myCart = (state)=>state.cart.cart
export const myCartNum = (state)=>state.cart.cartNum

export default CartSlice.reducer