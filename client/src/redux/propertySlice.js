import { createSlice } from "@reduxjs/toolkit";

const propertySlice = createSlice({
  name: "property",
  initialState: {
    newProp: null,
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
    setNewProp: (state, action) => {
      state.newProp = action.payload;
    },
    removeProp: (state, action) => {
      state.allProps = state.allProps.filter(
        (prop) => prop._id !== action.payload
      );
      state.ownedProps = state.ownedProps.filter(
        (prop) => prop._id !== action.payload
      );
    },
  },
});

export const {
  setNewProp,
  setAllProps,
  setAllRentedProps,
  setAllOwnedProps,
  removeProp,
} = propertySlice.actions;

export default propertySlice.reducer;
