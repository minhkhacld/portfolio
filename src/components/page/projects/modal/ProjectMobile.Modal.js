import React from "react";
import { FaTimesCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../../../../redux/reducer";
import { ColCenter } from "../../../kits/stucture/component.stucture";
import Details from "./content/detail/Detail";
import General from "./content/general/General";
import "./Modal.css";
import Modal from "react-modal";
import { Backdrop, Box, Typography, Stack, Grid, Divider } from "@mui/material";
import { Popup, ScrollView } from "devextreme-react";
import Image from "../../../Image";
import moment from "moment";
import ProductDetailsCarousel from "../../../ProductDetailsCarousel";

// Modal.setAppElement("#root");
const ProjectMobileModal = () => {
  const dispatch = useDispatch();
  const store = useSelector((store) => store.Reducer);

  const closeModal = () => {
    dispatch(setModal({ isModalOpen: false, app: {} }));
    const scrollbtn = document.getElementById("scroll-to-top");
    scrollbtn.style.display = "flex";
  };

  return (
    // <ColCenter className="modal-background">
    //     <Modal
    //         isOpen={store.isModalOpen}
    //         // onAfterOpen={afterOpenModal}
    //         onRequestClose={() => closeModal()}
    //         className="modal-project-mobile"
    //         contentLabel="Example Modal"
    //     >
    //         <div className="modal-title">
    //             <div className="modal-title-text">Project details</div>
    //             <div className="close-btn">
    //                 <FaTimesCircle className="close-btn-icon" onClick={() => closeModal()} />
    //             </div>
    //         </div>
    //         <div className="modal-content">
    //             <General />
    //             <Details />
    //         </div>
    //     </Modal>

    // </ColCenter>

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
                  <Box w="100%" justifyContent={"center"} alignItem="center">
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
                    <Typography variant="body2" component={"div"}>
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
                    <Typography variant="body2" component={"div"}>
                      <Typography component={"span"} variant="subtitle1">
                        Description:
                      </Typography>
                      <Typography ml={1} component={"span"} variant="subtext2">
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
                        {moment(store.app.publishDate).format("YYYY, MMM-DD")}
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
                <Divider orientation="vertical" />
              </Grid>
              <Grid item xs={12} md={8}>
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <ProductDetailsCarousel store={store} />
                </Box>
              </Grid>
            </Grid>
          </Stack>
        </ScrollView>
      </Popup>
    </Box>
  );
};

export default ProjectMobileModal;
