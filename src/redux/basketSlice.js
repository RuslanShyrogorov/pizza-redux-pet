import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
};

const findPizzaInBasket = (arr, id) => {
  return arr.find((item) => item.id === id);
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItem(state, { payload }) {
      const findItem = findPizzaInBasket(state.items, payload.id);

      if (findItem) {
        findItem.quantity += 1;
      } else {
        state.items.push({ ...payload, quantity: 1 });
      }

      state.totalPrice = state.items.reduce((acc, item) => {
        return acc + item.price * item.quantity;
      }, 0);
    },
    quantityItemMinus(state, { payload }) {
      const findItem = findPizzaInBasket(state.items, payload);

      if (findItem) {
        findItem.quantity -= 1;
      }

      state.totalPrice = state.totalPrice - findItem.price;
    },
    quantityItemPlus(state, { payload }) {
      const findItem = findPizzaInBasket(state.items, payload);

      if (findItem) {
        findItem.quantity += 1;
      }
      state.totalPrice = state.totalPrice + findItem.price;
    },
    removeItem(state, { payload }) {
      const findItem = findPizzaInBasket(state.items, payload);

      if (findItem) {
        state.totalPrice =
          state.totalPrice - findItem.price * findItem.quantity;
      }

      state.items = state.items.filter((item) => item.id !== payload);
    },
    clearBasket(state) {
      state.items = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;
    },
  },
});

export const {
  addItem,
  removeItem,
  clearBasket,
  quantityItemMinus,
  quantityItemPlus,
} = basketSlice.actions;

export default basketSlice.reducer;
