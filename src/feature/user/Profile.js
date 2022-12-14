import { Box, Container, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ShareIcon from "@mui/icons-material/Share";
import AccountSocialLinks from "./AccountSocialLinks";
import { capitalCase } from "change-case";
import AccountGeneral from "./AccountGeneral";

function Profile() {
  const [currentTab, setCurrentTab] = useState("Chung");
  const ACCOUNT_TABS = [
    {
      value: "Chung",
      icon: <AccountBoxIcon sx={{ fontSize: 30 }} />,
      component: <AccountGeneral />,
    },
    {
      value: "Lien_Ket_Xa_Hoi",
      icon: <ShareIcon sx={{ fontSize: 30 }} />,
      component: <AccountSocialLinks />,
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
      <Typography variant="h5" gutterBottom>
        Hồ Sơ
      </Typography>
      <Tabs
        value={currentTab}
        scrollButtons="auto"
        variant="scrollable"
        allowScrollButtonsMobile
        onChange={(e, value) => setCurrentTab(value)}
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
  );
}

export default Profile;
