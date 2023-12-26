// eCommerceSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [], // Lista proizvoda
  cart: [], // Korpa za kupovinu
  totalItems: 0, // Ukupan broj stavki u korpi
  totalPrice: 0, // Ukupna cena u korpi
};

const eCommerceSlice = createSlice({
  name: "eCommerce",
  initialState,
  reducers: {
    // Dodaj proizvod u korpu
    addToCart: (state, action) => {
      const { id, name, price } = action.payload;
      const existingProduct = state.cart.find((item) => item.id === id);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push({ id, name, price, quantity: 1 });
      }

      state.totalItems += 1;
      state.totalPrice += price;
    },

    // Ukloni proizvod iz korpe
    removeFromCart: (state, action) => {
      const { id, price } = action.payload;
      const existingProductIndex = state.cart.findIndex(
        (item) => item.id === id
      );

      if (existingProductIndex !== -1) {
        const existingProduct = state.cart[existingProductIndex];
        if (existingProduct.quantity === 1) {
          state.cart.splice(existingProductIndex, 1);
        } else {
          existingProduct.quantity -= 1;
        }

        state.totalItems -= 1;
        state.totalPrice -= price;
      }
    },

    // Postavi listu proizvoda
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { addToCart, removeFromCart, setProducts } =
  eCommerceSlice.actions;
export default eCommerceSlice.reducer;
