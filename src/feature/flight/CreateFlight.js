import React, { useState } from "react";
import { Box, Grid, Card, Stack, TextField, MenuItem } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import {
  DatePicker,
  LocalizationProvider,
  TimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { countrys } from "../../list";
import dayjs from "dayjs";
import { createFlight } from "./flightSlice";
import { useNavigate } from "react-router-dom";

const defaultValues = {
  planeId: "",
  price: "",
};

const UpdateUserSchema = yup.object().shape({
  planeId: yup.string().required("planeId is required"),
  price: yup.number().required("price is required"),
});

function CreateFlight() {
  const [fromDay, setFromDay] = useState(dayjs());
  const [timeFrom, setTimeFrom] = React.useState(null);
  const [timeTo, setTimeTo] = useState(null);
  const [from, setFrom] = useState("SG");
  const [to, setTo] = useState("HN");
  const navigate = useNavigate();
  const methods = useForm({
    resolver: yupResolver(UpdateUserSchema),
    defaultValues,
  });
  const {
    control,
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    const { planeId, price } = data;
    const date = fromDay.get("date");
    const month = fromDay.get("month");
    const year = fromDay.get("year");
    dispatch(
      createFlight({
        planeId,
        from,
        to,
        fromDay: fromDay
          .set("hour", 0)
          .set("minute", 0)
          .set("second", 0)
          .toDate(),
        timeFrom: timeFrom
          .set("date", date)
          .set("month", month)
          .set("year", year)
          .toDate(),
        timeTo: timeTo
          .set("date", date)
          .set("month", month)
          .set("year", year)
          .toDate(),
        price,
      })
    );
    reset();
    navigate("/listcreate");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card
            sx={{
              p: 3,
              boxShadow:
                "0 -2px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
            }}
          >
            <Box
              sx={{
                display: "grid",
                rowGap: 3,
                columnGap: 2,
                gridTemplateColumns: {
                  xs: "repeat(1, 1fr)",
                  sm: "repeat(2, 1fr)",
                },
              }}
            >
              <Controller
                control={control}
                name="planeId"
                render={({ field, fieldState: { error } }) => {
                  return (
                    <TextField
                      fullWidth
                      autoComplete="off"
                      label="Plane ID"
                      {...field}
                      error={!!error}
                      helperText={error?.message}
                    />
                  );
                }}
              />

              <TextField
                select
                fullWidth
                label="From"
                size="small"
                onChange={(event) => setFrom(event.target.value)}
                value={from}
                sx={{
                  backgroundColor: "white",
                  borderRadius: "8px",
                  fontStyle: "italic",
                }}
              >
                {countrys.map((country) => (
                  <MenuItem key={country.value} value={country.value}>
                    {country.label}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                select
                fullWidth
                label="To"
                size="small"
                onChange={(event) => setTo(event.target.value)}
                value={to}
                sx={{
                  backgroundColor: "white",
                  borderRadius: "8px",
                  fontStyle: "italic",
                }}
              >
                {countrys.map((country) => (
                  <MenuItem key={country.value} value={country.value}>
                    {country.label}
                  </MenuItem>
                ))}
              </TextField>

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="From Day"
                  disablePast
                  value={fromDay}
                  onChange={(newValue) => {
                    setFromDay(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker
                  label="Time From"
                  value={timeFrom}
                  onChange={(newValue) => {
                    setTimeFrom(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker
                  label="Time To"
                  value={timeTo}
                  onChange={(newValue) => {
                    setTimeTo(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>

              <Controller
                control={control}
                name="price"
                render={({ field, fieldState: { error } }) => {
                  return (
                    <TextField
                      fullWidth
                      autoComplete="off"
                      label="Price"
                      type="number"
                      {...field}
                      error={!!error}
                      helperText={error?.message}
                    />
                  );
                }}
              />
            </Box>
            <Stack spacing={3} alignItems="flex-end" sx={{ mt: 3 }}>
              <LoadingButton
                type="submit"
                variant="contained"
                loading={isSubmitting}
                sx={{ ":hover": { backgroundColor: "#f44336" } }}
              >
                Create
              </LoadingButton>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </form>
  );
}

export default CreateFlight;
