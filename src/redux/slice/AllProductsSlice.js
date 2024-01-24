import { createSlice } from "@reduxjs/toolkit";
import cardDetails from "../CardDetails";
const initialState = {
    allProducts: [...cardDetails]
}
const AllProductsSlice = createSlice({
    name: "allproducts",
    initialState: initialState,
    reducers: {
        ADD_PRODUCT(state, action){
            state.allProducts = [...state.allProducts, action.payload]
        },
        SET_PRODUCT_STATE_true(state, action){
            state.allProducts.forEach((product)=>{
                if(product.id === action.payload){
                    product.state = true
                }
            })
        },
        SET_PRODUCT_STATE_false(state, action){
            state.allProducts.forEach((product)=>{
                if(product.id === action.payload){
                    product.state = false
                }
            })
        },
    }
})
export const {ADD_PRODUCT, SET_PRODUCT_STATE_true, SET_PRODUCT_STATE_false} = AllProductsSlice.actions
export const allProducts = (state)=>state.allproducts.allProducts

export default AllProductsSlice.reducer