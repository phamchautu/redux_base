import {Store, configureStore} from '@reduxjs/toolkit';
import {RootReducers, AppState} from './rootReducer';

const store: Store<AppState | undefined> = configureStore({
  reducer: RootReducers,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
