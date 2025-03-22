import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import propertySlice from "./propertySlice";
import maintenanceSlice from "./maitenanceSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    property: propertySlice,
    maintenance: maintenanceSlice,
  },
});

export default store;
