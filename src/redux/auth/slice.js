import { createSlice } from "@reduxjs/toolkit"
import { apiLogin, apiLogout, apiRefreshUser, apiRegister } from "./operations"

const initial_state = {
    user: {
        name: null,
        email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    error: null
}

const authSlice = createSlice({
    name: "auth",
    initialState: initial_state,
    reducers: {},
    extraReducers: builder => builder
    .addCase(apiRegister.pending, state => {
        state.error = null
    })
    .addCase(apiRegister.fulfilled, (state, action) => {
        state.isLoggedIn = true,
        state.token = action.payload.token,
        state.user = action.payload.user
    })
    .addCase(apiRegister.rejected, (state, action) => {
        state.error = action.payload
    })


    .addCase(apiLogin.pending, state => {
        state.error = null
    })
    .addCase(apiLogin.fulfilled, (state, action) => {
        state.isLoggedIn = true,
        state.token = action.payload.token,
        state.user = action.payload.user
    })
    .addCase(apiLogin.rejected, (state, action) => {
        state.error = action.payload
    })


    .addCase(apiRefreshUser.pending, state => {
        state.error = null
        state.isRefreshing = true
    })
    .addCase(apiRefreshUser.fulfilled, (state, action) => {
        state.isRefreshing = false
        state.user = action.payload
        state.isLoggedIn = true
    })
    .addCase(apiRefreshUser.rejected, (state, action) => {
        state.error = action.payload
        state.isRefreshing = false
    })


    .addCase(apiLogout.pending, state => {
        state.error = null
    })
    .addCase(apiLogout.fulfilled, () => {
        return initial_state
    })
    .addCase(apiLogout.rejected, (state, action) => {
        state.error = action.payload
    })
})

export const authReducer = authSlice.reducer