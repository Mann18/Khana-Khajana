import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      const indexToRemove = state.items.findIndex(
        (item) => item.id === action.payload
      );
      if (indexToRemove !== -1) {
        state.items.splice(indexToRemove, 1);
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});
export const { addItem, clearCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
