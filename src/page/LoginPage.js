import {
  Alert,
  Container,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Link as RouterLink } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useAuth from "../hooks/useAuth";
import { Box } from "@mui/system";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";

const loginSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("email required"),
  password: yup.string().required("password"),
});

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();

  const defaultValues = {
    email: "",
    password: "",
  };
  const methods = useForm({
    defaultValues,
    resolver: yupResolver(loginSchema),
  });
  const {
    handleSubmit,
    control,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = methods;

  const onSubmit = async (data) => {
    const from = location.state?.from?.pathname || "/";
    try {
      const { email, password } = data;
      await auth.login({ email, password }, () => {
        navigate(from, { replace: true });
      });
    } catch (error) {
      setError("responseError", error);
    }
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          mb: 5,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FlightTakeoffIcon sx={{ color: "#1e88e5", fontSize: "50px" }} />
        <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
          TravelBooking
        </Typography>
      </Box>
      <Alert severity="info">
        Don’t have an account?{" "}
        <Link variant="subtitle2" component={RouterLink} to="/register">
          Get started
        </Link>
      </Alert>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        LOGIN
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          {!!errors.responseError && (
            <Alert severity="error">{errors.responseError.message}</Alert>
          )}
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                autoComplete="off"
                label="Email"
                fullWidth
                {...field}
                error={!!error}
                helperText={error?.message}
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                label="Password"
                type={showPassword ? "text" : "password"}
                fullWidth
                {...field}
                error={!!error}
                helperText={error?.message}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />

          <LoadingButton
            type="submit"
            variant="contained"
            fullWidth
            size="large"
            loading={isSubmitting}
          >
            LogIn
          </LoadingButton>
        </Stack>
      </form>
    </Container>
  );
}

export default LoginPage;
