import { Link as MuiLink, Box, Stack } from "@mui/material";
import React from "react";
import { FaBars } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Iconify from "../../Iconify";
import useScreenSize from "../../kits/media/Device.Measuring";
import "./NavBar.css";

const NavBar = () => {
  const navBarArr = [
    {
      path: "/",
      pathname: "",
      text: "About",
      id: "nav-home",
      sectionId: "home-section",
    },
    {
      path: "/skill",
      pathname: "skill",
      text: "My skill",
      id: "nav-skill",
      sectionId: "skill-section",
    },
    {
      path: "/projects",
      pathname: "projects",
      text: "Projects",
      id: "nav-projects",
      sectionId: "project-section",
    },
    {
      path: "/contact",
      pathname: "contact",
      text: "Contact",
      id: "nav-contact",
      sectionId: "contact-section",
    },
  ];

  const screenSize = useScreenSize();
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    setMenuOpen(screenSize.isXSmall ? false : true);
  }, [screenSize.isXSmall]);

  const _onOpenMenu = () => {
    setMenuOpen(!menuOpen);
  };

  //assigning location variable
  const location = useLocation();
  const navigate = useNavigate();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  // const _onSwitchRoute = (item) => {
  //   if (screenSize.isXSmall) {
  //     setMenuOpen(false);
  //   }

  //   navBarArr.forEach((d, index) => {
  //     const frame = document.getElementById(`${item.id}-${index}`);
  //     const navChild = document.getElementById(d.id);
  //     if (d.id === item.id) {
  //       navChild.style.color = "var(--lightBlue)";
  //     } else {
  //       navChild.style.color = "white";
  //       frame.style.backgroundColor = "var(--black)";
  //       frame.style.borderBottom = "none";
  //     }
  //   });
  // };
  const _onSwitchRoute = (item) => {
    if (screenSize.isXSmall) {
      setMenuOpen(false);
    }
    // const section = document.getElementById(item.sectionId);
    // section.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'start' });

    const section = document.getElementById(item.sectionId);
    let position = section.getBoundingClientRect();
    // scrolls to 20px above element
    window.scrollTo({
      left: position.left,
      top: position.top + window.scrollY - 50,
      behavior: "smooth",
    });
  };

  const _onGoToFirstPage = () => {
    navigate("/");
    if (screenSize.isXSmall) {
      setMenuOpen(false);
    }
  };

  let WIDTH = (window.screen.width * 0.8) / 2;
  let HEIGHT = (window.screen.height * 0.8) / 2;
  let TOTAL_LENGTH = WIDTH * 2 + HEIGHT * 2;

  const WrapperSVG = styled.svg`
    .shape {
      stroke-dasharray: ${!screenSize.isXSmall && !screenSize.isSmall
          ? WIDTH / 2
          : 0}
        ${TOTAL_LENGTH};
      stroke-dashoffset: -${WIDTH + HEIGHT / 2};
      stroke-width: 3px;
      fill: transparent;
      stroke: var(--lightBlue);
      border-bottom: ${screenSize.isXSmall ? "none" : "5px solid black"};
      transition: stroke-width 0.8s, stroke-dashoffset 0.8s,
        stroke-dasharray 0.8s;
    }
    &:hover .shape {
      stroke-width: 2px;
      stroke-dashoffset: 0;
      stroke-dasharray: ${TOTAL_LENGTH};
    }
    .navbar-active-link-text {
      fill: var(--lightBlue);
    }

    .navbar-link-text {
      fill: white;
    }
  `;
  return (
    // <div className="cv-nav-container">
    //   <div className="cv-nav-left">
    //     <div className="cv-nav-left-menu">
    //       <Box
    //         display={"flex"}
    //         justifyContent={"center"}
    //         alignItems={"center"}
    //         onClick={() => _onOpenMenu()}
    //         component={"span"}
    //       >
    //         <Iconify
    //           icon="mingcute:menu-fill"
    //           sx={{
    //             fontSize: {
    //               xs: 30,
    //               sm: 30,
    //             },
    //             color: "var(--lightBlue)",
    //           }}
    //         />
    //       </Box>
    //     </div>
    //     <div className="cv-nav-left-logo">
    //       <img
    //         className="cv-nav-left-logo-picture"
    //         src={require("../../../assets/picture/logo.png")}
    //         alt={"Logo"}
    //         onClick={() => _onGoToFirstPage()}
    //       />
    //     </div>
    //   </div>

    //   {menuOpen && (
    //     <div className="cv-nav-right">
    //       {navBarArr.map((item, index) => {
    //         return (
    //           <MuiLink
    //             key={index}
    //             // to={item.path}
    //             className={
    //               splitLocation[splitLocation.length - 1] === item.pathname
    //                 ? "navbar-active-link"
    //                 : "navbar-link"
    //             }
    //             id={`${item.id}-${index}`}
    //             onClick={() => _onSwitchRoute(item)}
    //             style={{ textDecoration: "none" }}
    //             component={"a"}
    //           >
    //             <WrapperSVG
    //               height="100%"
    //               width="100%"
    //               id={`${item.id}-${index}`}
    //             >
    //               <rect
    //                 className="shape"
    //                 x="5%"
    //                 y="10%"
    //                 height="80%"
    //                 width="90%"
    //               />
    //               <text
    //                 x="50%"
    //                 y="50%"
    //                 className={
    //                   splitLocation[splitLocation.length - 1] === item.pathname
    //                     ? "navbar-active-link-text"
    //                     : "navbar-link-text"
    //                 }
    //                 id={item.id}
    //                 dominantBaseline="middle"
    //                 textAnchor="middle"
    //               >
    //                 {item.text}
    //               </text>
    //             </WrapperSVG>
    //           </MuiLink>
    //         );
    //       })}
    //     </div>
    //   )}
    // </div>
    <Box className="cv-nav-container">
      <Stack className="cv-nav-left" direction={"row"} spacing={1}>
        <Box
          className="cv-nav-left-menu"
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          onClick={() => _onOpenMenu()}
          component={"span"}
          sx={{
            paddingLeft: "8px !important",
          }}
        >
          <Iconify
            icon="mingcute:menu-fill"
            sx={{
              fontSize: {
                xs: 30,
                sm: 30,
              },
              color: "var(--lightBlue)",
            }}
          />
        </Box>
        <Box className="cv-nav-left-logo">
          <img
            className="cv-nav-left-logo-picture"
            src={require("../../../assets/picture/logo.png")}
            alt={"Logo"}
            onClick={() => _onGoToFirstPage()}
          />
        </Box>
      </Stack>

      {menuOpen && (
        <div className="cv-nav-right">
          {navBarArr.map((item, index) => {
            return (
              <MuiLink
                key={index}
                // to={item.path}
                className={
                  splitLocation[splitLocation.length - 1] === item.pathname
                    ? "navbar-active-link"
                    : "navbar-link"
                }
                id={`${item.id}-${index}`}
                onClick={() => _onSwitchRoute(item)}
                style={{ textDecoration: "none" }}
                component={"a"}
              >
                <WrapperSVG
                  height="100%"
                  width="100%"
                  id={`${item.id}-${index}`}
                >
                  <rect
                    className="shape"
                    x="5%"
                    y="10%"
                    height="80%"
                    width="90%"
                  />
                  <text
                    x="50%"
                    y="50%"
                    className={
                      splitLocation[splitLocation.length - 1] === item.pathname
                        ? "navbar-active-link-text"
                        : "navbar-link-text"
                    }
                    id={item.id}
                    dominantBaseline="middle"
                    textAnchor="middle"
                  >
                    {item.text}
                  </text>
                </WrapperSVG>
              </MuiLink>
            );
          })}
        </div>
      )}
    </Box>
  );
};

export default NavBar;
