import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface ICounterState {
  value: number;
}

// Define the initial state using that type
const initialState: ICounterState = {
  value: 0
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state: ICounterState) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library
      state.value += 1;
    },
    decrement: (state: ICounterState) => {
      state.value -= 1;
    },
    incrementByAmount: (
      state: ICounterState,
      action: PayloadAction<number>
    ) => {
      state.value += action.payload;
    }
  }
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
