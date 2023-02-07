import {AppState} from '../../../@core/redux/rootReducer';
import {createSelector} from '@reduxjs/toolkit';

export const getCountState = (state: AppState) => state.counter;
export const getCount = createSelector(getCountState, state => state.value);
