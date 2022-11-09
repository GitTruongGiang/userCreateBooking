import React, { useCallback } from "react";
import {
  Box,
  Grid,
  Card,
  Stack,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import useAuth from "../../hooks/useAuth";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { createPlane } from "./planeSlice";

const defaultValues = {
  namePlanes: "",
  nameAirlines: "",
  codePlane: "",
};

const UpdateUserSchema = yup.object().shape({
  namePlanes: yup.string().required("NamePlanes is required"),
  nameAirlines: yup.string().required("NameAirlines is required"),
  codePlane: yup.string().required("codePlane is required"),
});

function CreatePlane() {
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
  const { planeId } = useSelector((state) => state.planes);
  const onSubmit = (data) => {
    const { namePlanes, nameAirlines, codePlane } = data;
    dispatch(createPlane({ namePlanes, nameAirlines, codePlane }));
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
                name="namePlanes"
                render={({ field, fieldState: { error } }) => {
                  return (
                    <TextField
                      fullWidth
                      autoComplete="off"
                      label="Name Planes"
                      {...field}
                      error={!!error}
                      helperText={error?.message}
                    />
                  );
                }}
              />
              <Controller
                control={control}
                name="codePlane"
                render={({ field, fieldState: { error } }) => {
                  return (
                    <TextField
                      fullWidth
                      autoComplete="off"
                      label="code Plane"
                      {...field}
                      error={!!error}
                      helperText={error?.message}
                    />
                  );
                }}
              />
              <Controller
                control={control}
                name="nameAirlines"
                render={({ field, fieldState: { error } }) => {
                  return (
                    <TextField
                      fullWidth
                      autoComplete="off"
                      label="name Airlines"
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
            {planeId ? (
              <Typography>
                copy ID Plane để tạo Flight:
                <Box component="span" sx={{ color: "#f44336", ml: 1 }}>
                  {planeId}
                </Box>
              </Typography>
            ) : (
              ""
            )}
          </Card>
        </Grid>
      </Grid>
    </form>
  );
}

export default CreatePlane;
