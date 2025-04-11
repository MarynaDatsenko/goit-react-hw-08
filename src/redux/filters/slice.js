import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    changeNameFilter(state, action) {
      state.name = action.payload || "";
    },
  },
});

export const { changeNameFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
