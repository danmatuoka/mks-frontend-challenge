import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

interface ICartProducts {
  id: number;
  brand: string;
  name: string;
  quantity?: number;
  price: number;
  photo: string;
  description: string;
}

const initialState: { cartProducts: ICartProducts[] | [] } = {
  cartProducts: [],
};

export const cartSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, action: PayloadAction<ICartProducts>) => {
      const productExists = state.cartProducts.find(
        (product) => product.id === action.payload.id
      );

      productExists
        ? productExists.quantity!++
        : (state.cartProducts = [
            ...state.cartProducts,
            { ...action.payload, quantity: 1 },
          ]);
    },
    removeProducts: (state, action: PayloadAction<number>): any => {
      const productExists = state.cartProducts.find(
        (product) => product.id === action.payload
      );

      if (productExists!.quantity! > 1) {
        productExists!.quantity!--;
      } else {
        state.cartProducts = state.cartProducts.filter(
          (elem) => elem.id !== action.payload
        );
      }
    },

    removeAllProducts: (state, action: PayloadAction<number>) => {
      state.cartProducts = state.cartProducts.filter(
        (elem) => elem.id !== action.payload
      );
    },
  },
});

export const { addProducts, removeProducts, removeAllProducts } =
  cartSlice.actions;

export default cartSlice.reducer;
