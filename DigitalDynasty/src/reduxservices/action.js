import {createSlice} from '@reduxjs/toolkit';

const CartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart(state, action) {
      let myindex = -1;
      state.map((item, index) => {
        if (item.id == action.payload.id) {
          myindex = index;
          console.log(myindex);
        }
      });
      if (myindex == -1) {
        state.push({
          id: action.payload.id,
          title: action.payload.title,
          description: action.payload.description,
          subtitle: action.payload.subtitle,

          price: action.payload.price,

          image: action.payload.image,
          qty: action.payload.qty + 1,
        });
      } else {
        state[myindex].qty = state[myindex].qty + 1;
      }
    },
    increaseQty(state, action) {
      let myindex = -1;
      state.map((item, index) => {
        if (item.id == action.payload) {
          myindex = index;
        }
      });
      if (myindex == -1) {
      } else {
        state[myindex].qty = state[myindex].qty + 1;
      }
    },
    decreaseQty(state, action) {
      let myindex = -1;
      state.map((item, index) => {
        if (item.id == action.payload) {
          myindex = index;
        }
      });
      if (myindex == -1) {
      } else {
        state[myindex].qty = state[myindex].qty - 1;
      }
    },

    removeFromCart(state, action) {
      return state.filter((item, index) => index !== action.payload);
    },
  },
});

export const {addToCart, removeFromCart, increaseQty, decreaseQty} =
  CartSlice.actions;

export default CartSlice.reducer;
