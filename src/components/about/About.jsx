import React from "react";
import { Section } from "../../styles/section";

import styled from "styled-components";
export const AboutStyle = styled(Section)`
  p {
    color: #888;
    font-size: 15px;
    font-weight: 400;
    line-height: 2;
    margin: 0;
  }
  .item {
    position: relative;
    .social {
      position: absolute;
      top: 0;
      left: -40px;
      background-color: #fff;
      padding: 20px 10px;
      z-index: 2;
      opacity: 0;
      transition: all 0.4s;
    }
    h6 {
      font-size: 12px;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
    h3 {
      margin-bottom: 10px;
      span {
        font-size: 60px;
        color: #b19777;
      }
      i {
        font-size: 30px;
        font-weight: 300;
        font-style: normal;
        color: #777;
        margin-left: 15px;
      }
    }
    &::before {
      width: 0;
      height: 0;
      border-top: 35px solid transparent;
      border-right: 35px solid #f7f7f7;
      bottom: 35px;
      content: "";
      position: absolute;
      right: 20%;
      z-index: -1;
    }
    &::after {
      width: 35px;
      height: 35px;
      bottom: 0;
      background: #f7f7f7;
      content: "";
      position: absolute;
      right: 20%;
      z-index: -1;
    }
  }
`;

function About() {
  return (
    <AboutStyle class="about section-padding">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="numbers">
              <div class="row">
                <div class="col-sm-6  mb-20">
                  <div class="item">
                    <h3>
                      <span class="nbr custom-font">352</span>
                    </h3>
                    <h6>Завершенных проектов</h6>
                  </div>
                </div>
                <div class="col-sm-6  mb-20">
                  <div class="item">
                    <h3>
                      <span class="nbr custom-font">567</span>
                    </h3>
                    <h6>Довольных клиентов</h6>
                  </div>
                </div>
                <div class="col-sm-6  mb-20">
                  <div class="item">
                    <h3>
                      <span class="nbr custom-font">656</span>
                      <i>$</i>
                    </h3>
                    <h6>Ежемесячный доход</h6>
                  </div>
                </div>
                <div class="col-sm-6  mb-20">
                  <div class="item">
                    <h3>
                      <span class="nbr custom-font">17</span>
                    </h3>
                    <h6>Наград выигранно</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="txt-cont">
              <p class="mb-20">
                Далеко-далеко за словесными горами в стране гласных и согласных
                живут рыбные тексты. Пунктуация алфавит ручеек которое
                повстречался необходимыми, залетают выйти домах наш курсивных?
                Страну дорогу его знаках океана? Ты грустный журчит точках
                продолжил заманивший злых, путь семантика это собрал даль
                повстречался необходимыми силуэт, текстами коварных даже, не сих
                заголовок то текста семь предложения. Использовало букв назад
                наш пор языком себя даль там!
              </p>
              <p>
                Далеко-далеко за, словесными горами в стране гласных и согласных
                живут рыбные тексты. Подзаголовок, реторический лучше. Своих
                деревни власти образ лучше точках рекламных пор журчит! Ему
                силуэт рукопись встретил вдали языкового языком до назад себя
                запятых текст вскоре образ строчка, курсивных раз буквенных.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AboutStyle>
  );
}

export default About;
