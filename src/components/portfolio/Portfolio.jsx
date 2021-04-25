import classNames from "classnames";
import React, { useState } from "react";

import styled from "styled-components";
import { Section } from "../../styles/section";
export const PortfolioStyle = styled(Section)`
  .filtering {
    .filter {
      padding: 15px;
      box-shadow: 0px 10px 30px rgb(0 0 0 / 10%);
      display: inline-flex;
      flex-wrap: wrap;
      justify-content: center;
      @media (max-width: 575px) {
        padding: 15px 5px;
      }
      span {
        font-weight: 600;
        font-size: 13px;
        letter-spacing: 1px;
        text-transform: uppercase;
        margin: 0 20px;
        cursor: pointer;
        position: relative;
        @media (max-width: 575px) {
          font-size: 11px;
          margin-bottom: 10px;
          &::after {
            display: none;
          }
        }
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
    overflow: hidden;
    width: 100%;
    padding: 0 15px;
    .items {
      flex: 0 1 33%;
      width: 33%;
      position: relative;
      @media (max-width: 767px) {
        flex: 0 1 50%;
        width: 50%;
      }
      @media (max-width: 575px) {
        flex: 0 1 100%;
        width: 100%;
      }

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
        @media (max-width: 767px) {
          height: 300px;
        }
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
  const [activeTab, setActiveTab] = useState(null);

  const changeTab = (id) => {
    setActiveTab(id);
  };
  return (
    <PortfolioStyle className="portfolio section-padding">
      <div className="container">
        <div className="row">
          <div className="filtering text-center col-12">
            <div className="filter box">
              <span
                className={classNames({
                  active: activeTab === null,
                })}
                onClick={() => changeTab(null)}
              >
                Все
              </span>
              <span
                className={classNames({
                  active: activeTab === 0,
                })}
                onClick={() => changeTab(0)}
              >
                Здания
              </span>
              <span
                className={classNames({
                  active: activeTab === 1,
                })}
                onClick={() => changeTab(1)}
              >
                Театры
              </span>
              <span
                className={classNames({
                  active: activeTab === 2,
                })}
                onClick={() => changeTab(2)}
              >
                Жилые дома
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
                <h5>Фантастический экстерьер</h5>
                <span>Экстерьер Дизайн</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PortfolioStyle>
  );
}

export default Portfolio;
