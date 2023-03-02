import { configureStore } from '@reduxjs/toolkit';
import authSlice from './reducers/auth.reducer';
import regisSlice from './reducers/regis.reducer'
export const store = configureStore({
    reducer: {
        regis: regisSlice,
        auth: authSlice
    }
})
