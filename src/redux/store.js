import { configureStore } from "@reduxjs/toolkit";
import pizzaSlice from "./pizzaSlice";
import basketSlice from "./basketSlice";
import filterSlice from "./filterSlice";

export const store = configureStore({
  reducer: {
    pizza: pizzaSlice,
    basket: basketSlice,
    filter: filterSlice,
  },
});
