import { createSlice } from "@reduxjs/toolkit";

const maintenanceSlice = createSlice({
  name: "maintenance",
  initialState: {
    allReq: [],
  },
  reducers: {
    //actions
    setAllReq: (state, action) => {
      state.allReq = action.payload;
    },
  },
});

export const { setAllReq } = maintenanceSlice.actions;

export default maintenanceSlice.reducer;
