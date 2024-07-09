import {createSlice} from '@reduxjs/toolkit';

const SignupAction = createSlice({
  name: 'authentication', // Change name to 'auth' for clarity
  initialState: {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    contactNumber: '',
  }, // Initialize as an empty array
  reducers: {
    signup(state, action) {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.confirmPassword = action.payload.confirmPassword;
      state.contactNumber = action.payload.contactNumber;
    },
  },
});

export const {signup} = SignupAction.actions;
export default SignupAction.reducer;
