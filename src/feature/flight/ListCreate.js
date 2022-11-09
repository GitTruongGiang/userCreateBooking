import {
  Button,
  Card,
  CardContent,
  Container,
  Pagination,
  Typography,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Box, Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletedFlight, getListCreateFlight } from "./flightSlice";
import { countrys } from "../../list";
import ModalFlight from "./ModalFlight";

function ListCreate() {
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = useState(10);
  const [modalFlight, setModalFlight] = useState({});
  const [open, setOpen] = React.useState(false);

  const handleOpen = (flight) => {
    setModalFlight(flight);
    setOpen(true);
  };

  const handleChange = (event, value) => {
    setPage(value);
  };

  const dispatch = useDispatch();

  const handleDeletedFlight = async (flightId) => {
    dispatch(deletedFlight(flightId));
  };
  useEffect(() => {
    dispatch(getListCreateFlight({ page, limit }));
  }, [dispatch, page, limit]);

  const { flights, count, totalPage } = useSelector((state) => state.flights);
  return (
    <>
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
            boxShadow:
              "0 -2px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
          }}
        >
          <CardContent>
            <Typography sx={{ fontSize: "20px" }}>
              list tạo chuyến bay
            </Typography>
            {flights.length &&
              flights.map((flight) => (
                <Card
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  key={flight.codePlane}
                >
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{ alignItems: "center", flexWrap: "wrap" }}
                  >
                    <CardContent sx={{ display: "flex", alignItems: "center" }}>
                      <Typography sx={{ fontWeight: 600 }}>
                        Name Airlines
                      </Typography>
                      :
                      <Typography sx={{ ml: 1 }}>
                        {flight.airlines.name}
                      </Typography>
                    </CardContent>
                    <CardContent
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginLeft: 0,
                      }}
                    >
                      <Typography sx={{ fontWeight: 600 }}>
                        Name Plane
                      </Typography>
                      :
                      <Typography sx={{ ml: 1 }}>
                        {flight.plane.name}
                      </Typography>
                    </CardContent>

                    <CardContent
                      style={{
                        display: "flex",
                        alignItems: "center",
                        paddingBottom: "16px",
                        marginLeft: 0,
                      }}
                    >
                      <Typography sx={{ fontWeight: 600 }}>
                        code Plane
                      </Typography>
                      :
                      <Typography sx={{ ml: 1 }}>
                        {flight.plane.codePlane}
                      </Typography>
                    </CardContent>
                  </Stack>
                  <Box sx={{ display: "flex" }}>
                    <Button
                      sx={{ mr: 1, mb: 1, height: "30px" }}
                      variant="contained"
                      onClick={() => handleOpen(flight)}
                    >
                      Details
                      <ChevronRightIcon />
                    </Button>
                    <Button
                      sx={{ mr: 2, height: "30px", backgroundColor: "#f64444" }}
                      variant="contained"
                      onClick={() => handleDeletedFlight(flight._id)}
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
      <ModalFlight open={open} setOpen={setOpen} modalFlight={modalFlight} />
    </>
  );
}

export default ListCreate;
