import React from "react";
import styled from 'styled-components';
import { Section, SectionTitle } from "../../styles/section";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/components/effect-fade/effect-fade.scss";
import "swiper/swiper.scss";

export const PortfolioStyle = styled(Section)`
  .content {
    .item-img {
      position: relative;
      height: 480px;
      line-height: 0;
    }
    .cont {
      color: #fff;
      margin-top: 30px;
      text-align: center;
      h6 {
        color: #b19777;
        font-size: 12px;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 2px;
        margin-bottom: 10px;
      }
      h4 {
        font-weight: 600;
        font-size: 24px;
      }
    }
  }
  
`;

function Portfolio() {
  return (
    <PortfolioStyle className="work-carousel metro section-padding dark">
      <div className="container-fluid">
        <div className="container">
          <div className="section-head text-center">
            <div className="row justify-content-center">
              <SectionTitle className="col-lg-6 col-md-8 col-sm-10">
                <h6 className="custom-font wow fadeInDown" data-wow-delay=".3s">
                  Best Works
                </h6>
                <h4 className="playfont wow flipInX" data-wow-delay=".5s">
                  My Portfolio
                </h4>
              </SectionTitle>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 no-padding">
            <Swiper
              spaceBetween={30}
              slidesPerView={2}
              speed={1000}
              loop={true}
              centeredSlides={true}
              onAfterInit={(swiper) => {}}
              onSlideChangeTransitionEnd={(swiper) => {}}
            >
              <SwiperSlide>
                <div className="content wow fadeInUp">
                  <div className="item-img bg-img wow imago animated" style={{backgroundImage: `url(${require("../../assets/imgs/1.jpg").default})`}}></div>
                  <div className="cont">
                    <h6>
                      <a href="#0">art &amp; illustration</a>
                    </h6>
                    <h4>
                      <a href="#0">Natural plus modern.</a>
                    </h4>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="content wow fadeInUp">
                  <div className="item-img bg-img wow imago animated" style={{backgroundImage: `url(${require("../../assets/imgs/2.jpg").default})`}}></div>
                  <div className="cont">
                    <h6>
                      <a href="#0">art &amp; illustration</a>
                    </h6>
                    <h4>
                      <a href="#0">Natural plus modern.</a>
                    </h4>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div
                  className="content wow fadeInUp"
                >
                  <div
                    className="item-img bg-img wow imago animated"
                    style={{backgroundImage: `url(${require("../../assets/imgs/3.jpg").default})`}}
                  ></div>
                  <div className="cont">
                    <h6>
                      <a href="#0">art &amp; illustration</a>
                    </h6>
                    <h4>
                      <a href="#0">Natural plus modern.</a>
                    </h4>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div
                  className="content wow fadeInUp"
                >
                  <div
                    className="item-img bg-img wow imago animated"
                    style={{backgroundImage: `url(${require("../../assets/imgs/1.jpg").default})`}}
                  ></div>
                  <div className="cont">
                    <h6>
                      <a href="#0">art &amp; illustration</a>
                    </h6>
                    <h4>
                      <a href="#0">Natural plus modern.</a>
                    </h4>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </PortfolioStyle>
  );
}

export default Portfolio;
