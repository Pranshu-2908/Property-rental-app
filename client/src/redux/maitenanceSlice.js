import { createSlice } from "@reduxjs/toolkit";

const maintenanceSlice = createSlice({
  name: "maintenance",
  initialState: {
    newReq: null,
    allReq: [],
  },
  reducers: {
    //actions
    setAllReq: (state, action) => {
      state.allReq = action.payload;
    },
    setNewReq: (state, action) => {
      state.newReq = action.payload;
    },
    updateMaintenanceStatus: (state, action) => {
      const { id, status } = action.payload;
      state.allReq = state.allReq.map((req) =>
        req._id === id ? { ...req, status } : req
      );
    },
  },
});

export const { setAllReq, setNewReq, updateMaintenanceStatus } =
  maintenanceSlice.actions;

export default maintenanceSlice.reducer;
