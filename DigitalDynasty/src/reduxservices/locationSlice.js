// slices/locationSlice.js

import {createSlice} from '@reduxjs/toolkit';

export const locationSlice = createSlice({
  name: 'location',
  initialState: {
    city: '',
    country: '',
  },
  reducers: {
    updateLocation: (state, action) => {
      state.city = action.payload.city;
      state.country = action.payload.country;
    },
  },
});

export const {updateLocation} = locationSlice.actions;

export default locationSlice.reducer;
