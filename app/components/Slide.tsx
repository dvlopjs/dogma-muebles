import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ImageModel } from "../assets/images/images";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

type PropsSlide = {
  images: ImageModel[];
};

export default function Slide({ images }: PropsSlide) {
  const renderCustomPrevButton = () => (
    <div className="swiper-button-prev">
      <ArrowBackIosIcon />
    </div>
  );

  const renderCustomNextButton = () => (
    <div className="swiper-button-next">
      <ArrowForwardIosIcon />
    </div>
  );

  return (
    <section className="py-12">
      <div className="container">
        <Swiper
          grabCursor
          modules={[Pagination, Scrollbar, A11y]}
          pagination={{ type: "bullets", clickable: true }}
          className="h-120 w-full rounded-lg"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} virtualIndex={index}>
              <div
                style={{ height: "600px" }}
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
