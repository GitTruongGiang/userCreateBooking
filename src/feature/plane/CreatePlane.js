import React, { useCallback } from "react";
import {
  Box,
  Grid,
  Card,
  Stack,
  FormHelperText,
  TextField,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import useAuth from "../../hooks/useAuth";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { createPlane } from "./planeSlice";
import { useEffect } from "react";
import appService from "../../app/appService";
import { useState } from "react";

const defaultValues = {
  namePlanes: "",
  codePlane: "",
};

const UpdateUserSchema = yup.object().shape({
  namePlanes: yup.string().required("NamePlanes is required"),
  codePlane: yup.string().required("codePlane is required"),
});

function CreatePlane() {
  const [open, setOpen] = React.useState(false);
  const [airlines, setAirlines] = useState("");
  const [id, setId] = useState("");
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

  useEffect(() => {
    const fetch = async () => {
      const response = await appService.get("/airlines/acount/list/airlines");
      setAirlines(response.data.data.airlines);
    };
    fetch();
  }, []);

  const handleChangeId = (e) => {
    setId(e.target.value);
  };

  const onSubmit = (data) => {
    const { namePlanes, codePlane } = data;
    dispatch(createPlane({ namePlanes, id, codePlane }));
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
                      label="Tên Máy Bay"
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
                      label="Mã Máy Bay"
                      {...field}
                      error={!!error}
                      helperText={error?.message}
                    />
                  );
                }}
              />
              <FormControl>
                <InputLabel id="demo-simple-select-helper-label">
                  Hãng Máy Bay
                </InputLabel>
                <Select
                  label="Hãng Máy Bay"
                  value={id}
                  onChange={handleChangeId}
                >
                  {airlines &&
                    airlines.map((airline) => (
                      <MenuItem value={airline?._id} key={airline._id}>
                        {airline?.name}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </Box>

            <Stack spacing={3} alignItems="flex-end" sx={{ mt: 3 }}>
              <LoadingButton
                type="submit"
                variant="contained"
                loading={isSubmitting}
                sx={{ ":hover": { backgroundColor: "#f44336" } }}
              >
                Tạo
              </LoadingButton>
            </Stack>
            {planeId ? (
              <Typography>
                copy ID Máy Bay để tạo Chuyến Bay:
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
