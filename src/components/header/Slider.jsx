import SwiperCore, { EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/components/effect-fade/effect-fade.scss";
import "swiper/swiper.scss";
import { useState } from "react";
SwiperCore.use([EffectFade]);

function Slider() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [length, setLength] = useState(1);
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      effect="fade"
      speed={1000}
      loop={true}
      onAfterInit={(swiper) => {
        setLength(swiper.slides.length - 2);
      }}
      onSlideChangeTransitionEnd={(swiper) => {
        setActiveIndex(swiper.realIndex);
      }}
    >
      <SwiperSlide>
        <div className="bg-img valign">
          <div className="container">
            <div className="caption center">
              <h1>
                Элегантный
                <br />
                Уникальный дизайн
              </h1>
              <p>
                Я разработал трансверсальный подход, сочетающий архитектуру,
                урбанизм и ландшафт.
              </p>
              <a href="#0" className="btn-curve btn-color mt-20">
                <span>Исследовать работу</span>
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
                Экстерьер <br /> Дизайн
              </h1>
              <p>
                Я разработал трансверсальный подход, сочетающий архитектуру,
                урбанизм и ландшафт.
              </p>
              <a href="#0" className="btn-curve btn-color mt-20">
                <span>Исследовать работу</span>
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
                Инновационная <br /> Архитектура
              </h1>
              <p>
                Я разработал трансверсальный подход, сочетающий архитектуру,
                урбанизм и ландшафт.
              </p>
              <a href="#0" className="btn-curve btn-color mt-20">
                <span>Исследовать работу</span>
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
                Классический <br /> и современный{" "}
              </h1>
              <p>
                Я разработал трансверсальный подход, сочетающий архитектуру,
                урбанизм и ландшафт.
              </p>
              <a href="#0" className="btn-curve btn-color mt-20">
                <span>Исследовать работу</span>
              </a>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <div className="swiper-slide-counter">
        <span className="swiper-pagination-current">{activeIndex + 1}</span>
        <span className="swiper-pagination-total">{length}</span>
      </div>
    </Swiper>
  );
}

export default Slider;
