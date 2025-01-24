import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../helper/axiosHelper";
import { BASE_URL } from "../../constants";

const initialState = {
  isLoading: false,
  videos: {
    docs: [],
  },
};

export const getAllVideos = createAsyncThunk(
  "getAllVideos",
  async ({ userId, sortBy, sortType, limit, page, query }) => {
    try {
      const url = new URL(`${BASE_URL}/video`);

      if (userId) url.searchParams.set("userId", userId);
      if (limit) url.searchParams.set("limit", limit);
      if (page) url.searchParams.set("page", page);
      if (query) url.searchParams.set("query", query);
      if (sortBy) url.searchParams.set("sortBy", sortBy);
      if (sortType) url.searchParams.set("sortType", sortType);

      const response = await axiosInstance.get(url);
      console.log(response.data);

      return response.data;
    } catch (error) {
      console.log("Error fetching all data", error);
    }
  }
);

const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllVideos.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllVideos.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log("PPAAAYYLOAD", action.payload);

        state.videos.docs = [...action.payload.data.docs];
      });
  },
});

export default videoSlice.reducer;
