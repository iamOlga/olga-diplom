import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isResponseOk: null,
  testResponse: null,
  reviewsData: [],

  error: null,
};

export const postTestData = createAsyncThunk(
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
    return data.data;
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

export const testsSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    clearUserState() {
      return initialState;
    },
    setResponseStatus(state, action) {
      state.isResponseOk = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postTestData.pending, (state) => {})
      .addCase(postTestData.fulfilled, (state, action) => {
        state.isResponseOk = true;
        state.testResponse = action.payload
      })
      .addCase(postTestData.rejected, (state, action) => {
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

export const { clearUserState, setResponseStatus } = testsSlice.actions;

export default testsSlice.reducer;
