import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    phoneandtablet : [],
    computing : [],
    fashion : [],
    catstate : true

}
const CategorySlice = createSlice({
    name: "categories",
    initialState: initialState,
    reducers: {
        PHONES_AND_TABLETS(state, action){
            state.phoneandtablet = action.payload
        },
        COMPUTING(state, action){
            state.computing = action.payload
        },
        FASHION(state, action){
            state.fashion = action.payload
        },
        CAT_STATE(state, action){
            state.catstate = action.payload
        },
    }
})
export const {PHONES_AND_TABLETS, COMPUTING, FASHION, CAT_STATE} = CategorySlice.actions
export const phoneandtablet = (state)=>state.categories.phoneandtablet
export const computing = (state)=>state.categories.computing
export const fashion = (state)=>state.categories.fashion
export const catstate = (state)=>state.categories.catstate

export default CategorySlice.reducer