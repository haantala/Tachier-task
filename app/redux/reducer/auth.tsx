import { createSlice } from '@reduxjs/toolkit';


export const authSlice = createSlice({
  name: 'authentication',
  initialState: {
    userData: [],
  },

  reducers: {
    Login: (state:any, action:any) => {
      state.userData = action.payload;
      localStorage.setItem('UserData', JSON.stringify(action.payload));
    },
  },
});

export const { Login } = authSlice.actions;

export default authSlice.reducer;
