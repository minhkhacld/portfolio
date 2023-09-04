import { yupResolver } from '@hookform/resolvers/yup';
import { LoadingButton } from "@mui/lab";
import { Box, Stack, Typography } from '@mui/material';
import { useSnackbar } from "notistack";
import React, { useMemo } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import * as Yup from "yup";
import { FormProvider, RHFTextField } from "../../hook-form";
import {
  ColCenter,
  ColLeft,
  RowCenter,
} from "../../kits/stucture/component.stucture";
import "./Contact.css";
import Footer from "./footer/Footer";

// import EarthRound from './map/Earth';

const ContactMuiInput = () => {
  // hooks
  const { enqueueSnackbar } = useSnackbar();

  const defaultValues = useMemo(() => ({
    name: "",
    email: "",
    text: "",
  }), []);

  const FormSchemas = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Must a valid email').required('Email is required'),
    text: Yup.string().required('Message is required'),
  })

  const methods = useForm({
    defaultValues,
    resolver: yupResolver(FormSchemas),
  });

  const { handleSubmit,
    formState: { isSubmitting, },
    reset,
  } = methods


  const location = useLocation();
  const path = location.pathname.split("/");

  //Function

  const string =
    "I'm interested in full time job opportunities, especially large and ambitious projects. However if you have other request or question. Don't hesitate to contact me!";

  const onSendEmail = async (data) => {
    try {
      const postData = {
        name: data.name,
        email: data.email,
        message: data.text,
      };

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwCKklqTNhlCCe7zqEwPn82jMxW4ryvcKBmkEaOJ5yLiDvinVFB2SgWguZkiE3gW7YmBQ/exec",
        {
          redirect: "follow",
          method: "POST",
          body: JSON.stringify({ data: postData }),
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
        }
      ).then((res) => res.json());
      // console.log(response);
      if (response?.code === 1) {
        reset()
        enqueueSnackbar(
          "Thank you. Your message has been sent to me, I will contact you as soon as possible",
          {
            variant: "success",
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "center",
            },
            autoHideDuration: 5000,
          }
        );
      } else {
        throw new Error("Message send error");
      }


    } catch (error) {
      console.error(error)
      enqueueSnackbar("Message sent error!", {
        variant: "error",
        anchorOrigin: {
          horizontal: "center",
          vertical: "bottom",
        },
      });
    }
  }

  return (
    <ColLeft
      className="cv-contact"
      style={{
        paddingTop: path[path.length - 1] === "" ? 60 : 0,
      }}
    >
      {path[path.length - 1] === "" && (
        <div className="part-skill">
          Contact
        </div>
      )}
      <RowCenter className="contact-body">
        <ColCenter className="contact-form-group">
          <Stack width={'100%'} spacing={3} p={2}>
            <Box>
              <Typography variant="h4" color={'var(--lightBlue)'}>Leave message to me</Typography>
            </Box>
            <Box>
              <Typography variant="subtext" color={'var(--lightBlue)'}>{string}</Typography>
            </Box>
            <FormProvider methods={methods} onSubmit={handleSubmit(onSendEmail)}>
              <Stack spacing={3} width={'100%'} >
                <RHFTextField
                  name='name'
                  placeholder='Input your name'
                  label='Your name'
                  fullWidth
                  variant='filled'
                />
                <RHFTextField
                  name='email'
                  label='Your email'
                  placeholder='Input your google email address'
                  fullWidth
                  variant='filled'
                />
                <RHFTextField
                  name='text'
                  label='Message'
                  placeholder="Write something to me"
                  multiline
                  minRows={4}
                  maxRows={6}
                  fullWidth
                  variant='filled'
                />
                <LoadingButton
                  type="submit"
                  fullWidth
                  disabled={isSubmitting}
                  loading={isSubmitting}
                  variant="contained"
                >Send Message</LoadingButton>
              </Stack>
            </FormProvider>
          </Stack>
        </ColCenter>
        {/* Right side */}
        <ColCenter className="contact-message" style={{
          opacity: isSubmitting ? 0.4 : 1
        }}>
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

export default ContactMuiInput;
