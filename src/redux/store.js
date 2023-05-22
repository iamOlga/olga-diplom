import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import bookingSlice from './slices/bookingSlice'
import reviewsSlice from "./slices/reviewsSlice";
import testSlice from "./slices/testSlice";
import adminSlice from "./slices/adminSlice";


export const store = configureStore({
  reducer: {
    user: userSlice,
    booking: bookingSlice,
    reviews: reviewsSlice,
    test: testSlice,
    admin: adminSlice
  },
});
