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
import { toast } from "react-toastify";
import { countrys } from "../../list";
import ModalChair from "../chair/ModalChair";
import { updateFlight } from "./flightSlice";
import ModalUpdateFlight from "./ModalUpdateFlight";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  borderRadius: "25px",
  width: { xl: 500 },
  p: 4,
};

function ModalFlight({ open, setOpen, modalFlight }) {
  const [dataChair, setDataChair] = useState();
  const [openChairModal, setOpenChairModal] = React.useState(false);
  const [openUpdateFlight, setOpenUpdateFlight] = React.useState(false);
  const handleOpenUpdateFlight = () => setOpenUpdateFlight(true);

  const handleOpenChair = () => {
    setDataChair(modalFlight);
    setOpenChairModal(true);
  };

  console.log(modalFlight);
  const handleClose = () => setOpen(false);
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
                fontSize: {
                  xs: "22px",
                  sm: "24px",
                  md: "26px",
                  lg: "28px",
                  xl: "30px",
                },
                fontWeight: 600,
                backgroundColor: "#29b6f6",
                fontStyle: "italic",
                padding: "20px 10px",
                mb: 3,
              }}
            />
          </Box>
          <Card
            sx={{
              borderRadius: "25px",
              p: 3,
              boxShadow:
                "0 -2px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
            }}
          >
            <Box sx={{ mb: 2 }}>
              <Typography sx={{ textAlign: "center", fontSize: "25px" }}>
                {modalFlight.airlines?.name}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Stack direction="row" spacing={1}>
                <Stack spacing={1}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
                      Nơi đi:
                    </Typography>
                    {countrys.map((country) => {
                      if (country.value === modalFlight.from?.toUpperCase()) {
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
                <Stack spacing={1}>
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
                  <Button variant="contained" onClick={handleOpenUpdateFlight}>
                    update
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Card>
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
      <ModalUpdateFlight
        openUpdateFlight={openUpdateFlight}
        setOpenUpdateFlight={setOpenUpdateFlight}
        modalFlight={modalFlight}
        setOpen={setOpen}
      />
    </div>
  );
}

export default ModalFlight;
