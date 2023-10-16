import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isAuthenticated: false,
    userName: 'None',
    firstName: 'None',
    lastName: 'None',
    address: "None",
    city: "None",
    province: "None",
    phoneNumber: "None",
    email: "None"
}

export const identitySlice = createSlice({
    name: 'identity',
    initialState,
    reducers: {
        setAuth: (state, action) =>{
            state.isAuthenticated = action.payload.isAuthenticated;
            state.userName = action.payload.userName;
            state.firstName= 'Quang';
            state.lastName= 'Le';
            state.address="1183 Pham The Hien street, Ward 5 District 8";
            state.phoneNumber = "0702471554";
            state.email =  "thisistest@gmail.com";
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
        },
        updateProfile: (state, action) =>{
            state.firstName= action.payload.firstName;
            state.lastName= action.payload.lastName;
            state.address= action.payload.address;
            state.phoneNumber= action.payload.phoneNumber;
            state.email= action.payload.email;
        }
    },
})

// Action creators are generated for each case reducer function
export const { setAuth, logout, updateProfile } = identitySlice.actions

export default identitySlice.reducer