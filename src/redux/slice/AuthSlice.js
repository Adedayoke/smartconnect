import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    isLoggedIn: false,
    userEmail : null,
    userId : null,
    userCode : null,
    userName: null
}
const AuthSlice = createSlice({
    name: "currentuser",
    initialState: initialState,
    reducers: {
        SET_CURRENT_USER(state, action){
            state.userEmail = action.payload.email
            state.userId = action.payload.userID
            state.userName = action.payload.userName
            state.isLoggedIn = true
        },
    }
})
export const {SET_CURRENT_USER} = AuthSlice.actions
export const selectIsLoggedIn = (state)=>state.authentication.isLoggedIn
export const selectuserEmail = (state)=>state.authentication.userEmail

export default AuthSlice.reducer