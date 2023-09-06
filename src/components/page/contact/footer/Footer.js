import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { FaEnvelope, FaMapMarked, FaMobileAlt } from "react-icons/fa";
import { RowLeft } from "../../../kits/stucture/component.stucture";
import SocialNetwork from "../network/SocialNetwork";
import "./Footer.css";

const Footer = () => {
  return (
    <Stack
      width="100%"
      height="100%"
      p={2}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Grid container columnSpacing={2} rowSpacing={2}>
        <Grid item xs={12} md={3}>
          <Box
            width="100%"
            height={"100%"}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <img
              src={require("../../../../assets/picture/logo.png")}
              alt="logo"
              className="footer-logo-picture"
              style={{ maxWidth: 70 }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Stack
            width="100%"
            height={"100%"}
            display="flex"
            justifyContent="flex-start"
          >
            <Typography variant="subtitle2" color={"var(--lightBlue)"}>
              Contact me via:
            </Typography>
            <Stack
              direction={"row"}
              spacing={2}
              justifyContent={"flex-start"}
              alignItems={"center"}
              className="footer-contact-media"
            >
              <FaEnvelope className="contact-media-icon" />
              <a className="contact-media-text" href="mailto:pmkha92@gmail.com">
                pmkha92@gmail.com
              </a>
            </Stack>
            <Stack
              direction={"row"}
              spacing={2}
              justifyContent={"flex-start"}
              alignItems={"center"}
              className="footer-contact-media"
            >
              <FaMobileAlt className="contact-media-icon" />
              <a className="contact-media-text" href="tel:+84355210716">
                +84355210716
              </a>
            </Stack>
            <Stack
              direction={"row"}
              spacing={2}
              justifyContent={"flex-start"}
              alignItems={"center"}
              className="footer-contact-media"
            >
              <FaMapMarked className="contact-media-icon" />
              <a
                className="contact-media-text"
                href="https://goo.gl/maps/tqDBgbc6t4qvt8668"
              >
                Cai Lay, Tien Giang, Vietnam
              </a>
            </Stack>
          </Stack>
        </Grid>

        <Grid item xs={12} md={4}>
          <Stack width="100%" height={"100%"} justifyContent="flex-start">
            <Typography variant="subtitle2" color={"var(--lightBlue)"} mb={2}>
              Follow me at:
            </Typography>
            <SocialNetwork />
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Footer;
