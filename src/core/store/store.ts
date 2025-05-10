import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./authSlice";
import { invoiceSlice } from "./invoiceSlice";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    invoice: invoiceSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
