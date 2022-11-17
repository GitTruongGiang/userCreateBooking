import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/system";
import { Button, Stack, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { updateAirline } from "./airlineSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: 300, xl: 400 },
  backgroundColor: "white",
  border: "1px solid #000",
  boxShadow: 24,
  borderRadius: "25px",
  p: 4,
};

function ModalAirlines({ open, setOpen, dataAirline }) {
  const [nameAirline, setNameAirline] = useState("");
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/listPlanesOfAirlines/${dataAirline._id}`);
  };
  const dispatch = useDispatch();
  const handleChangeName = (e) => {
    setNameAirline(e.target.value);
  };
  const handleUpdateAirline = () => {
    if (nameAirline) {
      dispatch(updateAirline({ airlineId: dataAirline._id, nameAirline }));
    } else {
      toast.error(`không có dữ liệu cập nhập`);
    }
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{
              textAlign: "center",
              textTransform: "uppercase",
              fontSize: {
                xs: "1rem",
                sm: "1.1rem",
                md: "1.15rem",
                lg: "1.2rem",
                xl: "1.25rem",
              },
              fontWeight: 600,
            }}
          >
            Hãng Hàng Không
          </Typography>

          <Stack
            direction="row"
            spacing={2}
            sx={{ justifyContent: "space-between", mt: 2 }}
          >
            <Box>
              <Stack spacing={2} direction="column">
                <TextField
                  label="Tên Hãng"
                  autoComplete="off"
                  defaultValue={dataAirline?.name}
                  onChange={handleChangeName}
                />
                <TextField
                  label="Số Máy Bay"
                  type="number"
                  defaultValue={dataAirline?.countPlane}
                  InputProps={{ readOnly: true }}
                />
              </Stack>
            </Box>
            <Box>
              <Stack spacing={2} direction="column">
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#e74c3c",
                    textTransform: "capitalize",
                  }}
                  onClick={handleNavigate}
                >
                  Danh Sách Máy Bay
                </Button>
                <Button
                  variant="contained"
                  onClick={handleUpdateAirline}
                  sx={{ textTransform: "capitalize" }}
                >
                  Thay Đổi
                </Button>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Modal>
    </>
  );
}

export default ModalAirlines;
