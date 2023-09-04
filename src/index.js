import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import store from "./redux/store";
import reportWebVitals from "./reportWebVitals";
import NotistackProvider from "./components/provider/NotistackProvider";
import MotionLazyContainer from "./components/animate/MotionLazyContainer";
import ThemeProvider from "./theme/index";
// ReactDOM.render(
//   <Provider store={store}>
//     <BrowserRouter>
//       <React.StrictMode>
//         <App />
//       </React.StrictMode>
//     </BrowserRouter>
//   </Provider>
//   ,
//   document.getElementById('root')
// );
// i18n

// scroll bar
import "simplebar/src/simplebar.css";

// lightbox
import "react-image-lightbox/style.css";

// slick-carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// lazy image
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/opacity.css";
import "react-lazy-load-image-component/src/effects/black-and-white.css";
import { HelmetProvider } from "react-helmet-async";
// @mui
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <HelmetProvider>
      <MotionLazyContainer>
        <ThemeProvider>
          <NotistackProvider>
            <BrowserRouter>
              {/* <React.StrictMode> */}
                <App />
              {/* </React.StrictMode> */}
            </BrowserRouter>
          </NotistackProvider>
        </ThemeProvider>
      </MotionLazyContainer>
    </HelmetProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
