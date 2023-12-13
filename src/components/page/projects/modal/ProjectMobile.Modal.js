import { Box, Grid, Stack, Typography } from "@mui/material";
import { Popup, ScrollView } from "devextreme-react";
import moment from "moment";
import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../../../../redux/reducer";
import Image from "../../../Image";
import ProductDetailsCarousel from "../../../ProductDetailsCarousel";
import "./Modal.css";

const ProjectMobileModal = () => {
  const dispatch = useDispatch();
  const store = useSelector((store) => store.Reducer);

  const closeModal = () => {
    dispatch(setModal({ isModalOpen: false, app: {} }));
    const scrollbtn = document.getElementById("scroll-to-top");
    if (scrollbtn) {
      scrollbtn.style.display = "flex";
    }
  };

  return (
    <Box width={"100%"} height="100%">
      <Popup
        visible={store.isModalOpen}
        onHiding={closeModal}
        dragEnabled={false}
        hideOnOutsideClick={false}
        showCloseButton
        showTitle
        title={"App details"}
        fullScreen
        hideOnParentScroll={false}
        style={{
          zIndex: 1000000,
        }}
      >
        <ScrollView width="100%" height="100%">
          <Stack direction={"row"} w="100%" height={"100%"} p={1}>
            <Grid container>
              <Grid item xs={12} md={4} rowSpacing={2} columnSpacing={2}>
                <Stack
                  justifyContent="flex-start"
                  width={"100%"}
                  height={"100%"}
                  spacing={2}
                >
                  <Box w="100%" justifyContent={"center"} alignItems="center">
                    <Image
                      src={store.app.icon}
                      alt={store.app.title}
                      sx={{ width: 60, height: 60 }}
                    />
                  </Box>
                  <Stack
                    direction={"row"}
                    display="flex"
                    justifyContent={"flex-start"}
                    alignItems={"flex-start"}
                  >
                    <Typography variant="body2" component={"div"} >
                      <Typography component={"span"} variant="subtitle1">
                        App name:
                      </Typography>
                      <Typography ml={1} component={"span"} variant="subtext2">
                        {store.app.appName}
                      </Typography>
                    </Typography>
                  </Stack>

                  <Stack
                    direction={"row"}
                    display="flex"
                    justifyContent={"flex-start"}
                    alignItems={"flex-start"}
                  >
                    <Typography variant="body2" component={"span"} whiteSpace={'pre-wrap'}>
                      <Typography component={"span"} variant="subtitle1">
                        Description:
                      </Typography>
                      <Typography ml={1} component={"span"} variant="subtext2" whiteSpace={'pre-wrap'}
                      >
                        {store.app.des}
                      </Typography>
                    </Typography>
                  </Stack>

                  <Stack
                    direction={"row"}
                    display="flex"
                    justifyContent={"flex-start"}
                    alignItems={"flex-start"}
                  >
                    <Typography variant="body2" component={"div"}>
                      <Typography component={"span"} variant="subtitle1">
                        Technologies & Tools:
                      </Typography>
                      <Typography ml={1} component={"span"} variant="subtext2">
                        {store.app.details}
                      </Typography>
                    </Typography>
                  </Stack>

                  <Stack
                    direction={"row"}
                    display="flex"
                    justifyContent={"flex-start"}
                    alignItems={"flex-start"}
                  >
                    <Typography variant="body2" component={"div"}>
                      <Typography component={"span"} variant="subtitle1">
                        Published date:
                      </Typography>
                      <Typography ml={1} component={"span"} variant="subtext2">
                        {store.app.publishDate !== "TBD"
                          ? moment(store.app.publishDate).format("YYYY, MMM-DD")
                          : store.app.publishDate || "TBD"}
                      </Typography>
                    </Typography>
                  </Stack>
                  <Stack
                    direction={"row"}
                    display="flex"
                    justifyContent={"flex-start"}
                    alignItems={"flex-start"}
                  >
                    <Typography variant="body2" component={"div"}>
                      <Typography component={"span"} variant="subtitle1">
                        Project type:
                      </Typography>
                      <Typography ml={1} component={"span"} variant="subtext2">
                        {store.app.projectType}
                      </Typography>
                    </Typography>
                  </Stack>

                  {store?.app?.playStore !== "" && store?.app?.playStore ? (
                    <Stack
                      direction={"row"}
                      display="flex"
                      justifyContent={"flex-start"}
                      alignItems={"flex-start"}
                    >
                      <Typography variant="body2" component={"div"}>
                        <Typography component={"span"} variant="subtitle1">
                          Play store:
                        </Typography>
                        <Typography
                          ml={1}
                          component={"a"}
                          href={store.app.playStore}
                          variant="subtext2"
                          target={"_blank"}
                        >
                          {store.app.playStore}
                        </Typography>
                      </Typography>
                    </Stack>
                  ) : null}
                  {store?.app?.appStore !== "" && store?.app?.appStore ? (
                    <Stack
                      direction={"row"}
                      display="flex"
                      justifyContent={"flex-start"}
                      alignItems={"flex-start"}
                    >
                      <Typography variant="body2" component={"div"}>
                        <Typography component={"span"} variant="subtitle1">
                          App store:
                        </Typography>
                        <Typography
                          ml={1}
                          component={"a"}
                          href={store.app.appStore}
                          variant="subtext2"
                          target={"_blank"}
                        >
                          {store.app.appStore}
                        </Typography>
                      </Typography>
                    </Stack>
                  ) : null}
                  {store?.app?.website !== "" && store?.app?.website ? (
                    <Stack
                      direction={"row"}
                      display="flex"
                      justifyContent={"flex-start"}
                      alignItems={"flex-start"}
                    >
                      <Typography variant="body2" component={"div"}>
                        <Typography component={"span"} variant="subtitle1">
                          Website:
                        </Typography>
                        <Typography
                          ml={1}
                          component={"a"}
                          href={store.app.website}
                          variant="subtext2"
                          target={"_blank"}
                        >
                          {store.app.website}
                        </Typography>
                      </Typography>
                    </Stack>
                  ) : null}
                </Stack>
                {/* <Divider orientation="vertical" /> */}
              </Grid>
              <Grid item xs={12} md={8}>
                <Box
                  sx={{
                    width: "100%",
                    height: "85vh",
                    justifyContent: "center",
                    alignItems: "center",
                    p: 2,
                    mt: { xs: 2, sm: 0 },
                    // backgroundColor: (theme) => theme.palette.grey[200],
                  }}
                >
                  {store?.app.picture.length > 0 && (
                    <ProductDetailsCarousel images={store.app.picture} />
                  )}
                </Box>
              </Grid>
            </Grid>
          </Stack>
        </ScrollView>
      </Popup>
    </Box>
  );
};

// export default memo(ProjectMobileModal);
export default ProjectMobileModal;
