import {
  AppBar,
  Avatar,
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import "./MainHeader.css";

function MainHeader() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { user, logout } = useAuth();

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
  };
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
        <Toolbar sx={{ mr: 3, ml: 3 }}>
          <IconButton
            size="large"
            edge="start"
            color="secondary"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handeHome}
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
            variant="body2"
            className="btn-appbar"
            sx={{
              mr: 2,
            }}
          >
            <span>chuyến bay</span>
          </Box>
          <Box
            component="button"
            variant="body2"
            className="btn-appbar"
            sx={{
              mr: 2,
            }}
          >
            <span>Khách Sạn</span>
          </Box>
          <Box
            component="button"
            variant="body2"
            className="btn-appbar"
            sx={{
              mr: 2,
            }}
          >
            <span> Khuyến mãi</span>
          </Box>
          <Box
            component="button"
            className="btn-appbar"
            sx={{
              mr: 2,
            }}
          >
            <span>Đơn Hàng</span>
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
              <MenuItem onClick={handleListCreateAirlines} sx={{ mx: 1 }}>
                List Create-Airlines
              </MenuItem>
              <MenuItem onClick={handleListCreate} sx={{ mx: 1 }}>
                List Create-Flight
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
