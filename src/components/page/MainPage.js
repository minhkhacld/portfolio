import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import LoadingScreen from "../LoadingScreen";
import ScrollToTop from "../kits/animated/ScrollToTop";
import ScrollToTopBig from "../kits/animated/ScrollToTopBig";
import useScreenSize from "../kits/media/Device.Measuring";
import Sound from "../kits/media/Sound";
import { ColCenter } from "../kits/stucture/component.stucture";
import "./MainPage.css";
import Main from "./main/Main";
import NavBar from "./navBar/NavBar";
import ProjectMobileModal from "./projects/modal/ProjectMobile.Modal";


let delay = (function () {
  let timer = 1100;
  return function (callback, ms) {
    clearTimeout(timer);
    timer = setTimeout(callback, ms);
  };
})();

const MainPage = () => {
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    setLoading(true);
    delay(() => {
      setLoading(false);
    }, 1100);
  }, []);

  const location = useLocation();
  const path = location.pathname.split("/");
  const screenSize = useScreenSize();
  const store = useSelector((store) => store.Reducer);
  window.onscroll = function () {
    if (
      window.innerHeight + window.scrollY + 1000 >=
      document.body.scrollHeight
    ) {
      // you're at the bottom of the page
      const scrollBtn = document.getElementById("scroll-to-top-big-frame")
      if (scrollBtn) {
        scrollBtn.style.display = "flex";
      }
    } else {
      const scrollBtn = document.getElementById("scroll-to-top-big-frame")
      if (scrollBtn) {
        scrollBtn.style.display = "none";
      }
    }
  };
  window.addEventListener("load", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <div style={{ width: "100%", height: "100%" }}>
      {loading ? (
        // <PageTransition />
        <LoadingScreen />
      ) : (
        <ColCenter className="cv-container" id="cv-container">
          <NavBar />
          <Sound />
          {/* {store.isModalOpen && <ProjectMobileModal />} */}

          {screenSize.isXSmall && <ScrollToTop />}
          {!screenSize.isXSmall && path[path.length - 1] === "" && (
            <ScrollToTopBig />
          )}
          <ColCenter className="cv-content-container">
            <Main />
            {/* <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/about" element={<Home />} />
              <Route path="skill" element={<Skill />} />
              <Route path="projects" element={<Projects />} />
              <Route path="contact" element={<Contact />} />
              <Route path="/app-ads.txt" element={<Appads />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes> */}
          </ColCenter>
        </ColCenter>
      )}

      {store.isModalOpen && <ProjectMobileModal />}

    </div>
  );
};

export default MainPage;
