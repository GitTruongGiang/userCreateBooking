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
import { getListCreateAirlines } from "./airlineSlice";

function ListAirlines() {
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = useState(10);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListCreateAirlines({ page, limit }));
  }, [dispatch, page, limit]);

  const { airlines, count, totalPage } = useSelector((state) => state.airlines);
  console.log(airlines);
  return (
    <Container maxWidth="lg">
      <Card
        sx={{
          height: "300px",
          padding: "20px",
          boxShadow: "0 -2px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
        }}
      >
        <CardContent>
          <Typography sx={{ fontSize: "20px" }}>
            list tạo hang may bay
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
                  spacing={1}
                  sx={{ alignItems: "center" }}
                >
                  <CardContent sx={{ display: "flex", alignItems: "center" }}>
                    <Typography sx={{ fontWeight: 600 }}>
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
                  <Button sx={{ mr: 2, height: "30px" }} variant="contained">
                    Details
                    <ChevronRightIcon />
                  </Button>
                  <Button
                    sx={{ height: "30px", backgroundColor: "#f64444" }}
                    variant="contained"
                  >
                    Deleted
                    <ChevronRightIcon />
                  </Button>
                </Box>
              </Card>
            ))}
        </CardContent>
        <Pagination count={10} page={page} onChange={handleChange} />
      </Card>
    </Container>
  );
}

export default ListAirlines;
