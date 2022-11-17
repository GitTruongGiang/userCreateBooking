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
import ModalAirlines from "./ModalAirlines";
import ModalDeletedAll from "./ModalDeletedAll";

function ListAirlines() {
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = useState(10);
  const [dataAirline, setDataAirline] = useState();
  const [open, setOpen] = React.useState(false);
  const [openDeleted, setOpenDeleted] = React.useState(false);
  const [id, setId] = useState("");
  const handleOpenDeleted = (airlineId) => {
    setOpenDeleted(true);
    setId(airlineId);
  };

  const handleOpen = (airline) => {
    setDataAirline(airline);
    setOpen(true);
  };

  const handleChange = (event, value) => {
    setPage(value);
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListCreateAirlines({ page, limit }));
  }, [dispatch, page, limit]);

  const { airlines, count, totalPage } = useSelector((state) => state.airlines);
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
            <Typography sx={{ fontSize: "20px", textTransform: "capitalize" }}>
              danh sách máy bay
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
                        Tên Hãng
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
                        Số Máy Bay
                      </Typography>
                      :
                      <Typography sx={{ ml: 1 }}>
                        {airline.countPlane}
                      </Typography>
                    </CardContent>
                  </Stack>
                  <Box sx={{ mr: 2, display: "flex", flexWrap: "wrap" }}>
                    <Button
                      sx={{ mr: 1, mb: 1, height: "30px" }}
                      variant="contained"
                      onClick={() => handleOpen(airline)}
                    >
                      Chi tiết
                      <ChevronRightIcon />
                    </Button>
                    <Button
                      sx={{ height: "30px", backgroundColor: "#f64444" }}
                      variant="contained"
                      onClick={() => handleOpenDeleted(airline._id)}
                    >
                      Xóa
                      <ChevronRightIcon />
                    </Button>
                  </Box>
                </Card>
              ))}
          </CardContent>
          <Pagination count={totalPage} page={page} onChange={handleChange} />
        </Card>
      </Container>
      <ModalAirlines open={open} setOpen={setOpen} dataAirline={dataAirline} />
      <ModalDeletedAll
        openDeleted={openDeleted}
        setOpenDeleted={setOpenDeleted}
        airlineId={id}
      />
    </>
  );
}

export default ListAirlines;
