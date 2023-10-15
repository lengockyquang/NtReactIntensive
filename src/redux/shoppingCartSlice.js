import { createSlice } from '@reduxjs/toolkit'
import _ from 'lodash';

const initialState = {
    cartItems:[]
}

export const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState,
    reducers: {
        setItem: (state, action) =>{
            let currentCartItems = [...state.cartItems];
            let isCurrentCartContainsNewItem = _.filter(currentCartItems,item => item.id === action.payload.id);
            if(isCurrentCartContainsNewItem.length)
            {
                state.cartItems = [
                    ...currentCartItems.filter(item => item.id !== action.payload.id),
                    {...isCurrentCartContainsNewItem[0], unit: isCurrentCartContainsNewItem[0].unit + 1}
                ]
            }
            else{
                state.cartItems = [...state.cartItems, action.payload];
            }
            
            localStorage.setItem("cartItems", JSON.stringify({
                data: [...state.cartItems]
            }));
        },
        removeItem: (state, action) => {
            let newCartItems = [...state.cartItems];
            newCartItems = _.filter(newCartItems, (item)=>item.id !== action.payload.id);
            state.cartItems = newCartItems;
            localStorage.setItem("cartItems", JSON.stringify({
                data: [...state.cartItems]
            }));
        },
        refresh: (state, action) =>{
            state.cartItems = [...action.payload]
            localStorage.setItem("cartItems", JSON.stringify({
                data: [...state.cartItems]
            }));
        }
    },
})

// Action creators are generated for each case reducer function
export const { setItem, removeItem, refresh } = shoppingCartSlice.actions

export default shoppingCartSlice.reducer