// store.js
import { configureStore } from '@reduxjs/toolkit';
import eCommerceReducer from './path/to/eCommerceSlice';

const store = configureStore({
  reducer: {
    eCommerce: eCommerceReducer,
    // Dodajte ostale slice-ove ovdje ako ih ima
  },
});

export default store;
