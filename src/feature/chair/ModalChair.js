import { Box, Button, Grid, Modal, TextField, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletedChair, listChair } from "./chairSlice";

const styleChairModal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

function ModalChair({ setOpenChairModal, openChairModal, dataChair }) {
  const handleCloseChair = () => setOpenChairModal(false);
  const dispatch = useDispatch();
  const { chairs } = useSelector((state) => state.chairs);
  const handleDeletedChair = (chairId) => {
    dispatch(deletedChair({ chairId, status: "none" }));
  };
  useEffect(() => {
    dispatch(listChair({ flightId: dataChair._id }));
  }, [dispatch, dataChair]);
  return (
    <div>
      <Modal
        open={openChairModal}
        onClose={handleCloseChair}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleChairModal}>
          <Grid container spacing={2} columns={24}>
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
                      sx={{ fontSize: "13px", height: "50px" }}
                      onClick={() => handleDeletedChair(chair._id)}
                    >
                      Bỏ người đặt
                    </Button>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}

export default ModalChair;
