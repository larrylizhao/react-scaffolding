/*
  Reducers
 */
import userReducer from './userSlice';
import { baseApi } from '@Api/base';

/*
  Actions
 */
export * from './userSlice';

const reducer = {
  user: userReducer,
  [baseApi.reducerPath]: baseApi.reducer
};

export default reducer;
