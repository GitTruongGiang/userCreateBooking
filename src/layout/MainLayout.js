import { Box, Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import AlertMsg from "../components/AlertMsg";
import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";

function MainLayout() {
  return (
    <div
      style={{
        margin: "0 auto",
        position: "relative",
      }}
    >
      <MainHeader />
      <AlertMsg />
      <Box sx={{ paddingTop: "50px" }}>
        <Outlet />
      </Box>
      <Container
        maxWidth="xl"
        sx={{
          backgroundColor: "#24292e",
          marginTop: "100px",
          color: "white",
          paddingBottom: "24px",
        }}
      >
        <MainFooter />
      </Container>
    </div>
  );
}

export default MainLayout;
