import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import propertySlice from "./propertySlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    property: propertySlice,
  },
});

export default store;
