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
import { deletedPlane, getListCreatePlane } from "./planeSlice";
import ModalPlane from "./ModalPlane";

function ListPlane() {
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = useState(10);
  const [open, setOpen] = React.useState(false);
  const [dataPlane, setDataPlane] = useState("");
  const handleOpen = (plane) => {
    setDataPlane(plane);
    setOpen(true);
  };

  const handleChange = (event, value) => {
    setPage(value);
  };
  const handleDeletedPlane = async (planeId) => {
    dispatch(deletedPlane(planeId));
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListCreatePlane({ page, limit }));
  }, [dispatch, page, limit]);

  const { planes, count, totalPage } = useSelector((state) => state.planes);

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
        <CardContent sx={{ padding: { xs: "14px", xl: "16px" } }}>
          <Typography sx={{ fontSize: "20px" }}>danh sách máy bay</Typography>
          {planes.length &&
            planes.map((plane) => (
              <Card
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                key={plane.codePlane}
              >
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{ alignItems: "center", flexWrap: "wrap" }}
                >
                  <CardContent sx={{ display: "flex", alignItems: "center" }}>
                    <Typography sx={{ fontWeight: 600 }}>
                      Name Planes
                    </Typography>
                    :<Typography sx={{ ml: 1 }}>{plane.name}</Typography>
                  </CardContent>
                  <CardContent
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginLeft: 0,
                    }}
                  >
                    <Typography sx={{ fontWeight: 600 }}>Code Plane</Typography>
                    :<Typography sx={{ ml: 1 }}>{plane.codePlane}</Typography>
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
                      Chair Count
                    </Typography>
                    :<Typography sx={{ ml: 1 }}>{plane.chairCount}</Typography>
                  </CardContent>
                </Stack>
                <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                  <Button
                    sx={{ mr: 1, mb: 1, height: "30px" }}
                    variant="contained"
                    onClick={() => handleOpen(plane)}
                  >
                    DETAILS
                    <ChevronRightIcon />
                  </Button>
                  <Button
                    sx={{ mr: 2, height: "30px", backgroundColor: "#f64444" }}
                    variant="contained"
                    onClick={() => handleDeletedPlane(plane._id)}
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
      <ModalPlane open={open} setOpen={setOpen} dataPlane={dataPlane} />
    </Container>
  );
}

export default ListPlane;
