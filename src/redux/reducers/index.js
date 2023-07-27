/*
  Reducers
 */
import counterReducer from './counterSlice';
import userReducer from './userSlice';
import { baseApi } from '@Api/base';

/*
  Actions
 */
export * from './counterSlice';
export * from './userSlice';

const reducer = {
  counter: counterReducer,
  user: userReducer,
  [baseApi.reducerPath]: baseApi.reducer
};

export default reducer;
