import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { BASE_URL } from "../api";

const SLICE_NAME = "users";

export const fetchUsers = createAsyncThunk(
  `${SLICE_NAME}/fetchUsers`,
  async () => {
    const data = await fetch(`${BASE_URL}/users`).then((response) =>
      response.json()
    );

    return data;
  }
);

export const addUser = createAsyncThunk(
  `${SLICE_NAME}/addUser`,
  async (payload) => {
    const data = await fetch(`${BASE_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }).then((res) => res.json());

    return data;
  }
);

export const updateUser = createAsyncThunk(
  `${SLICE_NAME}/updateUser`,
  async (payload) => {
    const data = await fetch(`${BASE_URL}/users`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }).then((res) => res.json());

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
    deleteUserById: (state, { payload }) => {
      console.log(payload);
      state.list = state.list.filter(({ id }) => id !== payload);
    },
    setAdmin: (state, { payload: { userId, isAdmin } }) => {
      const userIndex = state.list.findIndex(({ id }) => userId === id);
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
      }));
    },
    [addUser.fulfilled]: (state, { payload }) => {
      state.list.push(payload);
    },
    [updateUser.fulfilled]: (state, { payload }) => {
      const userIndex = state.list.findIndex(({ id }) => payload.id === id);
      state.list[userIndex] = payload;
    },
  },
});

export default usersSlice.reducer;
export const { deleteUserById, setAdmin } = usersSlice.actions;
