import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import appService from "../../app/appService";
import { cloudinaryUpload } from "../../utils.js/cloudinaryUpload";

const initialState = {
  isloading: false,
  updateUser: [],
  message: "",
};

export const updateUserProfile = createAsyncThunk(
  "user/updateUser",
  async (
    {
      userId,
      name,
      avatarUrl,
      coverUrl,
      aboutMe,
      city,
      country,
      facebookLink,
      instagramLink,
      linkedinLink,
      twitterLink,
    },
    { rejectWithValue, dispatch }
  ) => {
    try {
      const data = {
        name,
        coverUrl,
        aboutMe,
        city,
        country,
        avatarUrl,
        facebookLink,
        instagramLink,
        linkedinLink,
        twitterLink,
      };
      if (avatarUrl instanceof File) {
        const ImageUrl = await cloudinaryUpload(avatarUrl);
        data.avatarUrl = ImageUrl;
      }
      const response = await appService.put(`/users/${userId}`, data);
      return response.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateUserProfile.pending, (state, action) => {
        state.isloading = true;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.isloading = false;
        const { user } = action.payload.data;
        state.updateUser = user;
        toast.success("Update Profile successfully ");
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

const { actions, reducer } = userSlice;
export const {} = actions;
export default reducer;
