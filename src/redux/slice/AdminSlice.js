import { createSlice } from "@reduxjs/toolkit";
import cardDetails from "../CardDetails";
const initialState = {
    salesdata: [{
        id: 1,
        year: 2016,
        userGain: 80000,
        userLost: 823
    },
    {
        id: 2,
        year: 2017,
        userGain: 45677,
        userLost: 345
    },
    {
        id: 3,
        year: 2018,
        userGain: 78888,
        userLost: 555
    },
    {
        id: 4,
        year: 2019,
        userGain: 90000,
        userLost: 4555
    },
    {
        id: 5,
        year: 2020,
        userGain: 4300,
        userLost: 234
    }],
    dashboardActive: false,
    productsActive: false,
    orderActive: false,
    statisticsActive: false,
}
const AdminSlice = createSlice({
    name: "admin",
    initialState: initialState,
    reducers: {
        DASHBOARD(state, action){
            state.dashboardActive = true
            state.productsActive = false
            state.orderActive = false
            state.statisticsActive = false
        },
        PRODUCTS(state, action){
            state.dashboardActive = false
            state.productsActive = true
            state.orderActive = false
            state.statisticsActive = false
        },
        ORDER(state, action){
            state.dashboardActive = false
            state.productsActive = false
            state.orderActive = true
            state.statisticsActive = false
        },
        STATISTICS(state, action){
            state.dashboardActive = false
            state.productsActive = false
            state.orderActive = false
            state.statisticsActive = true
        }
    }
})
export const {DASHBOARD, PRODUCTS, ORDER, STATISTICS} = AdminSlice.actions
export const salesdata = (state)=>state.admin.salesdata;
export const dashboardActive = (state)=>state.admin.dashboardActive;
export const productsActive = (state)=>state.admin.productsActive;
export const orderActive = (state)=>state.admin.orderActive;
export const statisticsActive = (state)=>state.admin.statisticsActive;

export default AdminSlice.reducer