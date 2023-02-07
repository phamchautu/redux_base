import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import {fetchData} from './CounterThunk';

export interface CounterState {
  value: number;
  status: 'loading' | 'finished' | 'error';
}

const initialState: CounterState = {
  value: 0,
  // eslint-disable-next-line no-bitwise
  status: 'finished',
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state: CounterState) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value++;
    },
    decrement: (state: CounterState) => {
      state.value--;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchData.pending, (state, action) => {
      console.log(action.payload);
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      console.log('Done - -- ');
      console.log(action.payload);
    });
  },
});

// Action creators are generated for each case reducer function
export const {increment, decrement, incrementByAmount} = counterSlice.actions;

export default counterSlice.reducer;
