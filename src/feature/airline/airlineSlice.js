import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import appService from "../../app/appService";

const initialState = {
  isLoading: false,
  airlines: {},
  count: 0,
  totalPage: 0,
};

export const createAirlines = createAsyncThunk(
  "airlines/createArilines",
  async ({ name, imageUrl }, { rejectWithValue }) => {
    try {
      const url = `/airlines`;
      const response = await appService.post(url, { name, imageUrl });
      return response.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
export const getListCreateAirlines = createAsyncThunk(
  "airlines/getListCreateAirlines",
  async ({ page, limit }, { rejectWithValue }) => {
    try {
      page = page || 1;
      limit = limit || 10;
      const url = `/airlines/acount?page=${page}&limit=${limit}`;
      const response = await appService.get(url);
      return response.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const airlineSlice = createSlice({
  name: "airlines",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createAirlines.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(createAirlines.fulfilled, (state, action) => {
        state.isLoading = false;
        const { airline } = action.payload.data;
        state.airlines = airline;
        toast.success("create airline success");
      })
      .addCase(createAirlines.rejected, (state, action) => {
        state.error = action.error.message;
      });
    builder
      .addCase(getListCreateAirlines.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getListCreateAirlines.fulfilled, (state, action) => {
        state.isLoading = false;
        const { airlines, count, totalPage } = action.payload.data;
        state.airlines = airlines;
        state.count = count;
        state.totalPage = totalPage;
      })
      .addCase(getListCreateAirlines.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

const { actions, reducer } = airlineSlice;
export const {} = actions;
export default reducer;
