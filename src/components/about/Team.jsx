import React from "react";

import styled from "styled-components";
import { Section, SectionTitle } from "../../styles/section";
export const TeamStyle = styled(Section)`
  .item {
    padding: 0 15px;
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
    <TeamStyle class="team tmgrid section-padding">
      <div class="container">
        <div class="section-head text-center">
          <div class="row justify-content-center">
            <SectionTitle class="col-lg-6 col-md-8 col-sm-10">
              <h6 class="custom-font">Творческие умы</h6>
              <h4 class="playfont">Наши сотрудники</h4>
            </SectionTitle>
          </div>
        </div>
        <div class="row">
          <div class="item col-md-3 col-sm-6 mb-20">
            <div class="img">
              <img
                src={require("../../assets/imgs/avatar-1.jpg").default}
                alt=""
              />
              <div class="social">
                <a href="#0">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#0">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#0">
                  <i class="fab fa-behance"></i>
                </a>
                <a href="#0">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div class="info">
              <h5>Абдурахман Одилов</h5>
              <span>Генеральный директор</span>
            </div>
          </div>
          <div class="item col-md-3 col-sm-6">
            <div class="img">
              <img
                src={require("../../assets/imgs/avatar-1.jpg").default}
                alt=""
              />
              <div class="social">
                <a href="#0">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#0">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#0">
                  <i class="fab fa-behance"></i>
                </a>
                <a href="#0">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div class="info">
              <h5>Абдурахман Одилов</h5>
              <span>Менеджер</span>
            </div>
          </div>
          <div class="item col-md-3 col-sm-6">
            <div class="img">
              <img
                src={require("../../assets/imgs/avatar-1.jpg").default}
                alt=""
              />
              <div class="social">
                <a href="#0">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#0">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#0">
                  <i class="fab fa-behance"></i>
                </a>
                <a href="#0">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div class="info">
              <h5>Абдурахман Одилов</h5>
              <span>Основатель</span>
            </div>
          </div>
          <div class="item col-md-3 col-sm-6">
            <div class="img">
              <img
                src={require("../../assets/imgs/avatar-1.jpg").default}
                alt=""
              />
              <div class="social">
                <a href="#0">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#0">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#0">
                  <i class="fab fa-behance"></i>
                </a>
                <a href="#0">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div class="info">
              <h5>Абдурахман Одилов</h5>
              <span>Экстерьер дизайнер</span>
            </div>
          </div>
        </div>
      </div>
    </TeamStyle>
  );
}

export default Team;
