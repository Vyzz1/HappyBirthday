import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./ImageListInfinite.css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { data } from "./ImageList";
const ImageListInfinite = () => {
  const imageSource = data.map((v, index) => (
    <SwiperSlide key={index} className="swiper-slide">
      <img src={v} />
    </SwiperSlide>
  ));
  return (
    <div>
      {" "}
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        autoplay={{ delay: 1000 }}
        loop
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {imageSource}
      </Swiper>
    </div>
  );
};

export default ImageListInfinite;
