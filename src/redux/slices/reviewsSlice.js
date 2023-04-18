import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isResponseOk: null,
  reviewsData: [],

  error: null,
};

export const postReviewData = createAsyncThunk(
  "reviews/postReviewData",
  async (arg, { rejectWithValue }) => {
    const response = axios
      .post(`http://127.0.0.1:8000/api/${arg.targetUrl}`, arg.body)
      .catch((err) => {
        if (err.response) {
          return rejectWithValue(err.response.data);
        }
      });
    const data = await response;
    return data;
  }
);

export const getReviewsData = createAsyncThunk(
  "reviews/getReviewsData",
  async (arg) => {
    const response = axios.get(`http://127.0.0.1:8000/api/get-reviews`);
    const data = await response;
    return data.data.reviews_users;
  }
);

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    clearUserState() {
      return initialState;
    },
    setResponseStatus(state, action) {
      state.isResponseOk = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(postReviewData.pending, (state) => {})
      .addCase(postReviewData.fulfilled, (state, action) => {
        state.isResponseOk = true;
      })
      .addCase(postReviewData.rejected, (state, action) => {
        state.isResponseOk = false;
        state.error = action.payload;
      })
      .addCase(getReviewsData.fulfilled, (state, action) => {
        state.reviewsData = action.payload;
      })
      .addCase(getReviewsData.rejected, (state, action) => {
        state.isResponseOk = false;
      });
  },
});

export const { clearUserState, setResponseStatus } = reviewsSlice.actions;

export default reviewsSlice.reducer;
