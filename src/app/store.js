import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../feature/user/userSlice";
import airlinesReducer from "../feature/airline/airlineSlice";
import planesReducer from "../feature/plane/planeSlice";
import flightsReducer from "../feature/flight/flightSlice";
import chairsReducer from "../feature/chair/chairSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    airlines: airlinesReducer,
    planes: planesReducer,
    flights: flightsReducer,
    chairs: chairsReducer,
  },
});

export default store;
