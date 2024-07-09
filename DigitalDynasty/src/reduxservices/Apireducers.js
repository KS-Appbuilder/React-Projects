import {createSlice} from '@reduxjs/toolkit';
import {getProducts} from './Apiactions';

const getApiWithAxios = createSlice({
  name: 'CallApi',
  initialState: {
    data: null,
    isloader: false,
    isError: null,
  },

  extraReducers: builder => {
    builder.addCase(getProducts.pending, (state, action) => {
      state.isloader = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.data = action.payload;

      console.log('0000000', state.data);

      state.isloader = false;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.isError = true;
      state.isloader = false;
    });
  },
});

export default getApiWithAxios.reducer;
