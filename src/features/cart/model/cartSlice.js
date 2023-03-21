import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      const { payload } = action;
      if (state.length === 0) state.push(payload);

      const index = state.findIndex((prod) => prod.id === payload.id);
      if (index === -1) {
        state.push(payload);
      } else {
        state[index] = {
          ...state[index],
          amount: payload.amount,
        };
      }
    },
    deleteProductFromCart: (state, action) => {
      const { id } = action;
      const index = state.findIndex((prod) => prod.id === id);
      state.splice(index, 1);
    },
    increaseProductAmount: (state, action) => {
      const { id } = action.payload;
      const index = state.findIndex((prod) => prod.id === id);
      state[index].amount = state[index].amount + 1;
    },
    decreaseProductAmount: (state, action) => {
      console.log(action);
      const { id } = action.payload;
      console.log(id);
      const index = state.findIndex((prod) => prod.id === id);
      console.log(index);

      state[index].amount = state[index].amount - 1;
    },
  },
});
/**
 *  {
                id:30,
                title:'...',
                price:'...',
                category:'...',
                description:'...',
                image:'...',
                amount:'...',

            }
 */
export default cartSlice.reducer;

export const {
  addProductToCart,
  deleteProductFromCart,
  increaseProductAmount,
  decreaseProductAmount,
} = cartSlice.actions;
