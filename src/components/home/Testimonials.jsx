import { useRef } from "react";
import classNames from "classnames";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/components/effect-fade/effect-fade.scss";
import "swiper/swiper.scss";
import { Section, SectionTitle } from "../../styles/section";
export const Style = styled(Section)`
  .item {
    position: relative;
    margin-top: 11px;

    .cont {
      padding: 50px 40px 40px;
      border: 10px solid #f7f7f7;
      border-top: 0;
      position: relative;
      p {
        font-size: 18px;
        font-weight: 400;
        font-style: italic;
        color: #333;
      }
      &::after,
      &::before {
        content: "";
        position: absolute;
        height: 10px;
        background: #f7f7f7;
        top: 0;
      }
      &::before {
        width: 5%;
        right: 0;
      }
      &::after {
        width: 75%;
        left: 0;
      }
    }
    .quote-icon {
      position: absolute;
      top: -20px;
      right: 12%;
      width: 10%;
      z-index: 2;
    }
    .info {
      margin-top: 30px;
      padding-left: 30px;
      position: relative;
      display: flex;
      align-items: center;
      &::after {
        content: "";
        width: 0;
        height: 0;
        border-top: 25px solid #f7f7f7;
        border-right: 30px solid transparent;
        position: absolute;
        left: 100px;
        top: -30px;
      }
      h6 {
        padding-left: 20px;
        font-size: 16px;
        span {
          color: #b19777;
          font-size: 13px;
          font-weight: 400;
          margin-top: 5px;
          display: block;
        }
      }
      .author {
        min-width: 70px;
        flex: 0 1 70px;
        height: 70px;
        border-radius: 50%;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
      }
    }
  }
  .navs {
    span {
      padding: 10px 20px;
      background: #f8f4f3 !important;
      cursor: pointer;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
      z-index: 5;
      color: #b19777 !important;
      &:hover {
        background: #b19777 !important;
        color: #fff !important;
      }
      &.next {
        left: auto;
        right: 0;
      }
    }
  }
`;

function Testimonials({ theme }) {
  const swiper = useRef();
  const next = () => {
    swiper.current.swiper.slideNext();
  };
  const prev = () => {
    swiper.current.swiper.slidePrev();
  };
  return (
    <Style
      className={classNames("testimonials grid section-padding", {
        dark: theme === "dark",
      })}
    >
      <div className="container-fluid">
        <div className="section-head text-center">
          <div className="row justify-content-center">
            <SectionTitle className="col-lg-6 col-md-8 col-sm-10">
              <h6 className="custom-font">Отзывы</h6>
              <h4 className="playfont">Что говорят люди?</h4>
            </SectionTitle>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              ref={swiper}
              speed={1000}
              loop={true}
              breakpoints={{
                575: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
              }}
              onAfterInit={(swiper) => {}}
              onSlideChangeTransitionEnd={(swiper) => {}}
            >
              <SwiperSlide className="item slick-slide" aria-hidden="true">
                <span className="quote-icon">
                  <img
                    src={require("../../assets/imgs/quote.svg").default}
                    alt=""
                  />
                </span>
                <div className="cont">
                  <p className="playfont">
                    "Мне просто нравится их дизайн за все потрясающие детали. Ты
                    должен знать, что вы можете сделать для проекта, прежде чем
                    взяться за него, но с Archo небо - это предел."
                  </p>
                </div>
                <div className="info">
                  <div className="author">
                    <img
                      src={require("../../assets/imgs/avatar-1.jpg").default}
                      alt=""
                    />
                  </div>
                  <h6>
                    Абдурахим Болтабоев <span>ООО "ЗАЯ"</span>{" "}
                  </h6>
                </div>
              </SwiperSlide>
              <SwiperSlide className="item slick-slide" aria-hidden="true">
                <span className="quote-icon">
                  <img
                    src={require("../../assets/imgs/quote.svg").default}
                    alt=""
                  />
                </span>
                <div className="cont">
                  <p className="playfont">
                    "Я действительно впечатлен тем, как быстро вы ответили на
                    мое электронное письмо. Большое спасибо."
                  </p>
                </div>
                <div className="info">
                  <div className="author">
                    <img
                      src={require("../../assets/imgs/avatar-1.jpg").default}
                      alt=""
                    />
                  </div>
                  <h6>
                    Джахонгир Артикходжаев <span>ООО "КАРТЕЛЬ"</span>{" "}
                  </h6>
                </div>
              </SwiperSlide>
              <SwiperSlide className="item slick-slide" aria-hidden="true">
                <span className="quote-icon">
                  <img
                    src={require("../../assets/imgs/quote.svg").default}
                    alt=""
                  />
                </span>
                <div className="cont">
                  <p className="playfont">
                    "Действительно хорошо. С каждым днем мне нравится внешний
                    вид все больше и больше, потому что он делает мою жизнь
                    намного проще. Хорошая работа над вашим экстерьером."
                  </p>
                </div>
                <div className="info">
                  <div className="author">
                    <img
                      src={require("../../assets/imgs/avatar-1.jpg").default}
                      alt=""
                    />
                  </div>
                  <h6>
                    Бабушка Бэтмена <span>ООО "БЭТМЕН"</span>
                  </h6>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="navs mt-30 wow fadeInUp">
              <span className="prev slick-arrow" onClick={prev}>
                <i className="fas fa-long-arrow-alt-left"></i>
              </span>
              <span className="next slick-arrow" onClick={next}>
                <i className="fas fa-long-arrow-alt-right"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Style>
  );
}

export default Testimonials;
