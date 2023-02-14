import {ReducersMapObject} from '@reduxjs/toolkit';
import ProductReducer, {
  ProductState,
} from '../../src/Products/ducks/ProductSlice';

export interface AppState {
  products: ProductState;
}

export const RootReducers: ReducersMapObject = {
  products: ProductReducer,
};
