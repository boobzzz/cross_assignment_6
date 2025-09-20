import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from './productsSlice';

const rootReducer = {
    products: productsReducer
};

export const store = configureStore({
    reducer: rootReducer
});
