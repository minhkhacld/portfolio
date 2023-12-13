import PropTypes from "prop-types";
import { useCallback, useEffect, useRef, useState } from "react";
import Slider from "react-slick";
// @mui
import { Box } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
//
import { CarouselArrowIndex } from "../components/carousel/index";
import Image from "../components/Image";
import LightboxModal from "../components/LightboxModal";
// HOST
import imagePlaceholder from "../assets/picture/placeholder-image.png";
// ----------------------------------------------------------------------

const THUMB_SIZE = 64;

const RootStyle = styled("div")(({ theme }) => ({
  "& .slick-slide": {
    float: "left",
    "&:focus": { outline: "none" },
  },
  zIndex: 1000,
  minHeight: 500,
}));

// ----------------------------------------------------------------------

ProductDetailsCarousel.propTypes = {
  images: PropTypes.array,
};

export default function ProductDetailsCarousel({ images }) {
  const [openLightbox, setOpenLightbox] = useState(false);

  const [selectedImage, setSelectedImage] = useState(0);

  const [currentIndex, setCurrentIndex] = useState(0);

  const [nav1, setNav1] = useState();

  const [nav2, setNav2] = useState();

  const slider1 = useRef(null);

  const slider2 = useRef(null);

  const imagesLightbox = images || [];

  const handleOpenLightbox = (url) => {
    const imageIndex = imagesLightbox.findIndex((img) => img === url);
    setSelectedImage(imageIndex || 0);
    setOpenLightbox(true);
  };

  const settings1 = {
    dots: false,
    arrows: false,
    slidesToShow: 1,
    draggable: false,
    slidesToScroll: 1,
    adaptiveHeight: true,
    beforeChange: (current, next) => {
      setCurrentIndex(next);
    },
  };

  const settings2 = {
    dots: false,
    arrows: false,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    variableWidth: true,
    centerPadding: "0px",
    slidesToShow: 3,
  };

  useEffect(() => {
    if (slider1.current) {
      setNav1(slider1.current);
    }
    if (slider2.current) {
      setNav2(slider2.current);
    }
  }, []);

  const handlePrevious = () => {
    slider2.current?.slickPrev();
  };

  const handleNext = () => {
    slider2.current?.slickNext();
  };

  return (
    <RootStyle>
      <Box sx={{ p: 1 }}>
        <Box
          sx={{
            zIndex: 0,
            borderRadius: 1,
            overflow: "hidden",
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Slider {...settings1} asNavFor={nav2} ref={slider1}>

            {imagesLightbox.length > 0 ? (
              imagesLightbox.map((img) => (
                <Box key={img}>
                  <Image
                    alt="large image"
                    src={img}
                    ratio="21/9"
                    onClick={() => handleOpenLightbox(img)}
                    sx={{
                      cursor: "zoom-in",
                      maxHeight: {
                        xs: 800,
                        md: "60vh",
                      },
                      minHeight: {
                        xs: 400,
                        md: "50vh",
                      },
                    }}
                  />
                </Box>
              ))
            ) : (
              <Image alt="large image" src={imagePlaceholder} ratio="16/9" />
            )}

          </Slider>
          {imagesLightbox.length > 0 && (
            <CarouselArrowIndex
              index={currentIndex}
              total={imagesLightbox.length}
              onNext={handleNext}
              onPrevious={handlePrevious}
            />
          )}
        </Box>
      </Box>

      <Box
        sx={{
          my: 3,
          mx: "auto",
          "& .slick-current .isActive": { opacity: 1 },
          ...(imagesLightbox.length === 1 && {
            maxWidth: THUMB_SIZE * 1 + 16,
          }),
          ...(imagesLightbox.length === 2 && {
            maxWidth: THUMB_SIZE * 2 + 32,
          }),
          ...(imagesLightbox.length === 3 && {
            maxWidth: THUMB_SIZE * 3 + 48,
          }),
          ...(imagesLightbox.length === 4 && {
            maxWidth: THUMB_SIZE * 3 + 48,
          }),
          ...(imagesLightbox.length >= 5 && { maxWidth: THUMB_SIZE * 6 }),
          ...(imagesLightbox.length > 2 && {
            position: "relative",
            "&:before, &:after": {
              top: 0,
              zIndex: 9,
              content: "''",
              height: "100%",
              position: "absolute",
              width: (THUMB_SIZE * 2) / 3,
              backgroundImage: (theme) =>
                `linear-gradient(to left, ${alpha(
                  theme.palette.background.paper,
                  0
                )} 0%, ${theme.palette.background.paper} 100%)`,
            },
            "&:after": { right: 0, transform: "scaleX(-1)" },
          }),
        }}
      >
        <Slider {...settings2} asNavFor={nav1} ref={slider2}>
          {imagesLightbox.map((img, index) => (
            <Box key={img} sx={{ px: 0.75 }}>
              <Image
                disabledEffect
                alt="thumb image"
                src={img}
                sx={{
                  width: THUMB_SIZE,
                  height: THUMB_SIZE,
                  borderRadius: 1.5,
                  cursor: "pointer",
                  ...(currentIndex === index && {
                    border: (theme) =>
                      `solid 3px ${theme.palette.primary.main}`,
                  }),
                }}
              />
            </Box>
          ))}
        </Slider>
      </Box>

      <LightboxModal
        images={imagesLightbox}
        mainSrc={imagesLightbox[selectedImage] || imagesLightbox[0]}
        photoIndex={selectedImage}
        setPhotoIndex={setSelectedImage}
        isOpen={openLightbox}
        onCloseRequest={() => {
          setOpenLightbox(false);
          setSelectedImage(0);
        }}
      />
    </RootStyle>
  );
}
