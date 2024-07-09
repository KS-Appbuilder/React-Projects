import {createSlice} from '@reduxjs/toolkit';
const FavoriteSlice = createSlice({
  name: 'favorites',
  initialState: [],

  reducers: {
    addToFavorite(state, action) {
      state.push(action.payload);
    },
    removeFromFavorite(state, action) {
      return state.filter(item => item.id != action.payload);
    },
  },
});
export const {addToFavorite, removeFromFavorite} = FavoriteSlice.actions;
export default FavoriteSlice.reducer;
