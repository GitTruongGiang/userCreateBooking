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
import { getListCreateFlight } from "./flightSlice";
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

  useEffect(() => {
    dispatch(getListCreateFlight({ page, limit }));
  }, [dispatch, page, limit]);

  const { flights, count, totalPage } = useSelector((state) => state.flights);
  return (
    <>
      <Container maxWidth="lg">
        <Card
          sx={{
            height: "300px",
            padding: "20px",
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
                    sx={{ alignItems: "center" }}
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
                    <CardContent sx={{ display: "flex", alignItems: "center" }}>
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
                  <Button
                    sx={{ mr: 2, height: "30px" }}
                    variant="contained"
                    onClick={() => handleOpen(flight)}
                  >
                    Details
                    <ChevronRightIcon />
                  </Button>
                </Card>
              ))}
          </CardContent>
          <Pagination count={10} page={page} onChange={handleChange} />
        </Card>
      </Container>
      <ModalFlight open={open} setOpen={setOpen} modalFlight={modalFlight} />
    </>
  );
}

export default ListCreate;
