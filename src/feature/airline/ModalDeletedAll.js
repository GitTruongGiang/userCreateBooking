import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useDispatch } from "react-redux";
import { deleteAirlines } from "./airlineSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "25px",
};

function ModalDeletedAll({ openDeleted, setOpenDeleted, airlineId }) {
  const handleClose = () => setOpenDeleted(false);
  const dispatch = useDispatch();
  const handleDeleteAirlines = async () => {
    dispatch(deleteAirlines(airlineId));
  };
  return (
    <Modal
      open={openDeleted}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{ textAlign: "center", fontWeight: 600 }}
        >
          bạn có chắc chứ
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          nếu xóa! thì tất cả máy bay, chuyến bay, liên quan đến hãng hàng không
          sẽ không còn
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          <Button
            variant="contained"
            sx={{ backgroundColor: "red" }}
            onClick={handleClose}
          >
            No
          </Button>
          <Button variant="contained" onClick={handleDeleteAirlines}>
            Ok
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default ModalDeletedAll;
