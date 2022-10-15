import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import appService from "../../app/appService";

const initialState = {
  isLoading: false,
  planes: {},
};

export const createPlane = createAsyncThunk(
  "plane/createPlane",
  async ({ namePlanes, nameAirlines, codePlane }, { rejectWithValue }) => {
    try {
      const url = `/planes`;
      const response = await appService.post(url, {
        name: namePlanes,
        nameAirlines,
        codePlane,
      });
      return response.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const planeSlice = createSlice({
  name: "plane",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createPlane.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(createPlane.fulfilled, (state, action) => {
        state.isLoading = false;
        const { plane } = action.payload.data;
        state.planes = plane;
        toast.success("create plane success");
      })
      .addCase(createPlane.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

const { actions, reducer } = planeSlice;
export const {} = actions;
export default reducer;
