import React, { useState } from "react";
import {
  Link,
  Stack,
  Alert,
  IconButton,
  InputAdornment,
  Container,
  TextField,
  Box,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const RegisterSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  city: Yup.string().required("city is required"),
  phone: Yup.string().required("phone is required"),
  password: Yup.string().min(8).required("Password is required"),
  passwordConfirmation: Yup.string()
    .required("Please confirm your password")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});

const defaultValues = {
  name: "",
  email: "",
  city: "",
  phone: "",
  password: "",
  passwordConfirmation: "",
};

function RegisterPage() {
  const navigate = useNavigate();
  const auth = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] =
    useState(false);

  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });
  const {
    handleSubmit,
    reset,
    setError,
    control,
    formState: { errors, isSubmitting },
  } = methods;

  const onSubmit = async (data) => {
    const { name, email, password, city, phone } = data;
    try {
      await auth.register(
        { name, email, password, city, phone, status: "accepted" },
        () => {
          navigate("/", { replace: true });
        }
      );
    } catch (error) {
      reset();
      setError("responseError", error);
    }
  };

  return (
    <Container maxWidth="xs">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FlightTakeoffIcon sx={{ color: "#1e88e5", fontSize: "50px" }} />
            <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
              TravelBooking
            </Typography>
          </Box>
          {!!errors.responseError && (
            <Alert severity="error">{errors.responseError.message}</Alert>
          )}
          <Alert severity="info">
            Already have an account?{" "}
            <Link variant="subtitle2" component={RouterLink} to="/login">
              Sign in
            </Link>
          </Alert>
          <Controller
            control={control}
            name="name"
            render={({ field, fieldState: { error } }) => {
              return (
                <TextField
                  autoComplete="off"
                  fullWidth
                  label="Full Name"
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
                  autoComplete="off"
                  fullWidth
                  label="Email Address"
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
                  autoComplete="off"
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
            name="phone"
            render={({ field, fieldState: { error } }) => {
              return (
                <TextField
                  autoComplete="off"
                  fullWidth
                  label="Phone Numeber"
                  {...field}
                  error={!!error}
                  helperText={error?.message}
                />
              );
            }}
          />
          <Controller
            name="password"
            control={control}
            render={({ field, fieldState: { error } }) => {
              return (
                <TextField
                  label="Password"
                  fullWidth
                  type={showPassword ? "text" : "password"}
                  {...field}
                  error={!!error}
                  helperText={error?.message}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          {showPassword ? (
                            <VisibilityIcon />
                          ) : (
                            <VisibilityOffIcon />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              );
            }}
          />
          <Controller
            name="passwordConfirmation"
            control={control}
            render={({ field, fieldState: { error } }) => {
              return (
                <TextField
                  fullWidth
                  label="Password Confirmation"
                  type={showPasswordConfirmation ? "text" : "password"}
                  {...field}
                  error={!!error}
                  helperText={error?.message}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() =>
                            setShowPasswordConfirmation(
                              !showPasswordConfirmation
                            )
                          }
                          edge="end"
                        >
                          {showPasswordConfirmation ? (
                            <VisibilityIcon />
                          ) : (
                            <VisibilityOffIcon />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              );
            }}
          />

          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
          >
            Register
          </LoadingButton>
        </Stack>
      </form>
    </Container>
  );
}

export default RegisterPage;
