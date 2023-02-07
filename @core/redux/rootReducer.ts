import {ReducersMapObject} from '@reduxjs/toolkit';
import CounterReducer, {
  CounterState,
} from '../../src/Counter/ducks/CounterSlice';

export interface AppState {
  counter: CounterState;
}

export const RootReducers: ReducersMapObject = {
  counter: CounterReducer,
};
