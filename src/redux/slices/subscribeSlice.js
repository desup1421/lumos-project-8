import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

const API_URL = "https://lumoshive-academy-media-api.vercel.app/api";

export const subscribe = createAsyncThunk(
  "subscribe/subscribe",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/subscribe`, data);
      return response.data;
    } catch (error) {
      if (error.response) {
        return rejectWithValue(error.response.data.message);
      }
    }
  }
);

const subscribeSlice = createSlice({
  name: "subscribe",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(subscribe.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.message = "";
      state.isSuccess = false;
    }),
      builder.addCase(subscribe.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.message = action.payload;
        state.isSuccess = true;
      }),
      builder.addCase(subscribe.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.isSuccess = false;
      });
  },
});

export default subscribeSlice.reducer;
