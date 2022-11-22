import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Card, MenuItem, Stack, TextField } from "@mui/material";
import {
  DatePicker,
  DesktopTimePicker,
  LocalizationProvider,
  TimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { updateFlight } from "./flightSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { countrys } from "../../list";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: 300, xl: 400 },
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  borderRadius: "25px",
  p: 4,
};

function ModalUpdateFlight({
  openUpdateFlight,
  setOpenUpdateFlight,
  modalFlight,
  setOpen,
}) {
  const [fromDay, setFromDay] = useState(null);
  const [timeFrom, setTimeFrom] = useState(null);
  const [timeTo, setTimeTo] = useState(null);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();
  const handleClose = () => {
    setOpenUpdateFlight(false);
    setOpen(false);
  };
  const handleCloseUpdate = () => {
    setOpenUpdateFlight(false);
  };

  const onSubmit = async () => {
    if (from || timeFrom || timeTo || from || to || price) {
      dispatch(
        updateFlight({
          fromDay,
          from,
          to,
          timeFrom,
          timeTo,
          price,
          flightId: modalFlight._id,
        })
      );
      handleClose();
    } else {
      toast.error("không có dữ liệu cập nhập");
    }
  };
  return (
    <Modal
      open={openUpdateFlight}
      onClose={handleCloseUpdate}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box
          sx={{
            display: "grid",
            rowGap: 3,
            columnGap: 2,
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
            },
          }}
        >
          <TextField
            select
            fullWidth
            label="Xuất Phát"
            size="small"
            onChange={(event) => setFrom(event.target.value)}
            defaultValue={`${modalFlight.from}`.toUpperCase()}
            sx={{
              backgroundColor: "white",
              borderRadius: "8px",
              fontStyle: "italic",
            }}
          >
            {countrys.map((country) => (
              <MenuItem key={country.value} value={country.value}>
                {country.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            select
            fullWidth
            label="Điểm Đến"
            size="small"
            onChange={(event) => setTo(event.target.value)}
            defaultValue={`${modalFlight.to}`.toUpperCase()}
            sx={{
              backgroundColor: "white",
              borderRadius: "8px",
              fontStyle: "italic",
            }}
          >
            {countrys.map((country) => (
              <MenuItem key={country.value} value={country.value}>
                {country.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            fullWidth
            size="small"
            label="Giá Tiền"
            type="number"
            defaultValue={modalFlight.price}
            onChange={(event) => setPrice(event.target.value)}
            sx={{
              backgroundColor: "white",
              borderRadius: "8px",
              fontStyle: "italic",
            }}
          />

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              disablePast
              label="Ngày Xuất Phát"
              value={fromDay}
              onChange={(newValue) => {
                setFromDay(newValue.toDate());
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopTimePicker
              label="Thời Gian Xuất Phát"
              value={timeFrom}
              onChange={(newValue) => {
                setTimeFrom(newValue.toDate());
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
              label="Thời Gian Đến"
              value={timeTo}
              onChange={(newValue) => {
                setTimeTo(newValue.toDate());
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Box>

        <Stack spacing={3} alignItems="flex-end" sx={{ mt: 3 }}>
          <Button
            variant="contained"
            onClick={onSubmit}
            sx={{ ":hover": { backgroundColor: "#f44336" } }}
          >
            Thay Đổi Chuyến Bay
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
}

export default ModalUpdateFlight;
