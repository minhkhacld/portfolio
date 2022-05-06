import axios from 'axios';
import React from 'react';
import Sending from '../../kits/animated/sending';
import { ColCenter, ColLeft, RowCenter } from '../../kits/stucture/component.stucture';
import './Contact.css';
import Footer from './footer/Footer';
import Message from './message/Message';


const Contact = () => {

  const [user, setUser] = React.useState({
    name: "",
    errorName: false,
    email: "",
    errorEmail: false,
    text: '',
    errorText: false,
  });

  const [errorMsg, setErrorMsg] = React.useState(false);
  const [sending, setSending] = React.useState(0);



  //Function
  const _onChangeUserName = (e) => {
    setUser({
      ...user,
      name: e.target.value,
    });
  };

  const _onBlurUserName = (e) => {
    if (e.target.value !== "") {
      setUser({ ...user, errorName: false })
    } else {
      setUser({ ...user, errorName: true })
    }
  };


  const _onChangeEmail = (e) => {
    setUser({
      ...user,
      email: e.target.value,
    })
  }
  const _onBlurEmail = (e) => {
    if (e.target.value !== "") {
      setUser({ ...user, errorEmail: false })
    } else {
      setUser({ ...user, errorEmail: true })
    }
  }

  const _onChangeText = (e) => {
    setUser({
      ...user,
      text: e.target.value,
    })
  }
  const _onBlurText = (e) => {
    if (e.target.value !== "") {
      setUser({ ...user, errorText: false })
    } else {
      setUser({ ...user, errorText: true })
    }
  }

  const _onSendMessage = async () => {
    if (user.name === "" || user.email === "" || user.text === "") {
      setErrorMsg(true);
      return
    }

    if (!user.errorEmail && !user.errorName && !user.errorText) {
      setErrorMsg(false);
      setSending(1);
      let data = {
        sheetName: "Message from users",
        sheetUrl: process.env.REACT_APP_API_SHEETS,
        columns: [
          {
            title: "TimeStamp",
            value: Date.now(),
          },
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
          }
        ]
      }
      await axios.post(`${process.env.REACT_APP_API_SEND_MESSAGE}`, { data: data }, {
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        }
      }).
        then(async (response) => {
          // console.log(response);       
          if (response.data.code === 1) {
            setSending(2);
          }
        })
        .catch(err => {
          console.log(err);
        });

    } else {
      setErrorMsg(true);
    }
  }

  // console.log('contact-user', user, errorMsg)

  return (
    <ColLeft className="cv-contact" id="cv-contact">
      <RowCenter className="contact-body">
        <ColCenter className="contact-form-group">
          {/* Form */}
          <form className="contact-form">
            <ColCenter className="contact-form-title">
              <h4 className="contact-form-title-text">Leave message to me</h4>
            </ColCenter>
            <ColCenter>
              <label className="contact-form-inputGroup-label">Your name</label>
              <input className="contact-form-inputGroup-input"
                placeholder="Type your Name here"
                value={user.name}
                style={{ border: user.errorName ? "0.25px solid #EE5007" : 'none' }}
                onBlur={(e) => _onBlurUserName(e)}
                onChange={(e) => _onChangeUserName(e)} />
              <label className="contact-form-inputGroup-label">Your email</label>
              <input className="contact-form-inputGroup-input"
                placeholder="Type your email here"
                value={user.email}
                style={{ border: user.errorEmail ? "0.25px solid #EE5007" : 'none' }}
                onBlur={(e) => _onBlurEmail(e)}
                onChange={(e) => _onChangeEmail(e)} />
              <label className="contact-form-inputGroup-label">Message</label>
              <textarea className="contact-form-inputGroup-textArea" rows={10} cols={5}
                value={user.text}
                style={{ border: user.errorText ? "0.25px solid #EE5007" : 'none' }}
                onBlur={(e) => _onBlurText(e)}
                onChange={(e) => _onChangeText(e)}
                minLength={10}
                maxLength={5000} placeholder="Write something to me"
              />
            </ColCenter>

            <ColCenter className="contact-form-msg">
              {errorMsg &&
                <p className="contact-form-msg-text">Please fill in required information!</p>}
              {/* {sending === 1 ?
                <Sending children={'Sending'} /> : sending === 2 ?
                  <p className="contact-form-msg-text">Thank you! Your message has been sent. I will check and reply to you as soon as possible.</p>
                  : null
              } */}
              {sending === 2 ?
                <p className="contact-form-msg-text">Thank you! Your message has been sent. I will check and reply to you as soon as possible.</p>
                : null
              }
            </ColCenter>

            <ColCenter className="contact-form-inputGroup">
              <button className="contact-form-inputGroup-button" type="button" onClick={() => _onSendMessage()} disabled={sending === 2 ? true : false}>
                {sending === 1 ?
                  <Sending /> : sending === 2 ?
                    "Message has been sent"
                    : "Send"
                }
              </button>
            </ColCenter>
          </form>
        </ColCenter>
        {/* Right side */}
        <ColCenter className="contact-message">
          <Message />
        </ColCenter>
      </RowCenter>

      <Footer />

    </ColLeft>
  )
}

export default Contact