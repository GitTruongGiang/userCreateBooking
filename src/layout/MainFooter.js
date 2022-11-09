import { Grid, IconButton, Link, Stack, Typography } from "@mui/material";
import { Link as routerLink } from "react-router-dom";
import React from "react";
import { Box } from "@mui/system";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import CountrySelect from "../components/CountrySelect";

function MainFooter() {
  return (
    <div>
      <Grid container columns={16} sx={{ padding: "20px" }}>
        <Grid item xs={4}>
          <Typography sx={{ mb: 1, fontWeight: 600 }}>Company</Typography>
          <Stack spacing={1}>
            <Link
              component={routerLink}
              to=""
              sx={{
                color: "white",
                textDecoration: "none",
                ":hover": { textDecoration: "underline" },
              }}
            >
              About
            </Link>
            <Link
              component={routerLink}
              to=""
              sx={{
                color: "white",
                textDecoration: "none",
                ":hover": { textDecoration: "underline" },
              }}
            >
              Careers
            </Link>
            <Link
              component={routerLink}
              to=""
              sx={{
                color: "white",
                textDecoration: "none",
                ":hover": { textDecoration: "underline" },
              }}
            >
              Mobile
            </Link>
            <Link
              component={routerLink}
              to=""
              sx={{
                color: "white",
                textDecoration: "none",
                ":hover": { textDecoration: "underline" },
              }}
            >
              Discover
            </Link>
            <Link
              component={routerLink}
              to=""
              sx={{
                color: "white",
                textDecoration: "none",
                ":hover": { textDecoration: "underline" },
              }}
            >
              How we work
            </Link>
            <Link
              component={routerLink}
              to=""
              sx={{
                color: "white",
                textDecoration: "none",
                ":hover": { textDecoration: "underline" },
              }}
            >
              Why travelers choose momondo
            </Link>
            <Link
              component={routerLink}
              to=""
              sx={{
                color: "white",
                textDecoration: "none",
                ":hover": { textDecoration: "underline" },
              }}
            >
              Sustainability
            </Link>
            <Link
              component={routerLink}
              to=""
              sx={{
                color: "white",
                textDecoration: "none",
                ":hover": { textDecoration: "underline" },
              }}
            >
              TravelBooking coupon codes
            </Link>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Typography sx={{ mb: 1, fontWeight: 600 }}>Contact</Typography>
          <Stack spacing={1}>
            <Link
              component={routerLink}
              to=""
              sx={{
                color: "white",
                textDecoration: "none",
                ":hover": { textDecoration: "underline" },
              }}
            >
              Help/FAQ
            </Link>
            <Link
              component={routerLink}
              to=""
              sx={{
                color: "white",
                textDecoration: "none",
                ":hover": { textDecoration: "underline" },
              }}
            >
              Press
            </Link>
            <Link
              component={routerLink}
              to=""
              sx={{
                color: "white",
                textDecoration: "none",
                ":hover": { textDecoration: "underline" },
              }}
            >
              Affiliates
            </Link>
            <Link
              component={routerLink}
              to=""
              sx={{
                color: "white",
                textDecoration: "none",
                ":hover": { textDecoration: "underline" },
              }}
            >
              Advertise with us
            </Link>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Typography sx={{ mb: 1, fontWeight: 600 }}>More</Typography>
          <Stack spacing={1}>
            <Link
              component={routerLink}
              to=""
              sx={{
                color: "white",
                textDecoration: "none",
                ":hover": { textDecoration: "underline" },
              }}
            >
              Airline fees
            </Link>
            <Link
              component={routerLink}
              to=""
              sx={{
                color: "white",
                textDecoration: "none",
                ":hover": { textDecoration: "underline" },
              }}
            >
              Airlines
            </Link>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Typography sx={{ mb: 1, fontWeight: 600 }}>
            Site / Currency
          </Typography>
        </Grid>
      </Grid>
      <Typography
        sx={{ textAlign: "center", padding: "10px 0" }}
        variant="body2"
      >
        Copyright ©
        <Link
          component={routerLink}
          to="/"
          sx={{ textDecoration: "none", color: "white" }}
        >
          Travel Booking
        </Link>{" "}
        {new Date().getFullYear()}
      </Typography>
      <Box sx={{ textAlign: "center" }}>
        <IconButton>
          <FacebookIcon sx={{ ":hover": { color: "#1976d2" } }} />
        </IconButton>
        <IconButton>
          <InstagramIcon sx={{ ":hover": { color: "#e91e63" } }} />
        </IconButton>
        <IconButton>
          <TwitterIcon sx={{ ":hover": { color: "#64b5f6" } }} />
        </IconButton>
      </Box>
    </div>
  );
}

export default MainFooter;
