import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: 0,
  sort: { name: "популярные", searchParams: "rating" },
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeCategory(state, { payload }) {
      state.category = payload;
    },
    changeSort(state, { payload }) {
      state.sort = payload;
    },
  },
});

export const { changeCategory, changeSort } = filterSlice.actions;
export default filterSlice.reducer;
