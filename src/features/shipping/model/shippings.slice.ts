import { createSlice } from "@reduxjs/toolkit";
import { fetchShippings } from "./shippings.thunks";
import { ShippingItem } from "./shippings.types";

export interface ShippingState {
  items: ShippingItem[];
  total: number;
  currentCount: number;
  error: string | null;
}

const initialState: ShippingState = {
  items: [],
  total: 0,
  currentCount: 0,
  error: null,
};

export const shippingSlice = createSlice({
  name: "shipping",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchShippings.fulfilled, (state, action) => {
      const { items, total } = action.payload;
      const newItems = [...state.items, ...items];
      state.items = newItems;
      state.total = total;
      state.currentCount = newItems.length;
      state.error = null;
    });
    builder.addCase(fetchShippings.rejected, (state, action) => {
      const error = action.error;
      state.error = String(error);
      console.error(error);
    });
  },
});

export const {} = shippingSlice.actions;

export const shippingReducer = shippingSlice.reducer;
