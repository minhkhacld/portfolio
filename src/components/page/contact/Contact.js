import axios from "axios";
import React from "react";
import { useSnackbar } from "notistack";
import { useLocation } from "react-router-dom";
import Sending from "../../kits/animated/sending";
import {
  ColCenter,
  ColLeft,
  RowCenter,
} from "../../kits/stucture/component.stucture";
import "./Contact.css";
import Footer from "./footer/Footer";
// import EarthRound from './map/Earth';
// import useScreenSize from '../../kits/media/Device.Measuring';

const Contact = () => {
  // hooks
  const { enqueueSnackbar } = useSnackbar();

  const [user, setUser] = React.useState({
    name: "",
    errorName: false,
    email: "",
    errorEmail: false,
    text: "",
    errorText: false,
  });

  const [errorMsg, setErrorMsg] = React.useState(false);
  const [sending, setSending] = React.useState(0);
  const location = useLocation();
  const path = location.pathname.split("/");

  // const screenSize = useScreenSize();

  //Function
  const _onChangeUserName = (e) => {
    setUser({
      ...user,
      name: e.target.value,
    });
  };

  const _onBlurUserName = (e) => {
    const scrollbtn = document.getElementById("scroll-to-top");
    if (scrollbtn === undefined || scrollbtn === null) return
    scrollbtn.style.display = "flex";
    if (e.target.value !== "") {
      setUser({ ...user, errorName: false });
    } else {
      setUser({ ...user, errorName: true });
    }
  };

  const _onChangeEmail = (e) => {
    setUser({
      ...user,
      email: e.target.value,
    });
  };
  const _onBlurEmail = (e) => {
    const scrollbtn = document.getElementById("scroll-to-top");
    if (scrollbtn === undefined || scrollbtn === null) return
    scrollbtn.style.display = "flex";
    if (e.target.value !== "") {
      setUser({ ...user, errorEmail: false });
    } else {
      setUser({ ...user, errorEmail: true });
    }
  };

  const _onChangeText = (e) => {
    setUser({
      ...user,
      text: e.target.value,
    });
  };
  const _onBlurText = (e) => {
    const scrollbtn = document.getElementById("scroll-to-top");
    if (scrollbtn === undefined || scrollbtn === null) return
    scrollbtn.style.display = "flex";
    if (e.target.value !== "") {
      setUser({ ...user, errorText: false });
    } else {
      setUser({ ...user, errorText: true });
    }
  };

  const _onSendMessage = async () => {
    setSending(1);
    if (!user.errorEmail && !user.errorName && !user.errorText) {
      let data = {
        sheetName: "Message from users",
        sheetUrl: process.env.REACT_APP_API_SHEETS,
        columns: [
          {
            title: "Name",
            value: user.name,
          },
          {
            title: "Email",
            value: user.email,
          },
          {
            title: "Message",
            value: user.text,
          },
        ],
      };
      await axios
        .post(
          `${process.env.REACT_APP_API_SEND_MESSAGE}`,
          { data: data },
          {
            headers: {
              "Content-Type": "text/plain;charset=utf-8",
            },
          }
        )
        .then(async (response) => {
          // console.log(response);
          if (response.data.code === 1) {
            setSending(2);
            enqueueSnackbar("Message has been sent!", {
              variant: "success",
              anchorOrigin: {
                horizontal: "center",
                vertical: "bottom",
              },
            });
            setUser({
              name: "",
              errorName: false,
              email: "",
              errorEmail: false,
              text: "",
              errorText: false,
            });
          }
        })
        .catch((err) => {
          console.log(err);
          setSending(0);
          enqueueSnackbar("Message sent error!", {
            variant: "error",
            anchorOrigin: {
              horizontal: "center",
              vertical: "bottom",
            },
          });
        });
    } else {
      setErrorMsg(true);
      enqueueSnackbar("Message sent error!", {
        variant: "error",
        anchorOrigin: {
          horizontal: "center",
          vertical: "bottom",
        },
      });
    }
  };

  const onFocusInput = () => {
    const scrollbtn = document.getElementById("scroll-to-top");
    if (scrollbtn === undefined || scrollbtn === null) return
    scrollbtn.style.display = "none";

  };

  // console.log('contact-user', user, errorMsg)
  const string =
    "I'm interested in full time job opportunities, especially large and ambitious projects. However if you have other request or question. Don't hesitate to contact me!";

  function validateEmail(txt) {
    return txt.length > 10 && txt.includes("@gmail.com") > 0;
  }

  return (
    <ColLeft
      className="cv-contact"
      style={{
        paddingTop: path[path.length - 1] === "" ? 60 : 0,
      }}
    >
      {path[path.length - 1] === "" && (
        <div div className="part-skill">
          Contact
        </div>
      )}
      <RowCenter className="contact-body">
        <ColCenter className="contact-form-group">
          {/* Form */}
          <form className="contact-form">
            <ColCenter className="contact-form-title">
              <h4 className="contact-form-title-text">Leave message to me</h4>
            </ColCenter>
            <ColLeft className="contact-string-msg">{string}</ColLeft>
            <ColCenter>
              <label className="contact-form-inputGroup-label">
                Who are you?
              </label>
              <input
                className="contact-form-inputGroup-input"
                placeholder="Type your name here"
                value={user.name}
                // style={{ borderBottom: user.errorName ? "0.25px solid #EE5007" : 'none' }}
                onFocus={() => onFocusInput()}
                onBlur={(e) => _onBlurUserName(e)}
                onChange={(e) => _onChangeUserName(e)}
                required
              />
              <label className="contact-form-inputGroup-label">
                How do I contact you?
              </label>
              <input
                className="contact-form-inputGroup-input"
                placeholder="Type your Gmail here"
                value={user.email}
                // style={{ borderBottom: user.errorEmail ? "0.25px solid #EE5007" : 'none' }}
                onFocus={() => onFocusInput()}
                onBlur={(e) => _onBlurEmail(e)}
                onChange={(e) => _onChangeEmail(e)}
                type="email"
                pattern=".+@gmail\.com"
                required
              />
              <label className="contact-form-inputGroup-label">Message</label>
              <textarea
                className="contact-form-inputGroup-textArea"
                rows={6}
                cols={5}
                value={user.text}
                // style={{ borderBottom: user.errorText ? "0.25px solid #EE5007" : 'none' }}
                onFocus={() => onFocusInput()}
                onBlur={(e) => _onBlurText(e)}
                onChange={(e) => _onChangeText(e)}
                minLength={10}
                maxLength={5000}
                placeholder="Write something to me"
              />
            </ColCenter>

            <ColCenter className="contact-form-msg">
              {errorMsg && (
                <p className="contact-form-msg-text">
                  Please fill in required information!
                </p>
              )}
              {sending === 2 ? (
                <p className="contact-form-msg-text">
                  Thank you! Your message has been sent. I will check and reply
                  to you as soon as possible.
                </p>
              ) : null}
            </ColCenter>

            <ColCenter className="contact-form-inputGroup">
              <button
                className="contact-form-inputGroup-button"
                type="button"
                onClick={() => _onSendMessage()}
                // disabled={sending === 2 ? true : false}
                disabled={
                  user.name === "" ||
                  !validateEmail(user.email) ||
                  sending === 1
                }
                style={{
                  opacity:
                    user.name === "" || !validateEmail(user.email) ? 0.3 : 1,
                }}
              >
                {sending === 1 ? (
                  <Sending />
                ) : sending === 2 ? (
                  "Message has been sent"
                ) : (
                  "Send"
                )}
              </button>
            </ColCenter>
          </form>
        </ColCenter>
        {/* Right side */}
        <ColCenter className="contact-message">
          {
            // screenSize.isMedium || screenSize.isLarge ? <EarthRound /> :
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16122.18414401547!2d106.72433877900598!3d10.709479408641924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752553219812db%3A0xac232219de55cfe8!2sEra%20Town%20Duc%20Khai%20Apartment!5e0!3m2!1sen!2s!4v1669734879045!5m2!1sen!2s"
              className="cv-map"
              allowFullScreen=""
              title="myFrame"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          }
        </ColCenter>
      </RowCenter>
      <Footer />
    </ColLeft>
  );
};

export default Contact;
