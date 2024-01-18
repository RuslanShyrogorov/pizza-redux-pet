import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_PIZZA_URL;
// const MOCKAPI = process.env.REACT_APP_PIZZA_MOCKAPI;

export const getAllPizzas = createAsyncThunk(
  "pizza/getAllPizzas",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/items`);
      // const response = await axios.get(MOCKAPI);
      // const response = await axios.get("http://localhost:3001/items");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllPizzas.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllPizzas.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(getAllPizzas.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default pizzaSlice.reducer;
