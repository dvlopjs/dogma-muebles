"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/zoom";
import { Navigation, Pagination, Zoom } from "swiper/modules";
import { useMediaQuery, useTheme } from "@mui/material";
import { ImageModel } from "../../assets/images/images";

type PropsSlide = {
  images: ImageModel[];
};

export default function SliderReusable({ images }: PropsSlide) {
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <section style={{ height: xs ? "500px" : "575px" }}>
      <Swiper
        grabCursor
        navigation
        zoom={{ maxRatio: 2, toggle: true }}
        modules={[Navigation, Pagination, Zoom]}
        pagination={{ type: "bullets", clickable: true }}
        style={{ height: "100%" }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} virtualIndex={index}>
            <div style={{ height: "100%" }}>
              <div
                className="swiper-zoom-container"
                style={{ height: "100%", position: "relative" }}
              >
                <Image
                  quality={100}
                  src={image.src}
                  priority
                  alt={image.alt}
                  sizes="100%"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
