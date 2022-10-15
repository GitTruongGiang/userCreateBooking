import { Box, Card, Tab, Tabs, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import AirlinesIcon from "@mui/icons-material/Airlines";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import { capitalCase } from "change-case";
import CreateAirlines from "../feature/airline/CreateAirlines";
import CreatePlane from "../feature/plane/CreatePlane";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import CreateFlight from "../feature/flight/CreateFlight";

function HomePage() {
  const [currentTab, setCurrentTab] = useState("Create_Airline");
  const ACCOUNT_TABS = [
    {
      value: "Create_Airline",
      icon: <AirlinesIcon sx={{ fontSize: 30 }} />,
      component: <CreateAirlines />,
    },
    {
      value: "Create_Plane",
      icon: <AirplanemodeActiveIcon sx={{ fontSize: 30 }} />,
      component: <CreatePlane />,
    },
    {
      value: "Create_flight",
      icon: <FlightTakeoffIcon sx={{ fontSize: 30 }} />,
      component: <CreateFlight />,
    },
  ];
  return (
    <Container maxWidth="">
      <Container
        maxWidth="lg"
        sx={{
          backgroundColor: "white",
          height: 700,
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <Box sx={{ mb: 2 }}>
          <Typography variant="h5" gutterBottom>
            Travel Booking
          </Typography>
          <Typography sx={{ color: "red" }}>
            tạo theo thứ tự từ trái qua phải
          </Typography>
        </Box>
        <Tabs
          value={currentTab}
          scrollButtons="auto"
          variant="scrollable"
          allowScrollButtonsMobile
          onChange={(e, value) => setCurrentTab(value)}
          sx={{ textAlign: "center" }}
        >
          {ACCOUNT_TABS.map((tab) => (
            <Tab
              disableRipple
              key={tab.value}
              label={capitalCase(tab.value)}
              icon={tab.icon}
              value={tab.value}
            />
          ))}
        </Tabs>
        <Box sx={{ mb: 5 }} />

        {ACCOUNT_TABS.map((tab) => {
          const isMatched = tab.value === currentTab;
          return isMatched && <Box key={tab.value}>{tab.component}</Box>;
        })}
      </Container>
    </Container>
  );
}

export default HomePage;
