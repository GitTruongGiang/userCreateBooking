import { LoadingButton } from "@mui/lab";
import {
  Box,
  Button,
  Card,
  Chip,
  Container,
  Divider,
  Grid,
  MenuItem,
  Modal,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import {
  DatePicker,
  DesktopTimePicker,
  LocalizationProvider,
  TimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { countrys } from "../../list";
import ModalChair from "../chair/ModalChair";
import { updateFlight } from "./flightSlice";

const style = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
};

function ModalFlight({ open, setOpen, modalFlight }) {
  const [dataChair, setDataChair] = useState();
  const [openChairModal, setOpenChairModal] = React.useState(false);
  const handleOpenChair = () => {
    setDataChair(modalFlight);
    setOpenChairModal(true);
  };

  const [fromDay, setFromDay] = useState(dayjs(`${modalFlight.fromDay}`));
  const [timeFrom, setTimeFrom] = useState(dayjs(`${modalFlight.timeFrom}`));
  const [timeTo, setTimeTo] = useState(dayjs(`${modalFlight.timeTo}`));
  const [from, setFrom] = useState(`${modalFlight.from}`.toUpperCase());
  const [to, setTo] = useState(`${modalFlight.to}`.toUpperCase());
  const [price, setPrice] = useState();

  useEffect(() => {
    const textFrom = `${modalFlight.from}`;
    const textTo = `${modalFlight.to}`;
    setFromDay(dayjs(`${modalFlight.fromDay}`));
    setTimeFrom(dayjs(`${modalFlight.timeFrom}`));
    setTimeTo(dayjs(`${modalFlight.timeTo}`));
    setFrom(textFrom.toUpperCase());
    setTo(textTo.toUpperCase());
    setPrice(`${modalFlight.price}`);
  }, [modalFlight]);

  console.log(modalFlight);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  const onSubmit = async () => {
    dispatch(
      updateFlight({
        fromDay: fromDay.toDate(),
        from,
        to,
        timeFrom: timeFrom.toDate(),
        timeTo: timeTo.toDate(),
        price: Number(price),
        flightId: modalFlight._id,
      })
    );
    handleClose();
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ textAlign: "center" }}>
            <Chip
              label="Infomation Flight"
              sx={{
                color: "white",
                fontSize: "30px",
                fontWeight: 600,
                backgroundColor: "#29b6f6",
                fontStyle: "italic",
                padding: "20px 10px",
                mb: 3,
              }}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Grid container spacing={2} columns={16}>
              <Grid item xs={8}>
                <Card
                  sx={{
                    p: 3,
                    boxShadow:
                      "0 -2px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
                  }}
                >
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
                      label="From"
                      size="small"
                      onChange={(event) => setFrom(event.target.value)}
                      value={from}
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
                      label="To"
                      size="small"
                      onChange={(event) => setTo(event.target.value)}
                      value={to}
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
                      label="Price"
                      value={price}
                      onChange={(event) => setPrice(event.target.value)}
                      sx={{
                        backgroundColor: "white",
                        borderRadius: "8px",
                        fontStyle: "italic",
                      }}
                    />

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        label="From Day"
                        value={fromDay}
                        onChange={(newValue) => {
                          setFromDay(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DesktopTimePicker
                        label="Time From"
                        value={timeFrom}
                        onChange={(newValue) => {
                          setTimeFrom(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <TimePicker
                        label="Time To"
                        value={timeTo}
                        onChange={(newValue) => {
                          setTimeTo(newValue);
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
                      Update flight
                    </Button>
                  </Stack>
                </Card>
              </Grid>
              <Grid item xs={8}>
                <Paper
                  elevation={12}
                  sx={{ padding: "20px", borderRadius: "25px" }}
                >
                  <Box sx={{ padding: "10px", mb: 2 }}>
                    <Typography sx={{ textAlign: "center", fontSize: "25px" }}>
                      {modalFlight.airlines?.name}
                    </Typography>
                  </Box>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Stack spacing={2}>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
                          Nơi đi:
                        </Typography>
                        {countrys.map((country) => {
                          if (
                            country.value === modalFlight.from?.toUpperCase()
                          ) {
                            return (
                              <Typography sx={{ ml: 1 }} key={country.value}>
                                {country.label}
                              </Typography>
                            );
                          }
                        })}
                      </Box>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
                          Nơi đến:
                        </Typography>
                        {countrys.map((country) => {
                          if (country.value === modalFlight.to?.toUpperCase()) {
                            return (
                              <Typography sx={{ ml: 1 }} key={country.value}>
                                {country.label}
                              </Typography>
                            );
                          }
                        })}
                      </Box>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
                          Ngày xuất phát:
                        </Typography>
                        <Typography sx={{ ml: 1 }}>
                          {new Date(modalFlight.fromDay).getDate()}
                          {"/"}
                          {new Date(modalFlight.fromDay).getMonth()}
                          {"/"}
                          {new Date(modalFlight.fromDay).getFullYear()}
                        </Typography>
                      </Box>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
                          Thời gian đi:
                        </Typography>
                        <Typography sx={{ ml: 1 }}>
                          {new Date(modalFlight.timeFrom).getHours() < 10
                            ? `0${new Date(modalFlight.timeFrom).getHours()}`
                            : new Date(modalFlight.timeFrom).getHours()}
                          :
                          {new Date(modalFlight.timeFrom).getMinutes() < 10
                            ? `0${new Date(modalFlight.timeFrom).getMinutes()}`
                            : new Date(modalFlight.timeFrom).getMinutes()}
                        </Typography>
                      </Box>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
                          Thời gian đến:
                        </Typography>
                        <Typography sx={{ ml: 1 }}>
                          {new Date(modalFlight.timeTo).getHours() < 10
                            ? `0${new Date(modalFlight.timeTo).getHours()}`
                            : new Date(modalFlight.timeTo).getHours()}
                          :
                          {new Date(modalFlight.timeTo).getMinutes() < 10
                            ? `0${new Date(modalFlight.timeTo).getMinutes()}`
                            : new Date(modalFlight.timeTo).getMinutes()}
                        </Typography>
                      </Box>
                    </Stack>
                    <Divider orientation="vertical" flexItem />
                    <Stack spacing={2}>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
                          Giá vé:
                        </Typography>
                        <Typography sx={{ ml: 1 }}>
                          ${Math.ceil(modalFlight.price / 21)}
                        </Typography>
                      </Box>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
                          Hãng máy bay:
                        </Typography>
                        <Typography sx={{ ml: 1 }}>
                          {modalFlight.plane?.name}
                        </Typography>
                      </Box>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
                          Mã hiệu:
                        </Typography>
                        <Typography sx={{ ml: 1 }}>
                          {modalFlight.codePlane}
                        </Typography>
                      </Box>
                      <Button variant="contained" onClick={handleOpenChair}>
                        Xem Ghế
                      </Button>
                    </Stack>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Modal>
      {dataChair ? (
        <ModalChair
          openChairModal={openChairModal}
          setOpenChairModal={setOpenChairModal}
          dataChair={dataChair}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default ModalFlight;
