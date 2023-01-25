import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { BASE_URL } from "../api";

const SLICE_NAME = "labels";

export const addLabel = createAsyncThunk(
  `${SLICE_NAME}/addLabel`,
  async (payload) => {
    const data = await fetch(`${BASE_URL}/labels`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }).then((res) => res.json());

    return data;
  }
);

export const labelsSlice = createSlice({
  name: SLICE_NAME,
  initialState: {
    list: [
      { id: "1", color: "red", text: "work" },
      { id: "2", color: "teal", text: "shopping list" },
    ],
    loading: false,
  },
  extraReducers: {},
});

export default labelsSlice.reducer;
