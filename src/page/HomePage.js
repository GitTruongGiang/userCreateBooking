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
  const [currentTab, setCurrentTab] = useState("Tạo Hãng Máy Bay");
  const ACCOUNT_TABS = [
    {
      value: "Tạo Hãng Máy Bay",
      icon: <AirlinesIcon sx={{ fontSize: 30 }} />,
      component: <CreateAirlines />,
    },
    {
      value: "Tạo Máy Bay",
      icon: <AirplanemodeActiveIcon sx={{ fontSize: 30 }} />,
      component: <CreatePlane />,
    },
    {
      value: "Tạo Chuyến Bay",
      icon: <FlightTakeoffIcon sx={{ fontSize: 30 }} />,
      component: <CreateFlight />,
    },
  ];
  return (
    <Container
      maxWidth="lg"
      sx={{
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <Box sx={{ mb: 2 }}>
        <Typography variant="h5" gutterBottom>
          Travel Booking
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
            label={`${tab.value}`}
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
  );
}

export default HomePage;
