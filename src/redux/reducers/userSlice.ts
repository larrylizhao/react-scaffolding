import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface IUserState {
  name: string;
}

const initialState: IUserState = {
  name: ''
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state: IUserState, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    logout: (state: IUserState) => {
      state.name = '';
    }
  }
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
