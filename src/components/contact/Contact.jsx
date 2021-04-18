import React from "react";

import styled from "styled-components";
import { Section } from "../../styles/section";
export const ContactStyle = styled(Section)`
  padding: 0;
  .map-box {
    padding: 0;
    .map {
      height: 100%;
    }
  }
  .form {
    padding: 120px 5%;
    &-group {
      margin-bottom: 1rem;
    }
    input,
    textarea {
      padding: 15px;
      background: #f7f7f7;
      border: 0;
      font-family: inherit;
      font-size: inherit;
      width: 100%;
    }
    textarea {
      height: 160px;
    }
  }
  .item {
    padding: 40px 20px;
    background: #fff;
    display: flex;
    .icon {
      font-size: 30px;
      color: #999;
      padding-right: 30px;
    }
    .cont {
      h6 {
        font-size: 20px;
        color: #b19777;
        margin-bottom: 10px;
      }
      p {
        color: #888;
        font-size: 13px;
        font-weight: 400;
        line-height: 2;
        margin: 0;
      }
    }
  }
`;

function Contact() {
  return (
    <ContactStyle className="contact">
      <div className="info bg-gray pt-80 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="item">
                <i class="fas icon fa-mobile-alt"></i>
                <div className="cont">
                  <h6 className="custom-font">Позвоните мне</h6>
                  <p>
                    <a href="tel:+998993111155">+998 (99) 311 11-55</a>
                  </p>
                  <p>
                    <a href="tel:+998712654700">+998 (71) 265 47-00</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="item">
                <i class="far icon fa-envelope-open"></i>
                <div className="cont">
                  <h6 className="custom-font">Напишите мне</h6>
                  <p>
                    <a href="mailto:a.odilov228@gmail.com">
                      a.odilov228@gmail.com
                    </a>
                  </p>
                  <p>
                    <a href="mailto:admin@enteriordesigner.uz">
                      admin@enteriordesigner.uz
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="item">
                <i class="fas icon fa-map"></i>
                <div className="cont">
                  <h6 className="custom-font">Адрес</h6>
                  <p>г. Ташкент, 100200, проспект Амира Темура, 108</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 map-box"></div>
          <div className="col-lg-6 form">
            <form
              id="contact-form"
              method="post"
              action="contact.php"
              novalidate="true"
            >
              <div className="messages"></div>
              <div className="controls">
                <div className="form-group">
                  <input
                    id="form_name"
                    type="text"
                    name="name"
                    placeholder="Ваше имя"
                    required="required"
                  />
                </div>
                <div className="form-group">
                  <input
                    id="form_email"
                    type="email"
                    name="email"
                    placeholder="Ваша почта"
                    required="required"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    id="form_message"
                    name="message"
                    placeholder="Сообщение"
                    rows="4"
                    required="required"
                  ></textarea>
                </div>
                <button type="submit" className="btn-curve btn-color disabled">
                  <span>Отправить</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </ContactStyle>
  );
}

export default Contact;
