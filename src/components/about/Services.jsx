import React from "react";
import { Section } from "../../styles/section";

import styled from 'styled-components';
export const ServicesStyle = styled(Section)`
  position: relative;
    margin-top: -120px;
    z-index: 3;

    .item-bx {
      padding: 60px 40px;
      height: 100%;
      background-color: #fff;
      border: 1px solid #eee;
      border-right: 0;
      transition: all .4s;

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
        <div class="row">
          <div class="col-lg-3 col-md-6 item-bx">
            <h2 class="custom-font numb">01</h2>
            <h6 class="mb-20">Architecture</h6>
            <p>
              Cras mollis turpis a ipsum ultes, nec cond imentum ipsum
              consequat.
            </p>
            <a href="#0" class="more custom-font mt-30">
              Read More
            </a>
          </div>

          <div class="col-lg-3 col-md-6 item-bx">
            <h2 class="custom-font numb">02</h2>
            <h6 class="mb-20">Interior Design</h6>
            <p>
              Cras mollis turpis a ipsum ultes, nec cond imentum ipsum
              consequat.
            </p>
            <a href="#0" class="more custom-font mt-30">
              Read More
            </a>
          </div>

          <div class="col-lg-3 col-md-6 item-bx">
            <h2 class="custom-font numb">03</h2>
            <h6 class="mb-20">3D Modeling</h6>
            <p>
              Cras mollis turpis a ipsum ultes, nec cond imentum ipsum
              consequat.
            </p>
            <a href="#0" class="more custom-font mt-30">
              Read More
            </a>
          </div>

          <div class="col-lg-3 col-md-6 item-bx">
            <h2 class="custom-font numb">04</h2>
            <h6 class="mb-20">Furniture Design</h6>
            <p>
              Cras mollis turpis a ipsum ultes, nec cond imentum ipsum
              consequat.
            </p>
            <a href="#0" class="more custom-font mt-30">
              Read More
            </a>
          </div>
        </div>
      </div>
    </ServicesStyle>
  );
}

export default Services;
