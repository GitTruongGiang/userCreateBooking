import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import appService from "../../app/appService";

const initialState = {
  isLoading: false,
  flights: {},
  count: 0,
  totalPage: 0,
};

export const createFlight = createAsyncThunk(
  "flight/createflight",
  async (
    { nameAirlines, planeId, from, to, fromDay, timeFrom, timeTo, price },
    { rejectWithValue }
  ) => {
    try {
      const url = `/flights`;
      const response = await appService.post(url, {
        nameAirlines,
        planeId,
        from,
        to,
        fromDay,
        timeFrom,
        timeTo,
        price,
      });
      return response.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const getListCreateFlight = createAsyncThunk(
  "flight/getListCreateFlight",
  async ({ page, limit }, { rejectWithValue }) => {
    try {
      page = page || 1;
      limit = limit || 10;
      const url = `/flights/acount?page=${page}&limit=${limit}`;
      const response = await appService.get(url);
      return response.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const updateFlight = createAsyncThunk(
  "flight/updateFlight",
  async (
    { fromDay, from, to, timeFrom, timeTo, price, flightId },
    { rejectWithValue }
  ) => {
    try {
      const url = `/flights/${flightId}`;
      const response = await appService.put(url, {
        fromDay,
        from,
        to,
        timeFrom,
        timeTo,
        price,
      });
      return response.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const deletedFlight = createAsyncThunk(
  "flight/deletedflight",
  async (flightId, { rejectWithValue }) => {
    try {
      const url = `/flights/${flightId}`;
      const response = await appService.delete(url);
      return response.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const flightSlice = createSlice({
  name: "flight",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createFlight.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(createFlight.fulfilled, (state, action) => {
        state.isLoading = false;
        const { flight } = action.payload.data;
        state.flights = flight;
        toast.success("create flight success");
      })
      .addCase(createFlight.rejected, (state, action) => {
        state.error = action.error.message;
      });
    builder
      .addCase(getListCreateFlight.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getListCreateFlight.fulfilled, (state, action) => {
        state.isLoading = false;
        const { flights, count, totalPage } = action.payload.data;
        state.flights = flights;
        state.count = count;
        state.totalPage = totalPage;
      })
      .addCase(getListCreateFlight.rejected, (state, action) => {
        state.error = action.error.message;
      });
    builder
      .addCase(updateFlight.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(updateFlight.fulfilled, (state, action) => {
        state.isLoading = false;
        toast.success("update flight success");
      })
      .addCase(updateFlight.rejected, (state, action) => {
        state.error = action.error.message;
      });
    builder
      .addCase(deletedFlight.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deletedFlight.fulfilled, (state, action) => {
        state.isLoading = false;
        const { flights } = action.payload.data;
        state.flights = flights;
        toast.success("deleted flight success");
      })
      .addCase(deletedFlight.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

const { actions, reducer } = flightSlice;
export const {} = actions;
export default reducer;
