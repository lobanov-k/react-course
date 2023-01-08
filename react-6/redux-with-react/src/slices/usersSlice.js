import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    list: [],
  },
  reducers: {
    addUser: (state, payload) => {
      state.list.push(payload);
    },
    deleteUserById: (state, payload) => {
      state = state.list.filter(({ userId }) => userId !== payload);
    },
    setAdmin: (state, { id, isAdmin }) => {
      const userIndex = state.list.findIndex(({ userId }) => userId === id);
      state.list[userIndex].isAdmin = isAdmin;
    },
    // action for setAdmin:
    // dispatch(setAdmin({ id: userId, isAdmin: true/false }))
  },
});

export default usersSlice.reducer;
export const { addUser, deleteUserById, setAdmin } = usersSlice.actions;
