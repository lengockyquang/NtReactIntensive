import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isAuthenticated: false,
    userName: 'None',
    firstName: 'None',
    lastName: 'None',
    address: "None",
    city: "None",
    province: "None",
    phoneNumber: "None"
}

export const identitySlice = createSlice({
    name: 'identity',
    initialState,
    reducers: {
        setAuth: (state, action) =>{
            state.isAuthenticated = action.payload.isAuthenticated;
            state.userName = action.payload.userName;
        },
        logout : (state, action)=>{
            state.isAuthenticated = false;
            state.userName= 'None';
            state.firstName= 'None';
            state.lastName= 'None';
            state.address= "None";
            state.city= "None";
            state.province= "None";
            state.phoneNumber= "None";
        }
    },
})

// Action creators are generated for each case reducer function
export const { setAuth, logout } = identitySlice.actions

export default identitySlice.reducer