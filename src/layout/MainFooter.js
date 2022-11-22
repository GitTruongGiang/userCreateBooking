import { Grid, IconButton, Link, Stack, Typography } from "@mui/material";
import { Link as routerLink } from "react-router-dom";
import React from "react";
import { Box } from "@mui/system";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

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
            Công ty
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
              nghề nghiệp
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
              Khám Phá
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
              Chúng ta làm việc như thế nào
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
              Tại sao du khách chọn Travel Booking
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
              Mã giảm giá TravelBooking
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
            Tiếp xúc
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
              Trợ giúp/Hỏi đáp
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
              chi nhánh
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
              Quảng cáo với chúng tôi
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
            Hơn
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
              Phí Hàng Không
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
              hãng hàng không
            </Link>
          </Stack>
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
