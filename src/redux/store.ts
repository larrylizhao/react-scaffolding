import { configureStore, type ThunkDispatch } from '@reduxjs/toolkit';
import reducer from './reducers';
import { baseApi } from '@Api/base';
import { setupListeners } from '@reduxjs/toolkit/dist/query/react';

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
  preloadedState: { counter: { value: 1 } },
  devTools:
    process.env.NODE_ENV !== 'production'
      ? { trace: true, traceLimit: 25 }
      : false
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch as ThunkDispatch<any, any, any>);
