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
import { getListCreatePlane } from "./planeSlice";
import ModalPlane from "./ModalPlane";

function ListPlane() {
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = useState(10);
  const [open, setOpen] = React.useState(false);
  const [dataPlane, setDataPlane] = useState("");
  const handleOpen = (plane) => {
    setDataPlane(plane._id);
    setOpen(true);
  };

  const handleChange = (event, value) => {
    setPage(value);
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
          height: "300px",
          padding: "20px",
          boxShadow: "0 -2px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
        }}
      >
        <CardContent>
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
                  sx={{ alignItems: "center" }}
                >
                  <CardContent sx={{ display: "flex", alignItems: "center" }}>
                    <Typography sx={{ fontWeight: 600 }}>
                      Name Planes
                    </Typography>
                    :<Typography sx={{ ml: 1 }}>{plane.name}</Typography>
                  </CardContent>
                  <CardContent
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Typography sx={{ fontWeight: 600 }}>Code Plane</Typography>
                    :<Typography sx={{ ml: 1 }}>{plane.codePlane}</Typography>
                  </CardContent>
                  <CardContent
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      paddingBottom: "16px",
                    }}
                  >
                    <Typography sx={{ fontWeight: 600 }}>
                      Chair Count
                    </Typography>
                    :<Typography sx={{ ml: 1 }}>{plane.chairCount}</Typography>
                  </CardContent>
                </Stack>
                <Box>
                  <Button
                    sx={{ mr: 1, height: "30px" }}
                    variant="contained"
                    onClick={() => handleOpen(plane)}
                  >
                    check Id
                    <ChevronRightIcon />
                  </Button>
                  <Button
                    sx={{ mr: 2, height: "30px", backgroundColor: "#f64444" }}
                    variant="contained"
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
