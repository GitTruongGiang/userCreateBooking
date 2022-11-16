import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import appService from "../../app/appService";

const initialState = {
  isLoading: false,
  planes: [],
  count: 0,
  totalPage: 0,
};

export const createPlane = createAsyncThunk(
  "plane/createPlane",
  async ({ namePlanes, id, codePlane }, { rejectWithValue }) => {
    try {
      const url = `/planes`;
      const response = await appService.post(url, {
        name: namePlanes,
        id,
        codePlane,
      });
      return response.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const getListCreatePlane = createAsyncThunk(
  "plane/getlistcreatePlane",
  async ({ page, limit }, { rejectWithValue }) => {
    try {
      page = page || 1;
      limit = limit || 10;
      const url = `/planes/acount?page=${page}&limit=${limit}`;
      const response = await appService.post(url);
      return response.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const deletedPlane = createAsyncThunk(
  "plane/deletedplane",
  async (planeId, { rejectWithValue }) => {
    try {
      const url = `/planes/${planeId}`;
      const response = await appService.delete(url);
      return response.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const updatePlane = createAsyncThunk(
  "plane/updateplane",
  async ({ planeId, namePlane, chairCount }, { rejectWithValue }) => {
    try {
      const url = `/planes/acount/update/${planeId}`;
      const response = await appService.put(url, {
        name: namePlane,
        chairCount: parseInt(chairCount),
      });
      return response.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const listPlaneOfAirline = createAsyncThunk(
  "plane/listPlaneOfAirline",
  async ({ airlineId, page, limit }, { rejectWithValue }) => {
    try {
      const url = `/planes/acount/listPlaneOfAirline/${airlineId}?page=${page}&limit=${limit}`;
      const response = await appService.post(url);
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
        const { planeId } = action.payload.data;
        state.planeId = planeId;
        toast.success("create plane success");
      })
      .addCase(createPlane.rejected, (state, action) => {
        state.error = action.error.message;
      });
    builder
      .addCase(getListCreatePlane.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getListCreatePlane.fulfilled, (state, action) => {
        state.isLoading = false;
        const { planes, count, totalPage } = action.payload.data;
        state.planes = planes;
        state.count = count;
        state.totalPage = totalPage;
      })
      .addCase(getListCreatePlane.rejected, (state, action) => {
        state.error = action.error.message;
      });
    builder
      .addCase(deletedPlane.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deletedPlane.fulfilled, (state, action) => {
        state.isLoading = false;
        const { planes } = action.payload.data;
        state.planes = planes;
      })
      .addCase(deletedPlane.rejected, (state, action) => {
        state.error = action.error.message;
      });
    builder
      .addCase(updatePlane.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(updatePlane.fulfilled, (state, action) => {
        state.isLoading = false;
        const { planes } = action.payload.data;
        state.planes = planes;
        toast.success("update plane success");
      })
      .addCase(updatePlane.rejected, (state, action) => {
        state.error = action.error.message;
      });
    builder
      .addCase(listPlaneOfAirline.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(listPlaneOfAirline.fulfilled, (state, action) => {
        state.isLoading = false;
        const { planes, count, totalPage } = action.payload.data;
        state.planes = planes;
        state.count = count;
        state.totalPage = totalPage;
      })
      .addCase(listPlaneOfAirline.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

const { actions, reducer } = planeSlice;
export const {} = actions;
export default reducer;
