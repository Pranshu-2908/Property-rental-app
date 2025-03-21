import { createSlice } from "@reduxjs/toolkit";

const propertySlice = createSlice({
  name: "property",
  initialState: {
    allProps: [],
  },
  reducers: {
    //actions
    setAllProps: (state, action) => {
      state.allProps = action.payload;
    },
  },
});

export const { setAllProps } = propertySlice.actions;

export default propertySlice.reducer;
