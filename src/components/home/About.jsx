import React from "react";
import styled from "styled-components";
import { Section } from "../../styles/section";

export const AboutStyle = styled(Section)`
  background-image: url(${require("../../assets/imgs/pat1.png").default});
  background-repeat: no-repeat;
  background-size: 60%;
  background-position: 800px 0;
  z-index: 0;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    opacity: 0.91;
    z-index: -1;
  }
  .valign {
    display: flex;
    align-items: center;
  }
  .specialty {
    ul {
      li {
        width: max-content;
        font-size: 15px;
        font-weight: 700;
        letter-spacing: 1px;
        text-transform: uppercase;
        padding: 0 0 15px;
        border-bottom: 1px solid #f1f1f1;
        margin-bottom: 30px;
        span {
          font-size: 14px;
          font-weight: 300;
          color: #999;
          margin-right: 30px;
        }
      }
    }
  }
`;

function About() {
  return (
    <AboutStyle className="about section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="extra">
              <h2 className="mb-20 playfont fz-50">
                Что я <br /> на самом деле делаю.
              </h2>
              <p>
                Создаю общий вид зданий и других сооружений, но дизайн здания
                включает в себя гораздо больше, чем его внешний вид. Здания
                также должны быть функциональными, безопасными и экономичными и
                соответствовать потребностям людей, которые их используют. Я
                учитываю все эти факторы при проектировании зданий и других
                сооружений.
              </p>
            </div>
          </div>
          <div className="col-lg-4 valign">
            <div className="specialty">
              <ul>
                <li>
                  <span>01.</span>Дизайн проекта
                </li>
                <li>
                  <span>02.</span>Визуализация экстерьера
                </li>
                <li>
                  <span>03.</span>Ландшафтный дизайн
                </li>
                <li>
                  <span>04.</span>Услуги архитектора
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </AboutStyle>
  );
}

export default About;
