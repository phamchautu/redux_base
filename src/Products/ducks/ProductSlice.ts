import {createSlice} from '@reduxjs/toolkit';
import {fetchData} from './ProductThunk';
import {Product} from '../type';
export interface ProductState {
  products: Product[];
  status: 'loading' | 'finished' | 'error';
}

const initialState: ProductState = {
  products: [],
  status: 'finished',
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchData.pending, state => {
      state.status = 'loading';
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.status = 'finished';
      state.products = action.payload.products;
    });
    builder.addCase(fetchData.rejected, state => {
      state.status = 'error';
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = productsSlice.actions;

export default productsSlice.reducer;
