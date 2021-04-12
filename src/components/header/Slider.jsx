import SwiperCore, { EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/components/effect-fade/effect-fade.scss";
import "swiper/swiper.scss";
import { useState } from "react";
SwiperCore.use([EffectFade]);

function Slider() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [length, setLength] = useState(1)
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      effect="fade"
      speed={1000}
      loop={true}
      onAfterInit={(swiper) => {setLength(swiper.slides.length-2)}}
      onSlideChangeTransitionEnd={(swiper) => {setActiveIndex(swiper.realIndex)}}
    >
      <SwiperSlide>
        <div className="bg-img valign">
          <div className="container">
            <div className="caption center">
              <h1>
                Elegant
                <br />
                Unique Design
              </h1>
              <p>
                Architek have been developing a transversal approach combining
                architecture, urbanism and landscape.{" "}
              </p>
              <a href="#0" className="btn-curve btn-color mt-20">
                <span>Discover Work</span>
              </a>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-img valign">
          <div className="container">
            <div className="caption center">
              <h1>
                Exterior <br /> design
              </h1>
              <p>
                Architek have been developing a transversal approach combining
                architecture, urbanism and landscape.{" "}
              </p>
              <a href="#0" className="btn-curve btn-color mt-20">
                <span>Discover Work</span>
              </a>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-img valign">
          <div className="container">
            <div className="caption center">
              <h1>
                Innovative <br /> Architecture
              </h1>
              <p>
                Architek have been developing a transversal approach combining
                architecture, urbanism and landscape.{" "}
              </p>
              <a href="#0" className="btn-curve btn-color mt-20">
                <span>Discover Work</span>
              </a>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-img valign">
          <div className="container">
            <div className="caption center">
              <h1>
                Classic <br /> and Modern
              </h1>
              <p>
                Architek have been developing a transversal approach combining
                architecture, urbanism and landscape.{" "}
              </p>
              <a href="#0" className="btn-curve btn-color mt-20">
                <span>Discover Work</span>
              </a>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <div className="swiper-slide-counter">
        <span className="swiper-pagination-current">{activeIndex+1}</span><span className="swiper-pagination-total">{length}</span>
      </div>
    </Swiper>
  );
}

export default Slider;
