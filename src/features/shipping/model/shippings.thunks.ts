import { createAsyncThunk } from "@reduxjs/toolkit";
import { loadShippings } from "../api/shippings";

interface Args {
  limit: number;
  offset: number;
}

export const fetchShippings = createAsyncThunk(
  "shippings/fetchShippings",
  async ({ limit, offset }: Args) => {
    const response = await loadShippings(limit, offset);
    // if (offset > 40) throw new Error("test error");

    return response;
  },
);
