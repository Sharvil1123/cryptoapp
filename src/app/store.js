import { configureStore } from "@reduxjs/toolkit";
import { cryptoAPI } from "../services/cryptoAPI";

export default configureStore({
    reducer: {
        [cryptoAPI.reducerPath] : cryptoAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(cryptoAPI.middleware),
    
});