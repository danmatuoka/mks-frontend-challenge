import { createSlice } from "@reduxjs/toolkit";

const initialState: { isOpen: boolean } = {
  isOpen: false,
};

const cartSlice = createSlice({
  name: "isOpen",
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = !state.isOpen;
    },
    openBuyBtn: (state) => {
      state.isOpen = true;
    },
  },
});

export const { open, openBuyBtn } = cartSlice.actions;
export default cartSlice.reducer;
