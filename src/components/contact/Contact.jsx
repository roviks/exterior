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
                  <h6 className="custom-font">Call Us</h6>
                  <p>+7 (111) 1234 56789</p>
                  <p>+1 (000) 9876 54321</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="item">
                <i class="far icon fa-envelope-open"></i>
                <div className="cont">
                  <h6 className="custom-font">Email Us</h6>
                  <p>contact@Archo.com</p>
                  <p>Username@website.com</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="item">
              <i class="fas icon fa-map"></i>
                <div className="cont">
                  <h6 className="custom-font">Address</h6>
                  <p>
                    B17 Princess Road, London, Greater London NW18JR, United
                    Kingdom
                  </p>
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
                    placeholder="Name"
                    required="required"
                  />
                </div>
                <div className="form-group">
                  <input
                    id="form_email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required="required"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    id="form_message"
                    name="message"
                    placeholder="Message"
                    rows="4"
                    required="required"
                  ></textarea>
                </div>
                <button type="submit" className="btn-curve btn-color disabled">
                  <span>Send Message</span>
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
