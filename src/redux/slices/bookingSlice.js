import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isResponseOk: null,
  toursData: [],
  error: null,
};

export const postBookingData = createAsyncThunk(
  "booking/postBookingData",
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

export const getToursData = createAsyncThunk("booking/getToursData", async (arg) => {
  const response = axios.get(`http://127.0.0.1:8000/api/${arg}`);
  const data = (await response).data.user_data;
  return data;
});

export const bookingSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    clearUserState() {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postBookingData.pending, (state) => {})
      .addCase(postBookingData.fulfilled, (state, action) => {
        state.isResponseOk = true;
      })
      .addCase(postBookingData.rejected, (state, action) => {
        state.isResponseOk = false;
        state.error = action.payload;
      })
      .addCase(getToursData.fulfilled, (state, action) => {
        state.toursData = action.payload;
      })
      .addCase(getToursData.rejected, (state, action) => {
        state.isResponseOk = false;
      });
  },
});

export const { clearUserState } = bookingSlice.actions;

export default bookingSlice.reducer;
