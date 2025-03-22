import { createSlice } from "@reduxjs/toolkit";

const propertySlice = createSlice({
  name: "property",
  initialState: {
    allProps: [],
    rentedProps: [],
    ownedProps: [],
  },
  reducers: {
    //actions
    setAllProps: (state, action) => {
      state.allProps = action.payload;
    },
    setAllRentedProps: (state, action) => {
      state.rentedProps = action.payload;
    },
    setAllOwnedProps: (state, action) => {
      state.ownedProps = action.payload;
    },
  },
});

export const { setAllProps, setAllRentedProps, setAllOwnedProps } =
  propertySlice.actions;

export default propertySlice.reducer;
