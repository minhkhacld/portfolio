import { Box, Stack } from "@mui/material";
import React from "react";
import github from "../../../../assets/picture/contact/github.png";
import instagram from "../../../../assets/picture/contact/instagram.png";
import Image from "../../../Image";
import facebook from "../.././../../assets/picture/contact/facebook.png";

import "./SocialNetwork.css";

const SocialNetwork = () => {
  const social = [
    {
      name: "Facebook",
      piture: facebook,
      link: "https://www.facebook.com/phamminh.kha/",
    },
    {
      name: "Instagram",
      piture: instagram,
      link: "https://www.instagram.com/minhkhacld/?hl=en",
    },
    { name: "Github", piture: github, link: "https://github.com/minhkhacld" },
  ];

  return (
    <Stack
      justifyContent={"flex-start"}
      alignItems={"center"}
      display={"flex"}
      direction="row"
      spacing={4}
      height="100%"
    >
      {social.map((item, index) => {
        return (
          <Box
            component={"a"}
            href={item.link}
            key={item?.name || index}
            target={"_blank"}
            sx={{ height: 40, display: "flex" }}
          >
            <Image src={item.piture} alt={item.name} />
          </Box>
        );
      })}
    </Stack>
  );
};

export default SocialNetwork;
