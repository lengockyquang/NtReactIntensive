import { configureStore } from '@reduxjs/toolkit'
import identityReducer from './identitySlice';
import shoppingCartReducer from './shoppingCartSlice';

export const store = configureStore({
  reducer: {
    identity: identityReducer,
    shoppingCart: shoppingCartReducer
  },
});