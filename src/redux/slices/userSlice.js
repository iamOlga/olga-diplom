import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  userEmail: null,
  isResponseOk: null,
  accountInfo: null,
  error: null,
};

export const postFormData = createAsyncThunk(
  "users/postFormData",
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

export const getUserData = createAsyncThunk(
  "users/getUserData",
  async (arg) => {
    const response = axios.post(`http://127.0.0.1:8000/api/${arg}`);
    const data = (await response).data.user_data;
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
        state.isResponseOk = true;
        state.userEmail = action.payload?.data?.email;
        if (action.payload?.data?.email) {
          localStorage.setItem("userEmail", action.payload?.data?.email);
        }
      })
      .addCase(postFormData.rejected, (state, action) => {
        state.isResponseOk = false;
        state.error = action.payload;
      })
      .addCase(getUserData.fulfilled, (state, action) => {
        state.accountInfo = action.payload;
      })
      .addCase(getUserData.rejected, (state, action) => {
        state.isResponseOk = false;
      });
  },
});

export const { clearUserState } = userSlice.actions;

export default userSlice.reducer;
