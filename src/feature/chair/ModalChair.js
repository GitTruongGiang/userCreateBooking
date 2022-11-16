import {
  Box,
  Button,
  Grid,
  Modal,
  Pagination,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { deletedChair, listChair } from "./chairSlice";

const styleChairModal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: 300, xl: 600 },
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  borderRadius: "25px",
  p: 4,
};

function ModalChair({ setOpenChairModal, openChairModal, dataChair }) {
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = useState(12);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const handleCloseChair = () => setOpenChairModal(false);
  const dispatch = useDispatch();
  const { chairs, count, totalPage } = useSelector((state) => state.chairs);
  const handeChair = (chair) => {
    if (chair.user) {
      dispatch(deletedChair({ chairId: chair._id, status: "none" }));
    } else {
      toast.error("không có dữ liệu cập nhập");
    }
  };
  useEffect(() => {
    dispatch(listChair({ flightId: dataChair._id, page, limit }));
  }, [dispatch, dataChair, page, limit]);
  return (
    <Modal
      open={openChairModal}
      onClose={handleCloseChair}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={styleChairModal}>
        <Grid container spacing={2} columns={12}>
          {chairs.map((chair) => {
            return (
              <Grid item xs={4} key={chair._id}>
                <Box>
                  <Typography>
                    Ghế: {chair.codeNumber}
                    {chair.codeString}
                  </Typography>
                  <Typography>người đặt: {chair.user?.name}</Typography>
                  <Button
                    variant="contained"
                    sx={{
                      fontSize: { xs: "10px", xl: "18px" },
                      height: "50px",
                      ":hover": {
                        backgroundColor: "#ef5350",
                        color: "white",
                      },
                    }}
                    onClick={() => handeChair(chair)}
                  >
                    Hủy người đặt
                  </Button>
                </Box>
              </Grid>
            );
          })}
        </Grid>
        <Pagination
          count={totalPage}
          page={page}
          onChange={handleChange}
          sx={{ mt: 1 }}
        />
      </Box>
    </Modal>
  );
}

export default ModalChair;
