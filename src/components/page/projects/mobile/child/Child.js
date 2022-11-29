import React from "react";
import { useDispatch } from "react-redux";
import { setModal } from "../../../../../redux/reducer";
import "./Child.css";
import { Box, Typography, useTheme } from "@mui/material";

const Child = ({ app }) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const _onOpenModal = (app) => {
    dispatch(setModal({ isModalOpen: true, app: app }));
    const scrollbtn = document.getElementById("scroll-to-top");
    scrollbtn.style.display = "none";
  };

  return (
    <div className="mobile-child">
      <Box sx={{ width: "100%", overflow: "hidden", position: "relative" }}>
        {!app?.isNew ? null : (
          <Box
            sx={{
              position: "absolute",
              top: 10,
              left: 10,
              zIndex: 10000000,
              backgroundColor: theme.palette.error.main,
              width: "auto",
              borderRadius: 10,
              px: 2,
              py: 1,
            }}
          >
            <Typography variant="body1" bold color={"white"}>
              Comming Soon
            </Typography>
          </Box>
        )}
        <img src={app.feature} className="mobile-child-image" alt={app.title} />
      </Box>

      <div className="mobile-child-circle" onClick={() => _onOpenModal(app)}>
        <div className="child-circle-text">View project</div>
      </div>
    </div>
  );
};

export default Child;
