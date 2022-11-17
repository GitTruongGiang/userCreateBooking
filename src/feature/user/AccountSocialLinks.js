import React from "react";

import { Stack, Card, InputAdornment, TextField } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

import { LoadingButton } from "@mui/lab";
import { Controller, useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { updateUserProfile } from "./userSlice";

const SOCIAL_LINKS = [
  {
    value: "facebookLink",
    icon: <FacebookIcon sx={{ fontSize: 30, color: "#1976d2" }} />,
  },
  {
    value: "instagramLink",
    icon: <InstagramIcon sx={{ fontSize: 30, color: "#e91e63" }} />,
  },
  {
    value: "linkedinLink",
    icon: <LinkedInIcon sx={{ fontSize: 30, color: "#2170af" }} />,
  },
  {
    value: "twitterLink",
    icon: <TwitterIcon sx={{ fontSize: 30, color: "#64b5f6" }} />,
  },
];

function AccountSocialLinks() {
  const { user } = useAuth();

  const defaultValues = {
    facebookLink: user?.facebookLink || "",
    instagramLink: user?.instagramLink || "",
    linkedinLink: user?.linkedinLink || "",
    twitterLink: user?.twitterLink || "",
  };

  const methods = useForm({
    defaultValues,
  });
  const {
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting },
  } = methods;
  const dispatch = useDispatch();
  const { isloading } = useSelector((state) => state.user);
  const onSubmit = async (data) => {
    try {
      dispatch(updateUserProfile({ userId: user._id, ...data }));
      reset();
    } catch (error) {
      reset();
    }
  };

  return (
    <Card sx={{ p: 3 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3} alignItems="flex-end">
          {SOCIAL_LINKS.map((link) => (
            <Controller
              control={control}
              key={link.value}
              name={link.value}
              render={({ field, fieldState: { error } }) => {
                return (
                  <TextField
                    fullWidth
                    autoComplete="off"
                    {...field}
                    error={!!error}
                    helperText={error?.message}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          {link.icon}
                        </InputAdornment>
                      ),
                    }}
                  />
                );
              }}
            />
          ))}

          <LoadingButton
            type="submit"
            variant="contained"
            loading={isSubmitting || isloading}
            sx={{ ":hover": { backgroundColor: "#f44336" } }}
          >
            Lưu Thay Đổi
          </LoadingButton>
        </Stack>
      </form>
    </Card>
  );
}

export default AccountSocialLinks;
