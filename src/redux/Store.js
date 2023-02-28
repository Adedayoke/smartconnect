import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AdminSlice from "./slice/AdminSlice";
import AllProductsSlice from "./slice/AllProductsSlice";
import AuthSlice from "./slice/AuthSlice";
import CartSlice from "./slice/CartSlice";
import CategorySlice from "./slice/CategorySlice";
const rootReducer = combineReducers({
    cart: CartSlice,
    categories: CategorySlice,
    allproducts: AllProductsSlice,
    authentication: AuthSlice,
    admin: AdminSlice,
})

const store = configureStore({
    reducer: rootReducer
})
export default store;