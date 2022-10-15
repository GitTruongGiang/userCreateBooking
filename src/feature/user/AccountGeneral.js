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
import UploadAvatar from "../../components/UploadAvatar";
import { updateUserProfile } from "./userSlice";
// import { updateUserProfile } from "./userSlice";

const UpdateUserSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
});

function AccountGeneral() {
  const { user } = useAuth();
  const { isloading } = useSelector((state) => state.user);

  const defaultValues = {
    name: user?.name || "",
    email: user?.email || "",
    avatarUrl: user?.avatarUrl || "",
    coverUrl: user?.coverUrl || "",
    phone: user?.phone || "",
    address: user?.address || "",
    city: user?.city || "",
    country: user?.country || "",
    aboutMe: user?.aboutMe || "",
  };

  const methods = useForm({
    resolver: yupResolver(UpdateUserSchema),
    defaultValues,
  });
  const {
    setValue,
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const dispatch = useDispatch();

  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];

      if (file) {
        setValue(
          "avatarUrl",
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        );
      }
    },
    [setValue]
  );

  const onSubmit = (data) => {
    dispatch(updateUserProfile({ userId: user._id, ...data }));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              py: 10,
              px: 3,
              textAlign: "center",
              boxShadow:
                "0 -2px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
            }}
          >
            <Controller
              control={control}
              name="avatarUrl"
              render={({ field, fieldState: { error } }) => {
                const checkError = !!error && !field.value;
                return (
                  <div>
                    <UploadAvatar
                      accept="image/*"
                      maxSize={3145728}
                      onDrop={handleDrop}
                      error={checkError}
                      file={field.value}
                      helperText={
                        checkError && (
                          <FormHelperText
                            error
                            sx={{ px: 2, textAlign: "center" }}
                          >
                            {error.message}
                          </FormHelperText>
                        )
                      }
                    />
                  </div>
                );
              }}
            />
          </Card>
        </Grid>

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
                      label="name"
                      {...field}
                      error={!!error}
                      helperText={error?.message}
                    />
                  );
                }}
              />
              <Controller
                control={control}
                name="email"
                render={({ field, fieldState: { error } }) => {
                  return (
                    <TextField
                      disabled
                      fullWidth
                      label="name"
                      {...field}
                      error={!!error}
                      helperText={error?.message}
                    />
                  );
                }}
              />
              <Controller
                control={control}
                name="phone"
                render={({ field, fieldState: { error } }) => {
                  return (
                    <TextField
                      fullWidth
                      label="Phone"
                      {...field}
                      error={!!error}
                      helperText={error?.message}
                    />
                  );
                }}
              />
              <Controller
                control={control}
                name="address"
                render={({ field, fieldState: { error } }) => {
                  return (
                    <TextField
                      fullWidth
                      label="Address"
                      {...field}
                      error={!!error}
                      helperText={error?.message}
                    />
                  );
                }}
              />
              <Controller
                control={control}
                name="city"
                render={({ field, fieldState: { error } }) => {
                  return (
                    <TextField
                      fullWidth
                      label="City"
                      {...field}
                      error={!!error}
                      helperText={error?.message}
                    />
                  );
                }}
              />
              <Controller
                control={control}
                name="country"
                render={({ field, fieldState: { error } }) => {
                  return (
                    <TextField
                      fullWidth
                      label="Country"
                      {...field}
                      error={!!error}
                      helperText={error?.message}
                    />
                  );
                }}
              />
            </Box>

            <Stack spacing={3} alignItems="flex-end" sx={{ mt: 3 }}>
              <Controller
                control={control}
                name="coverUrl"
                render={({ field, fieldState: { error } }) => {
                  return (
                    <TextField
                      fullWidth
                      label="coverUrl"
                      {...field}
                      error={!!error}
                      helperText={error?.message}
                    />
                  );
                }}
              />
              <Controller
                control={control}
                name="aboutme"
                render={({ field, fieldState: { error } }) => {
                  return (
                    <TextField
                      fullWidth
                      multiline
                      rows={4}
                      label="About Me"
                      {...field}
                      error={!!error}
                      helperText={error?.message}
                    />
                  );
                }}
              />

              <LoadingButton
                type="submit"
                variant="contained"
                loading={isSubmitting || isloading}
                sx={{ ":hover": { backgroundColor: "#f44336" } }}
              >
                Save Changes
              </LoadingButton>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </form>
  );
}

export default AccountGeneral;
