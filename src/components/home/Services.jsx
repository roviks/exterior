import React from "react";
import { Section, SectionTitle } from "../../styles/section";
import styled from 'styled-components';

export const ServicesStyle = styled(Section)`
  h6 {
    font-size: 18px;
  }
  .item-bx {
    padding: 60px 40px;
    height: 100%;
    background-color: #fff;
    border: 1px solid #eee;
    border-right: 0;
    transition: all .4s;
    &.bg-img {
      position: relative;
      border: 0;
      z-index: 2;
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #fff;
        transition: all .4s;
        z-index: -1;
      }
    }
    &:hover {
      background-color: rgba(0, 0, 0, 0.6);
      color: #fff;
      &.bg-img::after {
        background-color: rgba(0, 0, 0, 0.6);
      }
      i.icon {
        color: #b19777;
      }
      .more {
        color: #b19777
      }
    }
    .more {
      font-size: 20px;
      display: inline-block;
      color: inherit;
    }
    p {
      color: #888;
      font-size: 15px;
      font-weight: 400;
      line-height: 2;
      margin: 0;
    }
  }
  i.icon {
    font-size: 60px; 
  }
  
`;

function Services() {
  return (
    <ServicesStyle className="services section-padding bg-gray">
      <div className="container">
        <SectionTitle className="section-head text-center">
          <h6 className="custom-font">Best Features</h6>
          <h4 className="playfont">My Services</h4>
        </SectionTitle>
        <div className="row">
          <div className="col-lg-4">
            <div className="item-bx bg-img" style={{backgroundImage: `url(${require("../../assets/imgs/1.jpg").default})`}}>
              <i className="icon flaticon-building"></i>
              <h6 className="mb-20">Architecture</h6>
              <p>
                Cras mollis turpis a ipsum ultes, nec cond imentum ipsum
                consequat.
              </p>
              <a href="#0" className="more custom-font mt-30">
                Read More
              </a>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="item-bx bg-img" style={{backgroundImage: `url(${require("../../assets/imgs/2.jpg").default})`}}>
              <i className="icon flaticon-house"></i>
              <h6 className="mb-20">Interior Design</h6>
              <p>
                Cras mollis turpis a ipsum ultes, nec cond imentum ipsum
                consequat.
              </p>
              <a href="#0" className="more custom-font mt-30">
                Read More
              </a>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="item-bx bg-img" style={{backgroundImage: `url(${require("../../assets/imgs/3.jpg").default})`}}>
              <i className="icon flaticon-plan"></i>
              <h6 className="mb-20">3D Modeling</h6>
              <p>
                Cras mollis turpis a ipsum ultes, nec cond imentum ipsum
                consequat.
              </p>
              <a href="#0" className="more custom-font mt-30">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </ServicesStyle>
  );
}

export default Services;
