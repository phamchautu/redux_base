import {AppState} from '../../../@core/redux/rootReducer';
import {createSelector} from '@reduxjs/toolkit';

export const getProductState = (state: AppState) => state.counter;
export const getProducts = createSelector(
  getProductState,
  state => state.products,
);
