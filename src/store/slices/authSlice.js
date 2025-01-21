import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../helper/axiosHelper";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const initialState = {
  status: false,
  userData: null,
  isLoading: false,
  error: "",
};

export const login = createAsyncThunk(
  "user/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/users/login", credentials);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

export const getCurrentUser = createAsyncThunk("/user/current", async () => {
  try {
    console.log("called method");

    const response = await axiosInstance.get("/users/current-user");
    console.log("RESPONSE THUNK", response);

    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const registerUser = createAsyncThunk(
  "/user/register",
  async (userDetails, { rejectWithValue }) => {
    const formData = new FormData();

    try {
      if (userDetails) {
        console.log("HERE DATA ", userDetails);
        formData.append("userName", userDetails.userName);
        formData.append("email", userDetails.email);
        formData.append("fullName", userDetails.fullName);
        formData.append("password", userDetails.password);
        formData.append("coverImage", userDetails.coverImage[0]);
        formData.append("avatar", userDetails.avatar[0]);

        console.log("FFFOOORRRMMMMMMMMMMM", formData.values());

        //  formData.append("files", data.picture[0]);
        //  data = { ...data, picture: data.picture[0].name };
        //  formData.append("recipe", JSON.stringify(data));

        userDetails = {
          ...userDetails,
          coverImage: userDetails.coverImage[0].name,
          avatar: userDetails.avatar[0].name,
        };
        for (const value of formData.values()) {
          console.log(value);
        }

        // formData.append("user", JSON.stringify(userDetails));
        const response = await axiosInstance.post("/users/register", formData);
        console.log("RETURNED RESPONSE", response);

        // return formData;
        return response.data;
      }
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log("RES DATAAAAA", action.payload);

        state.userData = action.payload;
      })
      .addCase(getCurrentUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCurrentUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log("FULLFILLLLLEEEDDDDD", action.payload);
        state.userData = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
