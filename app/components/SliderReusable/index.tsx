"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ImageModel } from "../../assets/images/images";
import { Navigation, Pagination, Scrollbar, A11y, Zoom } from "swiper/modules";
import { useMediaQuery, useTheme } from "@mui/material";

type PropsSlide = {
  images: ImageModel[];
};

export default function SliderReusable({ images }: PropsSlide) {
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <section
      // className="swiper-container"

      style={{ height: xs ? "500px" : "575px" }}
    >
      <Swiper
        grabCursor
        navigation
        enabled
        zoom={{ maxRatio: 6, minRatio: 2 }}
        modules={[Navigation, Pagination, Scrollbar, A11y, Zoom]}
        pagination={{ type: "bullets", clickable: true }}
        style={{ height: "100%" }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} virtualIndex={index}>
            <div style={{ height: "100%", position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                }}
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
    </section>
  );
}
