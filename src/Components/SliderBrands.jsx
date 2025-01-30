import "swiper/css";
import { Autoplay, EffectCube } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../assets/imgs/brand-1.png";
import img10 from "../assets/imgs/brand-10.png";
import img11 from "../assets/imgs/brand-11.png";
import img12 from "../assets/imgs/brand-12.png";
import img13 from "../assets/imgs/brand-13.png";
import img14 from "../assets/imgs/brand-14.png";
import img15 from "../assets/imgs/brand-15.png";
import img16 from "../assets/imgs/brand-16.png";
import img17 from "../assets/imgs/brand-17.png";
import img18 from "../assets/imgs/brand-18.png";
import img2 from "../assets/imgs/brand-2.png";
import img20 from "../assets/imgs/brand-20.png";
import img21 from "../assets/imgs/brand-21.png";
import img23 from "../assets/imgs/brand-23.png";
import img24 from "../assets/imgs/brand-24.png";
import img25 from "../assets/imgs/brand-25.png";
import img26 from "../assets/imgs/brand-26.png";
import img27 from "../assets/imgs/brand-27.png";
import img28 from "../assets/imgs/brand-28.png";
import img29 from "../assets/imgs/brand-29.png";
import img3 from "../assets/imgs/brand-3.png";
import img30 from "../assets/imgs/brand-30.png";
import img31 from "../assets/imgs/brand-31.png";
import img32 from "../assets/imgs/brand-32.png";
import img33 from "../assets/imgs/brand-33.png";
import img34 from "../assets/imgs/brand-34.png";
import img4 from "../assets/imgs/brand-4.png";
import img5 from "../assets/imgs/brand-5.png";
import img6 from "../assets/imgs/brand-6.png";
import img7 from "../assets/imgs/brand-7.png";
import img8 from "../assets/imgs/brand-8.png";
import img9 from "../assets/imgs/brand-9.png";
export default function CarouselBrands() {
  const SlidersBrands = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img20,
    img21,
    img23,
    img24,
    img25,
    img26,
    img27,
    img28,
    img29,
    img30,
    img31,
    img32,
    img33,
    img34
  ];

  return (
    <section className="bg-white p-2 ">
      <Swiper
        slidesPerView={5}
        spaceBetween={4}
        pagination={{
          clickable: true
        }}
        autoplay={{
          delay: 1400,
          disableOnInteraction: false
        }}
        modules={[Autoplay, EffectCube]}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 7,
            spaceBetween: 30
          },
          1024: {
            slidesPerView: 15,
            spaceBetween: 50
          }
        }}
        loop={true}
      >
        {SlidersBrands.map((brand, index) => {
          return (
            <SwiperSlide className="cursor-pointer" key={index}>
              <img src={brand} alt={`img${index + 1}`} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
