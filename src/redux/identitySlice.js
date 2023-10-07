import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isAuthenticated: false,
    userName: 'None'
}

export const identitySlice = createSlice({
    name: 'identity',
    initialState,
    reducers: {
        setAuth: (state, action) =>{
            state.isAuthenticated = action.payload.isAuthenticated;
            state.userName = action.payload.userName;
        }
    },
})

// Action creators are generated for each case reducer function
export const { setAuth } = identitySlice.actions

export default identitySlice.reducer