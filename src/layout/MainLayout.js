import { Box, Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import AlertMsg from "../components/AlertMsg";
import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";

function MainLayout() {
  return (
    <Box
      sx={{
        margin: "0 auto",
        position: "relative",
        width: "100%",
        height: "100vh",
      }}
    >
      <MainHeader />
      <AlertMsg />
      <Box
        sx={{
          paddingTop: {
            xs: "30px",
            sm: "35px",
            md: "40px",
            lg: "45px",
            xl: "50px",
          },
        }}
      >
        <Outlet />
      </Box>
      <MainFooter />
    </Box>
  );
}

export default MainLayout;
