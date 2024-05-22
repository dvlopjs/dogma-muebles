"use client";

import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "../../globals.css";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { Avatar, Box, Divider } from "@mui/material";
interface Testimonial {
  name: string;
  testimony: string;
  letterForAvatar: string;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

const TestimonialSlider: FC<TestimonialSliderProps> = ({ testimonials }) => {
  return (
    <div className="sliderContainer">
      <Swiper
        style={{ boxShadow: "20" }}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{ delay: 6000 }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="testimonialSlide">
              <h3 className="testimonialName">{testimonial.name}</h3>
              <Box
                pb={2}
                sx={{
                  width: "80%",
                }}
              >
                <Divider />
              </Box>
              <p className="testimonialText">{testimonial.testimony}</p>
              <FormatQuoteIcon sx={{ pt: 2, pb: 5 }} color="primary" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
