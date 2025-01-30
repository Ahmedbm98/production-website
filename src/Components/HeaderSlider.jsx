import { Navigation, Pagination } from "swiper/modules";
import img1 from "../assets/imgs/slideHeader-1.png";
import img2 from "../assets/imgs/slideHeader-2.png";
import img3 from "../assets/imgs/slideHeader-3.png";
import img4 from "../assets/imgs/slideHeader-4.png";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
export default function HeaderSlider() {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next1",
          prevEl: ".swiper-button-prev1",
          clickable: true
        }}
        autoplay={{ delay: 5000 }}
        className="container-swiper"
      >
        <SwiperSlide>
          <div className="item">
            <img src={img1} alt={img1} />
            <div className="text-content">
              <span>Media Production and creativity</span>
              always in motion
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <img src={img2} alt={img2} />
            <div className="text-content">
              timeless creativity
              <span>Meets Modern Energy</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <img src={img3} alt={img3} />
            <div className="text-content">
              <span>With over 30 years of experience</span>
              we bring deep expertise and a strong understanding <br />
              of our field. We&apos;ve faced every challenge and <br />{" "}
              delivered solutions, making us a trusted partner <br /> for
              excellence
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <img src={img4} alt={img4} />
            <div className="text-content">
              <span>With technology at the core</span>
              our vision has grown, and our approach has evolved <br /> to keep
              up with rapid advancements. We consistently <br /> deliver fresh
              ideas and innovative solutions, staying <br /> ahead by blending
              expertise with modern progress
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="flex justify-center items-center container-arrow">
        <div className="swiper-button-prev1 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
            />
          </svg>
        </div>
        <div className="swiper-button-next1 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
