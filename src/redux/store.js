import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import bookingSlice from './slices/bookingSlice'


export const store = configureStore({
  reducer: {
    user: userSlice,
    booking: bookingSlice
  },
});
