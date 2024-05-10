"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ImageModel } from "../../assets/images/images";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { useMediaQuery, useTheme } from "@mui/material";

type PropsSlide = {
  images: ImageModel[];
};

export default function SliderReusable({ images }: PropsSlide) {
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <section className="py-12">
      <div className="swiper-container">
        <Swiper
          grabCursor
          navigation
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          pagination={{ type: "bullets", clickable: true }}
          className="h-full w-full rounded-lg"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} virtualIndex={index}>
              <div
                style={{ height: xs ? "500px" : "700px" }}
                className="flex w-full items-center justify-center"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="block h-full w-full object-cover"
                  sizes="100vw"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
