import React from "react";
import styled from "styled-components";
import { Section } from "../../styles/section";
import "swiper/components/effect-fade/effect-fade.scss";
import "swiper/swiper.scss";

export const TeamStyle = styled(Section)`
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 40%;
    z-index: -1;
    bottom: 0;
    background-color: #f8f4f3;
  }
  .dots-half {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 70%;
    z-index: -2;
    background-size: auto;
    background-repeat: repeat;
  }
  .tit {
    h6 {
      color: #b19777;
      font-weight: 400;
      font-size: 22px;
    }
    h3 {
      font-weight: 700;
      margin-bottom: 20px;
    }
    .navs {
      span {
        padding: 15px 30px;
        background: #f8f4f3;
        cursor: pointer;
        &:hover {
          background: #b19777;
          color: #fff;
        }
      }
    }
  }

  .slide {
      padding: 0 15px;
      width: 50%;
      &:hover {
        .social {
          opacity: 1;
          left: 0;
        }
      }
      .img {
        position: relative;
        overflow: hidden;
      }
      img {
        width: 100%;
        height: auto;
        display: block;
      }
      .info {
        margin-top: 20px;
        text-align: center;
        h5 {
          font-size: 18px;
          margin-bottom: 2px;
        }
        span {
          color: #777;
          font-size: 14px;
        }
      }
      .social {
        position: absolute;
        top: 0;
        left: -40px;
        background-color: #fff;
        padding: 20px 10px;
        z-index: 2;
        opacity: 0;
        transition: all 0.4s;
        a {
          display: block;
          font-size: 13px;
          margin-top: 10px;
          color: #b19777;
        }
      }
    }
`;

function Team() {
  return (
    <TeamStyle className="team section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="tit">
              <h6 className="custom-font mb-10">Some thoughts from Us</h6>
              <h3>About me</h3>
              <p>
                We feel proud for our expert team members beatae ipsum dolor sit
                amet, consectetur adipisicing elit mauris vitae consequat nibh,
                vitae interdum mi.
              </p>
            </div>
          </div>
          <div className="col-lg-4 slide">
            <div className="img imago">
              <img
                src={require("../../assets/imgs/team1.jpg").default}
                alt=""
              />
              <div className="social">
                <a href="#0" tabIndex="0">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#0" tabIndex="0">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#0" tabIndex="0">
                  <i className="fab fa-behance"></i>
                </a>
                <a href="#0" tabIndex="0">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="info">
              <h5>Hasib sharif</h5>
              <span>Designer</span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="dots-half bg-img bg-repeat"
        style={{
          backgroundImage: `url(${
            require("../../assets/imgs/dots.png").default
          })`,
        }}
      ></div>
    </TeamStyle>
  );
}

export default Team;
