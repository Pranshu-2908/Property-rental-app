import { createSlice } from "@reduxjs/toolkit";

const propertySlice = createSlice({
  name: "property",
  initialState: {
    singleProp: null,
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
    setSingleProp: (state, action) => {
      state.singleProp = action.payload;
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
  setSingleProp,
} = propertySlice.actions;

export default propertySlice.reducer;
