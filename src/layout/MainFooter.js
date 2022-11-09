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
    <Box
      sx={{
        backgroundColor: "#24292e",
        marginTop: {
          xs: "60px",
          sm: "70px",
          md: "80px",
          lg: "90px",
          xl: "100px",
        },
        color: "white",
        paddingBottom: {
          xs: "16px",
          sm: "18px",
          md: "20px",
          lg: "22px",
          xl: "24px",
        },
      }}
    >
      <Grid
        container
        columns={16}
        sx={{
          padding: {
            xs: "12px",
            sm: "14px",
            md: "16px",
            lg: "18px",
            xl: "20px",
          },
        }}
      >
        <Grid item xs={4}>
          <Typography
            sx={{
              mb: {
                xs: 0.6,
                sm: 0.7,
                md: 0.8,
                lg: 0.9,
                xl: 1,
              },
              fontWeight: 600,
              fontSize: {
                xs: "0.6rem",
                sm: "0.7rem",
                md: "0.8rem",
                lg: "0.9rem",
                xl: "1rem",
              },
            }}
          >
            Company
          </Typography>
          <Stack spacing={1}>
            <Link
              component={routerLink}
              to=""
              sx={{
                color: "white",
                textDecoration: "none",
                ":hover": { textDecoration: "underline" },
                fontSize: {
                  xs: "8px",
                  sm: "10px",
                  md: "12px",
                  lg: "14px",
                  xl: "16px",
                },
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
                fontSize: {
                  xs: "8px",
                  sm: "10px",
                  md: "12px",
                  lg: "14px",
                  xl: "16px",
                },
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
                fontSize: {
                  xs: "8px",
                  sm: "10px",
                  md: "12px",
                  lg: "14px",
                  xl: "16px",
                },
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
                fontSize: {
                  xs: "8px",
                  sm: "10px",
                  md: "12px",
                  lg: "14px",
                  xl: "16px",
                },
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
                fontSize: {
                  xs: "8px",
                  sm: "10px",
                  md: "12px",
                  lg: "14px",
                  xl: "16px",
                },
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
                fontSize: {
                  xs: "8px",
                  sm: "10px",
                  md: "12px",
                  lg: "14px",
                  xl: "16px",
                },
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
                fontSize: {
                  xs: "8px",
                  sm: "10px",
                  md: "12px",
                  lg: "14px",
                  xl: "16px",
                },
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
                fontSize: {
                  xs: "8px",
                  sm: "10px",
                  md: "12px",
                  lg: "14px",
                  xl: "16px",
                },
              }}
            >
              TravelBooking coupon codes
            </Link>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Typography
            sx={{
              mb: { xs: 0.6, sm: 0.7, md: 0.8, lg: 0.9, xl: 1 },
              fontWeight: 600,
              fontSize: {
                xs: "0.6rem",
                sm: "0.7rem",
                md: "0.8rem",
                lg: "0.9rem",
                xl: "1rem",
              },
            }}
          >
            Contact
          </Typography>
          <Stack spacing={1}>
            <Link
              component={routerLink}
              to=""
              sx={{
                color: "white",
                textDecoration: "none",
                ":hover": { textDecoration: "underline" },
                fontSize: {
                  xs: "8px",
                  sm: "10px",
                  md: "12px",
                  lg: "14px",
                  xl: "16px",
                },
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
                fontSize: {
                  xs: "8px",
                  sm: "10px",
                  md: "12px",
                  lg: "14px",
                  xl: "16px",
                },
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
                fontSize: {
                  xs: "8px",
                  sm: "10px",
                  md: "12px",
                  lg: "14px",
                  xl: "16px",
                },
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
                fontSize: {
                  xs: "8px",
                  sm: "10px",
                  md: "12px",
                  lg: "14px",
                  xl: "16px",
                },
              }}
            >
              Advertise with us
            </Link>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Typography
            sx={{
              mb: { xs: 0.6, sm: 0.7, md: 0.8, lg: 0.9, xl: 1 },
              fontWeight: 600,
              fontSize: {
                xs: "0.6rem",
                sm: "0.7rem",
                md: "0.8rem",
                lg: "0.9rem",
                xl: "1rem",
              },
            }}
          >
            More
          </Typography>
          <Stack spacing={1}>
            <Link
              component={routerLink}
              to=""
              sx={{
                color: "white",
                textDecoration: "none",
                ":hover": { textDecoration: "underline" },
                fontSize: {
                  xs: "8px",
                  sm: "10px",
                  md: "12px",
                  lg: "14px",
                  xl: "16px",
                },
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
                fontSize: {
                  xs: "8px",
                  sm: "10px",
                  md: "12px",
                  lg: "14px",
                  xl: "16px",
                },
              }}
            >
              Airlines
            </Link>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Typography
            sx={{
              mb: { xs: 0.6, sm: 0.7, md: 0.8, lg: 0.9, xl: 1 },
              fontWeight: 600,
              fontSize: {
                xs: "0.6rem",
                sm: "0.7rem",
                md: "0.8rem",
                lg: "0.9rem",
                xl: "1rem",
              },
            }}
          >
            Site / Currency
          </Typography>
        </Grid>
      </Grid>
      <Typography
        sx={{
          textAlign: "center",
          padding: {
            xs: "2px 0",
            sm: "4px 0",
            md: "6px 0",
            lg: "8px 0",
            xl: "10px 0",
          },
          fontSize: {
            xs: "8px",
            sm: "10px",
            md: "12px",
            lg: "14px",
            xl: "16px",
          },
        }}
        variant="body2"
      >
        Copyright ©
        <Link
          component={routerLink}
          to="/"
          sx={{
            textDecoration: "none",
            color: "white",
            fontSize: {
              xs: "8px",
              sm: "10px",
              md: "12px",
              lg: "14px",
              xl: "16px",
            },
          }}
        >
          Travel Booking
        </Link>{" "}
        {new Date().getFullYear()}
      </Typography>
      <Box sx={{ textAlign: "center" }}>
        <IconButton>
          <FacebookIcon
            sx={{
              ":hover": {
                color: "#1976d2",
              },
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
        <IconButton>
          <InstagramIcon
            sx={{
              ":hover": { color: "#e91e63" },
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
        <IconButton>
          <TwitterIcon
            sx={{
              ":hover": { color: "#64b5f6" },
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
      </Box>
    </Box>
  );
}

export default MainFooter;
