import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { BASE_URL } from "../api";

const SLICE_NAME = "users";

export const fetchUsers = createAsyncThunk(
  `${SLICE_NAME}/fetchUsers`,
  async (thunkAPI, payload) => {
    const data = await fetch(`${BASE_URL}/users`).then((response) =>
      response.json()
    );

    return data;
  }
);

export const usersSlice = createSlice({
  name: SLICE_NAME,
  initialState: {
    list: [],
    loading: false,
  },
  reducers: {
    addUser: (state, { payload }) => {
      state.list.push(payload);
    },
    deleteUserById: (state, { payload }) => {
      console.log(payload);
      state.list = state.list.filter(({ id }) => id !== payload);
    },
    setAdmin: (state, { payload: { userId, isAdmin } }) => {
      const userIndex = state.list.findIndex(({ id }) => userId === id);
      console.log(userIndex, userId);
      state.list[userIndex].isAdmin = isAdmin;
    },
  },
  extraReducers: {
    [fetchUsers.pending]: (state) => {
      state.loading = true;
    },
    [fetchUsers.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.list = payload.map((item) => ({
        ...item,
        isAdmin: false,
        age: 18,
      }));
    },
  },
});

export default usersSlice.reducer;
export const { addUser, deleteUserById, setAdmin } = usersSlice.actions;
