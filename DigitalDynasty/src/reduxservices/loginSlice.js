// loginSlice.js
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  email: '',
  password: '',
  // other login fields
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLoginData(state, action) {
      return {...state, ...action.payload};
    },
    setLogoutData(state, action) {
      return initialState; // Clear login state
    },
  },
});

export const {setLoginData, setLogoutData} = loginSlice.actions;
export default loginSlice.reducer;
