import { createSlice } from '@reduxjs/toolkit';


export const websocketSlice = createSlice({
  name: 'common',
  initialState: {
    webSocketData: null,
  },

  reducers: {
    Login: (state:any, action:any) => {
      state.webSocketData    = action.payload;
    },
  },
});

export const { WebSocket } : any= websocketSlice.actions;

export default websocketSlice.reducer;
