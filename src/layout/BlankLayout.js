import { Stack } from "@mui/system";
import React from "react";
import { Outlet } from "react-router-dom";

function BlankLayout() {
  return (
    <Stack sx={{ minHeight: "100vh", justifyContent: "center" }}>
      <Outlet />
    </Stack>
  );
}

export default BlankLayout;
