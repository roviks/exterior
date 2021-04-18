import React from "react";
import { FooterStyle } from "../../styles/footer";

export default function Footer() {
  return (
    <FooterStyle className="main-footer dark">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="item abot">
              <div className="logo-footer mb-20">
                <a href="#0" className="logo">
                  <svg id="logo" viewBox="0 0 568 389.87">
                    <path
                      className="cls-1"
                      d="M284,116.87v-54L145.72,162.82l66.64-97.94a40,40,0,0,0-9.23-55.81L94.76,159.79l33.37-109a39.86,39.86,0,0,0,2.55-14c0-16.21-9.93-31.46-24.23-36.8L42.12,161.46l-1.77-.66L40,67.87A39.88,39.88,0,0,0,28.28,39.59,39.88,39.88,0,0,0,0,27.87v362H280.29a40.44,40.44,0,0,0-40.45-40.44H142V214.92ZM40,286.43v-1.08l.54-.37Z"
                    />
                    <path
                      className="cls-2"
                      d="M426,214.92V349.43H328.16a40.44,40.44,0,0,0-40.45,40.44H568v-362a40,40,0,0,0-40,40l-.35,92.93-1.77.66L461.55,0c-14.3,5.34-24.23,20.59-24.23,36.8a39.86,39.86,0,0,0,2.55,14l33.37,109L364.87,9.07a40,40,0,0,0-9.23,55.81l66.64,97.94L284,62.87v54ZM527.46,285l.54.37v1.08Z"
                    />
                    <rect
                      className="cls-1"
                      x="239.85"
                      y="217.32"
                      width="34.28"
                      height="34.28"
                    />
                    <rect
                      className="cls-1"
                      x="239.85"
                      y="270.71"
                      width="34.28"
                      height="34.28"
                    />
                    <rect
                      className="cls-1"
                      x="294.26"
                      y="217.32"
                      width="34.28"
                      height="34.28"
                    />
                    <rect
                      className="cls-1"
                      x="294.26"
                      y="270.71"
                      width="34.28"
                      height="34.28"
                    />
                  </svg>{" "}
                  EXTERIOR
                </a>
              </div>
              <p>
                Я беру на себя все, от идеи до концепции развитие к реализации.
              </p>
              <div className="social-icon">
                <a href="#0">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-behance"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-pinterest-p"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-2 offset-lg-1">
            <div className="item usful-links">
              <div className="fothead">
                <h6>Полезные ссылки</h6>
              </div>
              <ul>
                <li>
                  <i className="fas fa-chevron-right"></i>
                  <a href="#0">Экстерьер дизайн</a>
                </li>
                <li>
                  <i className="fas fa-chevron-right"></i>
                  <a href="#0">Дизайнерское агентство</a>
                </li>
                <li>
                  <i className="fas fa-chevron-right"></i>
                  <a href="#0">Магазин матрасов</a>
                </li>
                <li>
                  <i className="fas fa-chevron-right"></i>
                  <a href="#0">Контакты</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="item fotcont">
              <div className="fothead">
                <h6>Позвонить</h6>
              </div>
              <p>
                <a href="tel:+998993111155">+998 (99) 311 11-55</a>
              </p>
              <p>
                <a href="tel:+998712654700">+998 (71) 265 47-00</a>
              </p>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="item fotcont">
              <div className="fothead">
                <h6>Написать</h6>
              </div>
              <p>
                <a href="mailto:a.odilov228@gmail.com">a.odilov228@gmail.com</a>
              </p>
              <p>
                <a href="mailto:admin@enteriordesigner.uz">
                  admin@enteriordesigner.uz
                </a>
              </p>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="item fotcont">
              <div className="fothead">
                <h6>Посетить</h6>
              </div>
              <p>г. Ташкент, 100200, проспект Амира Темура, 108</p>
            </div>
          </div>
        </div>
      </div>
      <div className="sub-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="text-left">
                <p>© 2020 А. Одилов / Сделано с любовью</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="text-right">
                <p>Все права защищены.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FooterStyle>
  );
}
