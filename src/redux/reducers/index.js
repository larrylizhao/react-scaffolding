/*
  Reducers
 */
import counterReducer from './counterSlice';
import userReducer from './userSlice';

/*
  Actions
 */
export * from './counterSlice';

const reducer = {
  counter: counterReducer,
  user: userReducer
};

export default reducer;
