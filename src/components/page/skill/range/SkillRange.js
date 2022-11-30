import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import styled, { keyframes } from "styled-components";
import {
  RowLeft
} from "../../../kits/stucture/component.stucture";
import "./SkillRange.css";

const SkillRange = () => {
  const animation_Fe = keyframes`
    from{width:0%}
    to{width:80%}
    `;
  const animation_Be = keyframes`
    from{width:0%}
    to{width:55%}
    `;
  const animation_Mb = keyframes`
    from{width:0%}
    to{width:80%}
    `;
  const WrapperFE = styled.div`
    background-color: var(--organ);
    animation: ${animation_Fe};
    animation-duration: 2s;
    animation-delay: 0.5s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
  `;
  const WrapperBE = styled.div`
    background-color: red;
    animation: ${animation_Be};
    animation-duration: 2s;
    animation-delay: 0.5s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
  `;

  const WrapperMB = styled.div`
    background-color: green;
    animation: ${animation_Mb};
    animation-duration: 2s;
    animation-delay: 1s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
  `;

  return (
    <Box sx={{ width: "100%" }} p={2}>
      <Box width={"100%"} minHeight={100} mb={3}>
        <Grid container columnSpacing={2} rowSpacing={2}>
          <Grid item xs={12} md={4}>
            <Stack>
              <RowLeft className="progress-group-text">Front End</RowLeft>
              <RowLeft className="progress-group-bar">
                <WrapperFE className="progress-bar-inner"></WrapperFE>
              </RowLeft>
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <Stack>
              <RowLeft className="progress-group-text">Back End</RowLeft>
              <RowLeft className="progress-group-bar">
                <WrapperBE className="progress-bar-inner"></WrapperBE>
              </RowLeft>
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <Stack>
              <RowLeft className="progress-group-text">Mobile</RowLeft>
              <RowLeft className="progress-group-bar">
                <WrapperMB className="progress-bar-inner"></WrapperMB>
              </RowLeft>
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <Stack width={"100%"}>
        <Grid container columnSpacing={2} rowSpacing={2}>
          <Grid item sm={12} md={4}>
            <Stack
              sx={{
                backgroundColor: " #2a2a2a",
                color: "white",
              }}
              p={2}
            >
              <RowLeft className="exp-title">Front End Developer</RowLeft>
              <RowLeft className="exp-company">Motives Viet Nam</RowLeft>
              <RowLeft className="exp-time">2021, Jul - Now</RowLeft>
              <p className="exp-description">
                - Key person in build web UI with high performance, scalable
                components for company websites and mobile apps using ReactJS
                technologies.
              </p>
              <p className="exp-description">
                - Build reusable components and front-end libraries for future
                use.
              </p>
              <p className="exp-description">
                - Assist in improving app architectures. Explore existing
                systems, determines areas of maintainability scalability
                extensibility.
              </p>
            </Stack>
          </Grid>
          <Grid item sm={12} md={4}>
            <Stack
              sx={{
                backgroundColor: " #2a2a2a",
                color: "white",
              }}
              p={2}
            >
              <RowLeft className="exp-title">Software Developer</RowLeft>
              <RowLeft className="exp-company">Bodynits Tien Giang</RowLeft>
              <RowLeft className="exp-time">2021 - 2022, Jul</RowLeft>
              <p className="exp-description">
                - Participate in analysis, design and product development using
                ReactJS, NodeJS.
              </p>
              <p className="exp-description">
                - Build high performance, scalable components for company
                websites.
              </p>
              <p className="exp-description">
                - Participate in designing and building application.
              </p>
              <p className="exp-description">
                - Develop new user-facing features using JavaScript and ReactJS
                that meet large number of users.
              </p>
              <p className="exp-description">
                - Build reusable components and front-end libraries for future
                use.
              </p>
              <p className="exp-description">
                - Assist in improving app architectures. Explore existing
                systems, determines areas of maintainability scalability
                extensibility.
              </p>
            </Stack>
          </Grid>

          <Grid item sm={12} md={4}>
            {/* <Col className="exp-job"> */}
            <Stack
              sx={{
                backgroundColor: " #2a2a2a",
                color: "white",
              }}
              p={2}
            >
              <RowLeft className="exp-title">Industrial Engineer</RowLeft>
              <RowLeft className="exp-company">
                Hansae TG - Premier Global VN - Techtronic Industry
              </RowLeft>
              <RowLeft className="exp-time">2015 - 2021</RowLeft>
              <p className="exp-description">
                - Create Work instruction, Layout, Equipment arrangement, Work
                flow for Mass production, train production team how to build
                product, control WIP.
              </p>
              <p className="exp-description">
                - Run engineering build & pilot production to build new samples.
                Define manpower, output and ST BOM of new products.
              </p>
              <p className="exp-description">
                - Execute time study & improve LOB for production line,
                continuously do improvement projects to increase efficiency &
                save the cost.
              </p>
              <p className="exp-description">
                - With{" "}
                <strong style={{ color: "var(--lightBlue)" }}>ambitious</strong>{" "}
                to improve manufacturing processes. I have{" "}
                <strong style={{ color: "var(--lightBlue)" }}>
                  learned programming
                </strong>{" "}
                and{" "}
                <strong style={{ color: "var(--lightBlue)" }}>
                  started to build
                </strong>{" "}
                small projects during this period time to support production
                such as: Scan machine QR code, Production output tracking,
                Change over tracking app...
              </p>
            </Stack>
            {/* </Col> */}
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};

export default SkillRange;
