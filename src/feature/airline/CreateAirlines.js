import React, { useCallback } from "react";
import {
  Box,
  Grid,
  Card,
  Stack,
  FormHelperText,
  TextField,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import useAuth from "../../hooks/useAuth";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { createAirlines } from "./airlineSlice";

const defaultValues = {
  name: "",
  imageUrl: "",
};

const UpdateUserSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
});

function CreateAirlines() {
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
  const { airlines } = useSelector((state) => state.airlines);
  console.log(airlines);
  const onSubmit = (data) => {
    const { name, imageUrl } = data;
    dispatch(createAirlines({ name, imageUrl }));
    reset();
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
                name="name"
                render={({ field, fieldState: { error } }) => {
                  return (
                    <TextField
                      fullWidth
                      autoComplete="off"
                      label="Name Airlines"
                      {...field}
                      error={!!error}
                      helperText={error?.message}
                    />
                  );
                }}
              />
              <Controller
                control={control}
                name="imageUrl"
                render={({ field, fieldState: { error } }) => {
                  return (
                    <TextField
                      fullWidth
                      autoComplete="off"
                      label="imageUrl"
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

export default CreateAirlines;
