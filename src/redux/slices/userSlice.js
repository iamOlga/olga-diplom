import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
  userEmail: null,
  responseStatus: null
};

export const postFormData = createAsyncThunk(
  "users/fetchByIdStatus",
  async (arg) => {
    const response = axios.post(`http://127.0.0.1:8000/api/${arg.targetUrl}`, arg.body);
    const data = await response
    return data;
  }
);

export const userSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    clearUserState() {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postFormData.pending, (state) => {})
      .addCase(postFormData.fulfilled, (state, action) => {
        state.responseStatus = action.payload.status;
        state.userEmail = action.payload?.data?.email;
        localStorage.setItem("userEmail", action.payload?.data?.email);
      })
      .addCase(postFormData.rejected, (state, action) => {
        console.log(action.payload);
        state.responseStatus = action.payload;
      });
  },
});

export const { clearUserState } = userSlice.actions;

export default userSlice.reducer;
