import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/zoom";
import { Navigation, Pagination, Zoom } from "swiper/modules";
import Image from "next/image";
import { IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ImageModel } from "../../assets/images/images";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";

const style = {
  position: "absolute" as "absolute",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  bgcolor: "background.paper",
  p: 2,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const headerStyle = {
  position: "absolute" as "absolute",
  top: 0,
  left: 0,
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  p: 2,
  bgcolor: "rgba(0, 0, 0, 0.5)",
  color: "white",
  zIndex: 1,
};

const swiperContainerStyle = {
  width: "100%",
  height: "calc(100% - 60px)", // Adjust height to leave space for header
  marginTop: "69px", // Move down the Swiper container
};

type PropsModal = {
  open: boolean;
  handleClose: () => void;
  images: ImageModel[];
  title: string;
};

export default function ModalFullWindow({
  open,
  handleClose,
  images,
  title,
}: PropsModal) {
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Box sx={headerStyle}>
              <Typography variant="h6" component="h2">
                <Box display={"flex"} alignItems={"center"} gap={2}>
                  <LabelImportantIcon />

                  {title}
                </Box>
              </Typography>
              <IconButton onClick={handleClose} color="inherit">
                <CloseIcon />
              </IconButton>
            </Box>
            <Box sx={swiperContainerStyle}>
              <Swiper
                grabCursor
                navigation
                zoom={{ maxRatio: 2, toggle: true }}
                modules={[Navigation, Pagination, Zoom]}
                pagination={{ type: "bullets", clickable: true }}
                style={{ width: "100%", height: "100%" }}
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index} virtualIndex={index}>
                    <div style={{ height: "100%", position: "relative" }}>
                      <div
                        className="swiper-zoom-container"
                        style={{ height: "100%", position: "relative" }}
                      >
                        <Image
                          quality={100}
                          src={image.src}
                          alt={image.alt}
                          layout="fill"
                          objectFit="contain"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
