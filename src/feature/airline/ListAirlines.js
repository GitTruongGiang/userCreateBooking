import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAirlines, getListCreateAirlines } from "./airlineSlice";

function ListAirlines() {
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = useState(10);

  const handleChange = (event, value) => {
    setPage(value);
  };
  const dispatch = useDispatch();

  const handleDeleteAirlines = async (airlineId) => {
    dispatch(deleteAirlines(airlineId));
  };
  useEffect(() => {
    dispatch(getListCreateAirlines({ page, limit }));
  }, [dispatch, page, limit]);

  const { airlines, count, totalPage } = useSelector((state) => state.airlines);
  return (
    <Container maxWidth="lg">
      <Card
        sx={{
          padding: {
            xs: "5px",
            sm: "10px",
            md: "15px",
            lg: "18px",
            xl: "20px",
          },
          boxShadow: "0 -2px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
        }}
      >
        <CardContent>
          <Typography sx={{ fontSize: "20px" }}>
            danh sach hang may bay
          </Typography>
          {airlines.length &&
            airlines.map((airline) => (
              <Card
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                key={airline._id}
              >
                <Stack
                  direction="row"
                  spacing={{ xs: 0, xl: 1 }}
                  sx={{
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <CardContent sx={{ display: "flex", alignItems: "center" }}>
                    <Typography
                      sx={{
                        fontWeight: 600,
                      }}
                    >
                      Name Airlines
                    </Typography>
                    :<Typography sx={{ ml: 1 }}>{airline.name}</Typography>
                  </CardContent>
                  <CardContent
                    style={{
                      display: "flex",
                      alignItems: "center",
                      paddingBottom: "16px",
                    }}
                  >
                    <Typography sx={{ fontWeight: 600 }}>
                      Count Plane
                    </Typography>
                    :
                    <Typography sx={{ ml: 1 }}>{airline.countPlane}</Typography>
                  </CardContent>
                </Stack>
                <Box sx={{ mr: 2 }}>
                  <Button
                    sx={{ height: "30px", backgroundColor: "#f64444" }}
                    variant="contained"
                    onClick={() => handleDeleteAirlines(airline._id)}
                  >
                    Deleted
                    <ChevronRightIcon />
                  </Button>
                </Box>
              </Card>
            ))}
        </CardContent>
        <Pagination count={totalPage} page={page} onChange={handleChange} />
      </Card>
    </Container>
  );
}

export default ListAirlines;
