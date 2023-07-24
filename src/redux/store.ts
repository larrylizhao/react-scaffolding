import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers';

const store = configureStore({
  reducer,
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
