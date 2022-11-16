import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import appService from "../../app/appService";
const initialState = {
  isLoading: false,
  chairs: [],
  count: 0,
  totalPage: 0,
};

export const listChair = createAsyncThunk(
  "chair/listchair",
  async ({ flightId, page, limit }, { rejectWithValue }) => {
    try {
      const url = `/chairs/acount/${flightId}?page=${page}&limit=${limit}`;
      const response = await appService.post(url);
      return response.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const deletedChair = createAsyncThunk(
  "chair/deletedchair",
  async ({ chairId, status }, { rejectWithValue }) => {
    try {
      const url = `/chairs/acount/${chairId}`;
      const response = await appService.put(url, { status });
      return response.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const chairSlice = createSlice({
  name: "chair",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(listChair.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(listChair.fulfilled, (state, action) => {
        state.isLoading = false;
        const { chairs, count, totalPage } = action.payload.data;
        state.chairs = chairs;
        state.count = count;
        state.totalPage = totalPage;
      })
      .addCase(listChair.rejected, (state, action) => {
        state.error = action.error.message;
      });
    builder
      .addCase(deletedChair.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deletedChair.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action.payload.data);
        toast.success("xóa người dùng thành công");
      })
      .addCase(deletedChair.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

const { actions, reducer } = chairSlice;
export const {} = actions;
export default reducer;
