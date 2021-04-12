import React from "react";

import styled from "styled-components";
import { Section } from "../../styles/section";
export const PortfolioStyle = styled(Section)`
  .filtering {
    .filter {
      padding: 15px;
      box-shadow: 0px 10px 30px rgb(0 0 0 / 10%);
      display: inline-block;
      span {
        font-weight: 600;
        font-size: 13px;
        letter-spacing: 1px;
        text-transform: uppercase;
        margin: 0 20px;
        cursor: pointer;
        position: relative;
        &::after {
          content: "";
          width: 7px;
          height: 7px;
          background: #b19777;
          border-radius: 50%;
          position: absolute;
          right: -24px;
          top: 40%;
        }
        &:last-child {
          &::after {
            display: none;
          }
        }
        &.active {
          color: #b19777;
        }
      }
    }
  }

  .gallery {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    .items {
      flex: 0 1 33%;
      width: 33%;
      position: relative;
      &:hover {
        .info {
          opacity: 1;
          transform: translate(0) skew(0);
          transition: all 0.4s;
        }
      }
      .item-img {
        overflow: hidden;
        position: relative;
        height: 440px;
        &::before,
        &::after {
          content: "";
          position: absolute;
          background: #fff;
          z-index: 2;
          transition: all 0.4s;
        }
        &::before {
          height: 50px;
          width: 1px;
          left: 50%;
          top: -100px;
        }
        &::after {
          width: 50px;
          height: 1px;
          top: 50%;
          left: -100px;
        }
        &:hover {
          &::before {
            top: 50%;
            transform: translateY(-25px);
          }
          &::after {
            left: 50%;
            transform: translateX(-25px);
          }
          .item-img-overlay {
            opacity: 1;
            visibility: visible;
          }
        }
        &-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(38, 38, 40, 0.5);
          text-align: center;
          transition: all 0.5s;
          opacity: 0;
          visibility: hidden;
        }
      }
      .info {
        background: #fff;
        position: absolute;
        bottom: 0;
        left: 15px;
        width: 90%;
        padding: 15px;
        transform: translateX(-30px) translateY(30px) skew(10deg);
        opacity: 0;
        transition: all 0.3s;
      }
    }
  }
`;

function Portfolio() {
  return (
    <PortfolioStyle className="portfolio section-padding">
      <div className="container">
        <div className="row">
          <div className="filtering text-center col-12">
            <div className="filter box">
              <span data-filter="*" className="active">
                All
              </span>
              <span data-filter=".interior" className="">
                Interior
              </span>
              <span data-filter=".theaters" className="">
                Theaters
              </span>
              <span data-filter=".residential" className="">
                Residential
              </span>
            </div>
          </div>

          <div className="gallery twsty inf-lit full-width">
            <div className="items theaters three-column mt-50">
              <div
                className="item-img bg-img"
                style={{
                  backgroundImage: `url(${
                    require("../../assets/imgs/port-1.jpg").default
                  })`,
                }}
              >
                <a href="project-details2.html">
                  <div className="item-img-overlay"></div>
                </a>
              </div>
              <div className="info mt-10">
                <h5>Fantastic interior</h5>
                <span>Interior Design</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PortfolioStyle>
  );
}

export default Portfolio;
