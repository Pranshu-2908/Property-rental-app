import { createSlice } from "@reduxjs/toolkit";

const propertySlice = createSlice({
  name: "property",
  initialState: {
    allProps: [],
    rentedProps: [],
  },
  reducers: {
    //actions
    setAllProps: (state, action) => {
      state.allProps = action.payload;
    },
    setAllRentedProps: (state, action) => {
      state.rentedProps = action.payload;
    },
  },
});

export const { setAllProps, setAllRentedProps } = propertySlice.actions;

export default propertySlice.reducer;
