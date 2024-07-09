// profileSlice.js
import {createSlice} from '@reduxjs/toolkit';

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    image: null,
    // Initial state for the profile image
  },
  reducers: {
    profilebuilder(state, action) {
      console.log('..............' + JSON.stringify(action.payload));

      state.image = action.payload; // Update the profile image with the payload (image URI)
    },
  },
});

export const {profilebuilder} = profileSlice.actions;
export default profileSlice.reducer;
