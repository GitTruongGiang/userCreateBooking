import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import appService from "../../app/appService";

const initialState = {
  isLoading: false,
  airlines: [],
  airline: {},
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

export const deleteAirlines = createAsyncThunk(
  "airlines/deleteairlines",
  async (airlineId, { rejectWithValue }) => {
    try {
      const url = `/airlines/${airlineId}`;
      const response = await appService.delete(url);
      return response.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const updateAirline = createAsyncThunk(
  "airlines/updateAirline",
  async ({ airlineId, nameAirline }, { rejectWithValue }) => {
    try {
      console.log(airlineId, nameAirline);
      const url = `/airlines/acount/update/${airlineId}`;
      const response = await appService.put(url, {
        name: nameAirline,
      });
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
        state.airline = airline;
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
    builder
      .addCase(deleteAirlines.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteAirlines.fulfilled, (state, action) => {
        state.isLoading = false;
        const { airlines } = action.payload.data;
        state.airlines = airlines;
        toast.success("deleted airline success");
      })
      .addCase(deleteAirlines.rejected, (state, action) => {
        state.error = action.error.message;
      });
    builder
      .addCase(updateAirline.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(updateAirline.fulfilled, (state, action) => {
        state.isLoading = false;
        const { airlines } = action.payload.data;
        state.airlines = airlines;
        toast.success("update airline success");
      })
      .addCase(updateAirline.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

const { actions, reducer } = airlineSlice;
export const {} = actions;
export default reducer;
