import {
  Alert,
  Box,
  Button,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updatePlane } from "./planeSlice";
import { toast } from "react-toastify";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: 300, xl: 600 },
  bgcolor: "background.paper",
  border: "1px solid #000",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

function ModalPlane({ open, setOpen, dataPlane }) {
  const [namePlane, setNamePlane] = useState("");
  const [chairCount, setChairCount] = useState("");
  const [id, setId] = useState("");
  const dispatch = useDispatch();

  const handleClose = () => {
    setOpen(false);
    setId("");
  };
  const handleChangeName = (e) => {
    setNamePlane(e.target.value);
  };
  const handleChairCount = (e) => {
    setChairCount(e.target.value);
  };
  const handleUpdatePlane = async () => {
    if (namePlane || chairCount) {
      dispatch(
        updatePlane({
          planeId: dataPlane._id,
          namePlane: namePlane ? namePlane : dataPlane.name,
          chairCount: chairCount ? chairCount : dataPlane.chairCount,
        })
      );
    } else {
      toast.success(`không có dữ liệu cập nhập`);
    }
  };
  const handleId = () => {
    setId(dataPlane._id);
  };
  return (
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
          plane
        </Typography>

        <Stack
          direction="row"
          spacing={2}
          sx={{ justifyContent: "space-between", mt: 2 }}
        >
          <Box>
            <Stack spacing={2} direction="column">
              <TextField
                label="Name Plane"
                autoComplete="off"
                defaultValue={dataPlane.name}
                onChange={handleChangeName}
              />
              <TextField
                label="Code Plane"
                defaultValue={dataPlane.codePlane}
                InputProps={{ readOnly: true }}
              />
            </Stack>
          </Box>
          <Box>
            <Stack spacing={2} direction="column">
              <TextField
                label="Chair Count"
                type="number"
                autoComplete="off"
                defaultValue={dataPlane.chairCount}
                onChange={handleChairCount}
              />
              <Box sx={{ display: "flex", textAlign: "center" }}>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: 600,
                    textTransform: "capitalize",
                  }}
                >
                  belonging to airlines:
                </Typography>
                <Typography sx={{ ml: 1 }}>
                  {dataPlane.authorAirlines?.name}
                </Typography>
              </Box>
              {id ? <Alert severity="success">{id}</Alert> : ""}
              <Button
                variant="contained"
                sx={{ backgroundColor: "#e74c3c" }}
                onClick={handleId}
              >
                Get ID
              </Button>
              <Button variant="contained" onClick={handleUpdatePlane}>
                Update
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Modal>
  );
}

export default ModalPlane;
