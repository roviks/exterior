import React from "react";
import styled from "styled-components";
import { Section } from "../../styles/section";

export const NumbersStyle = styled(Section)`
  padding-top: 0;

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

function Numbers() {
  return (
    <NumbersStyle className="numbers section-padding pt-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-6 mb-20">
            <div className="item">
              <h3>
                <span className="nbr custom-font">352</span>
              </h3>
              <h6>Завершенных проектов</h6>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className="item">
              <h3>
                <span className="nbr custom-font">567</span>
              </h3>
              <h6>Довольных клиентов</h6>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className="item">
              <h3>
                <span className="nbr custom-font">656</span>
                <i>$</i>
              </h3>
              <h6>Ежемесячный доход</h6>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className="item">
              <h3>
                <span className="nbr custom-font">17</span>
              </h3>
              <h6>Наград выигранно</h6>
            </div>
          </div>
        </div>
      </div>
    </NumbersStyle>
  );
}

export default Numbers;
