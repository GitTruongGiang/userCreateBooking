import {
  AppBar,
  Avatar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import HomeIcon from "@mui/icons-material/Home";
import "./MainHeader.css";

function MainHeader() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [toggle, setToggle] = useState(false);
  const { user, logout } = useAuth();
  const toggleDrawer = (open) => (event) => {
    setToggle(open);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const navigate = useNavigate();
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleProfile = async () => {
    navigate("/profile");
    handleClose();
  };
  const handleListCreateAirlines = async () => {
    navigate("/listAirlines");
    handleClose();
  };
  const handleListCreatePlane = async () => {
    navigate("/listPlanes");
    handleClose();
  };
  const handleListCreate = async () => {
    navigate(`/listcreate`);
    handleClose();
  };
  const handleClick = async () => {
    await logout(() => {
      navigate("/login");
    });
  };
  const handeHome = async () => {
    navigate("/");
    setToggle(false);
  };
  const pageHeaders = [
    {
      value: "TRANG CHỦ",
      icon: (
        <IconButton
          onClick={() => handeHome()}
          sx={{
            padding: {
              xs: "4px",
              sm: "5px",
              md: "6px",
              lg: "7px",
              xl: "8px",
            },
          }}
        >
          <HomeIcon
            color="info"
            sx={{
              fontSize: {
                xs: "1.1rem",
                sm: "1.2rem",
                md: "1.3rem",
                lg: "1.4rem",
                xl: "1.5rem",
              },
            }}
          />
        </IconButton>
      ),
    },
  ];

  const list = () => (
    <Box
      sx={{
        width: { xs: 150, sm: 180, md: 210, lg: 250, xl: 300 },
        zIndex: 100,
      }}
    >
      <List>
        {pageHeaders.map((index) => {
          return (
            <ListItem key={index.value} disablePadding>
              {index.value === "TRANG CHỦ" ? (
                <ListItemButton
                  onClick={() => handeHome()}
                  sx={{
                    padding: {
                      xs: "4px",
                      sm: "5px",
                      md: "6px",
                      lg: "7px",
                      xl: "8px",
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: { xs: 0.6, sm: 0.7, md: 0.8, lg: 0.9, xl: 1 },
                    }}
                  >
                    {index.icon}
                  </ListItemIcon>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "0.75rem",
                        sm: "0.8rem",
                        md: "0.85rem",
                        lg: "0.9rem",
                        xl: "1rem",
                      },
                    }}
                  >
                    {index.value}
                  </Typography>
                </ListItemButton>
              ) : index.value === "ĐẶT CHỔ CỦA TÔI" ? (
                <ListItemButton
                  // onClick={handleBookingList}
                  sx={{
                    padding: {
                      xs: "4px",
                      sm: "5px",
                      md: "6px",
                      lg: "7px",
                      xl: "8px",
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: { xs: 0.6, sm: 0.7, md: 0.8, lg: 0.9, xl: 1 },
                    }}
                  >
                    {index.icon}
                  </ListItemIcon>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "0.75rem",
                        sm: "0.8rem",
                        md: "0.85rem",
                        lg: "0.9rem",
                        xl: "1rem",
                      },
                    }}
                  >
                    {index.value}
                  </Typography>
                </ListItemButton>
              ) : (
                <ListItemButton
                  sx={{
                    padding: {
                      xs: "4px",
                      sm: "5px",
                      md: "6px",
                      lg: "7px",
                      xl: "8px",
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: { xs: 0.6, sm: 0.7, md: 0.8, lg: 0.9, xl: 1 },
                    }}
                  >
                    {index.icon}
                  </ListItemIcon>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "0.75rem",
                        sm: "0.8rem",
                        md: "0.85rem",
                        lg: "0.9rem",
                        xl: "1rem",
                      },
                    }}
                  >
                    {index.value}
                  </Typography>
                </ListItemButton>
              )}
            </ListItem>
          );
        })}
      </List>
      <Divider />
    </Box>
  );

  return (
    <Box
      sx={{
        flexGrow: 0.5,
        top: 0,
        position: "sticky",
        zIndex: 99,
        paddingTop: "100px",
      }}
    >
      <AppBar
        variant="elevation"
        style={{ backgroundColor: "rgb(35,36,36)", color: "white" }}
      >
        <Drawer anchor="left" open={toggle} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
        <Toolbar sx={{ mr: 3, ml: 3 }}>
          <IconButton
            size="large"
            edge="start"
            color="secondary"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon
              sx={{
                ":hover": { color: "#f44336" },
                color: "#1e88e5",
              }}
            />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "white" }}
          >
            Travel Booking
            <FlightTakeoffIcon sx={{ color: "#1e88e5", ml: 0.5 }} />
          </Typography>
          <Box
            component="button"
            className="btn-appbar"
            sx={{
              mr: 2,
            }}
            onClick={handleListCreateAirlines}
          >
            <span> List Create-Airlines</span>
          </Box>
          <Box
            component="button"
            className="btn-appbar"
            sx={{
              mr: 2,
            }}
            onClick={handleListCreatePlane}
          >
            <span>List Plane-Flight</span>
          </Box>
          <Box
            component="button"
            className="btn-appbar"
            sx={{
              mr: 2,
            }}
            onClick={handleListCreate}
          >
            <span>List Create-Flight</span>
          </Box>
          <Box>
            <Avatar
              onClick={handleMenu}
              src={user?.avatarUrl}
              alt={user?.name}
              sx={{
                width: 32,
                height: 32,
                cursor: "pointer",
                ":hover": { backgroundColor: "#1e88e5" },
              }}
            />
            <Menu
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <Box sx={{ my: 1.5, px: 2.5 }}>
                <Typography variant="subtitle2" noWrap>
                  {user?.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary" }}
                  noWrap
                >
                  {user?.email}
                </Typography>
              </Box>
              <Divider sx={{ borderStyle: "dashed" }} />
              <MenuItem onClick={handleProfile} sx={{ mx: 1 }}>
                Profile
              </MenuItem>
              <Divider sx={{ borderStyle: "dashed" }} />
              <MenuItem onClick={handleClick} sx={{ m: 1 }}>
                Logout
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default MainHeader;
