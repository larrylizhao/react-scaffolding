/*
  Reducers
 */
import counterReducer from './counterSlice';

/*
  Actions
 */
export * from './counterSlice';

const reducer = {
  counter: counterReducer
};

export default reducer;
