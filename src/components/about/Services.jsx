import React from "react";
import { Section } from "../../styles/section";

import styled from "styled-components";
const ServicesStyle = styled(Section)`
  position: relative;
  margin-top: -120px;
  z-index: 3;

  .item-bx {
    padding: 60px 40px;
    height: 100%;
    background-color: #fff;
    border: 1px solid #eee;
    border-right: 0;
    transition: all 0.4s;
    @media (max-width: 575px) {
      width: 90%;
      margin: 0 auto;
      border: 1px solid #eee;
    }

    h6 {
      font-size: 18px;
    }
    &:hover {
      background: #b19777;
      color: #fff;
      .numb {
        -webkit-text-stroke: 1px #fff;
      }
    }
    .numb {
      font-size: 60px;
      margin-bottom: 10px;
      color: transparent;
      -webkit-text-stroke: 1px #b19777;
    }
    .more {
      display: inline-block;
      font-size: 20px;
    }
  }
`;

function Services() {
  return (
    <ServicesStyle>
      <div class="container ontop">
        <div class="row mt-30">
          <div class="col-lg-3 col-md-6 item-bx">
            <h2 class="custom-font numb">01</h2>
            <h6 class="mb-20">Архитектура</h6>
            <p>
              Далеко-далеко за словесными горами в стране гласных и согласных
              живут рыбные тексты.
            </p>
            <a href="#0" class="more custom-font mt-30">
              Подробнее
            </a>
          </div>

          <div class="col-lg-3 col-md-6 item-bx">
            <h2 class="custom-font numb">02</h2>
            <h6 class="mb-20">Экстерьер дизайн</h6>
            <p>
              Далеко-далеко за словесными горами в стране гласных и согласных
              живут, рыбные тексты. Города, пустился.
            </p>
            <a href="#0" class="more custom-font mt-30">
              Подробнее
            </a>
          </div>

          <div class="col-lg-3 col-md-6 item-bx">
            <h2 class="custom-font numb">03</h2>
            <h6 class="mb-20">3Д моделирование</h6>
            <p>
              Далеко-далеко за словесными горами в стране гласных и согласных
              живут, рыбные тексты. Путь, журчит?
            </p>
            <a href="#0" class="more custom-font mt-30">
              Подробнее
            </a>
          </div>

          <div class="col-lg-3 col-md-6 item-bx">
            <h2 class="custom-font numb">04</h2>
            <h6 class="mb-20">Мебельный дизайн</h6>
            <p>
              Далеко-далеко за словесными, горами в стране гласных и согласных
              живут рыбные тексты. Пояс, рот.
            </p>
            <a href="#0" class="more custom-font mt-30">
              Подробнее
            </a>
          </div>
        </div>
      </div>
    </ServicesStyle>
  );
}

export default Services;
