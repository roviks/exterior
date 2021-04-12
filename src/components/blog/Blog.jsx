import React from "react";

import { Section } from "../../styles/section";
import styled from "styled-components";
import { Link } from "react-router-dom";
export const BlogStyle = styled(Section)`
  @media (min-width: 992px) {
    .offset-lg-1 {
      margin-left: 8.333333%;
    }
  }
  .posts {
    .item {
      p {
        color: #888;
        font-size: 15px;
        font-weight: 400;
        line-height: 2;
        margin: 0;
      }

      .content {
        padding-top: 25px;
        .more {
          margin-top: 20px;
          font-size: 12px;
          font-weight: 500;
          display: inline-block;
          text-transform: uppercase;
          letter-spacing: 2px;
          padding-left: 60px;
          position: relative;
          transition: all 0.5s;
          &::after {
            content: "";
            width: 50px;
            height: 1px;
            background: #090909;
            position: absolute;
            left: 0px;
            top: 50%;
            transition: all 0.5s;
          }
          &:hover {
            padding-left: 40px;
            &::after {
              width: 30px;
            }
          }
        }
        h4 {
          font-weight: 700;
          font-size: 30px;
          line-height: 1.6;
          margin-bottom: 5px;
        }
        .tags {
          margin-bottom: 10px;
          a {
            font-size: 12px;
            font-weight: 500;
            color: #b19777;
            padding-right: 20px;
            position: relative;
          }
        }
      }
      .img {
        position: relative;
        .info {
          position: absolute;
          right: 0;
          top: 0;
          padding: 15px;
          background: #fff;
          .date {
            text-align: center;
            color: #b19777;
            h5 {
              font-size: 14px;
              text-transform: uppercase;
              letter-spacing: 2px;
            }
            .num {
              display: block;
              font-size: 30px;
              font-weight: 700;
              margin-bottom: 10px;
              padding-bottom: 10px;
              position: relative;
            }
          }
        }
      }
    }
  }
`;

function Blog() {
  return (
    <BlogStyle className="blog-pg section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="posts">
              <div className="item mb-80">
                <div className="img">
                  <Link to="/blog-details">
                    <div className="simpleParallax">
                      <img
                        src={require("../../assets/imgs/b4.jpg").default}
                        alt=""
                        className="thumparallax"
                      />
                    </div>
                  </Link>
                  <div className="info">
                    <div className="date">
                      <h5>
                        <a href="#0">
                          <span className="num custom-font">06</span>
                          <span>Aug</span>
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-10 offset-lg-1">
                    <div className="content">
                      <div className="tags">
                        <a href="#0">WordPress</a>
                        <a href="#0">Themeforest</a>
                        <a href="#0">Archo</a>
                      </div>
                      <h4 className="title">
                        <Link to="/blog-details">
                          Build a Beautiful Blog With Ease
                        </Link>
                      </h4>
                      <p>
                        Success is no accident. It is hard work, perseverance,
                        learning, studying, sacrifice and most of all, love of
                        what you are doing.
                      </p>
                      <Link to="/blog-details" className="more">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item mb-80">
                <div className="img">
                  <Link to="/blog-details">
                    <div className="simpleParallax">
                      <img
                        src={require("../../assets/imgs/b4.jpg").default}
                        alt=""
                        className="thumparallax"
                      />
                    </div>
                  </Link>
                  <div className="info">
                    <div className="date">
                      <h5>
                        <a href="#0">
                          <span className="num custom-font">06</span>
                          <span>Aug</span>
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-10 offset-lg-1">
                    <div className="content">
                      <div className="tags">
                        <a href="#0">WordPress</a>
                        <a href="#0">Themeforest</a>
                        <a href="#0">Archo</a>
                      </div>
                      <h4 className="title">
                        <Link to="/blog-details">
                          Build a Beautiful Blog With Ease
                        </Link>
                      </h4>
                      <p>
                        Success is no accident. It is hard work, perseverance,
                        learning, studying, sacrifice and most of all, love of
                        what you are doing.
                      </p>
                      <Link to="/blog-details" className="more">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item mb-80">
                <div className="img">
                  <Link to="/blog-details">
                    <div className="simpleParallax">
                      <img
                        src={require("../../assets/imgs/b4.jpg").default}
                        alt=""
                        className="thumparallax"
                      />
                    </div>
                  </Link>
                  <div className="info">
                    <div className="date">
                      <h5>
                        <a href="#0">
                          <span className="num custom-font">06</span>
                          <span>Aug</span>
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-10 offset-lg-1">
                    <div className="content">
                      <div className="tags">
                        <a href="#0">WordPress</a>
                        <a href="#0">Themeforest</a>
                        <a href="#0">Archo</a>
                      </div>
                      <h4 className="title">
                        <Link to="/blog-details">
                          Build a Beautiful Blog With Ease
                        </Link>
                      </h4>
                      <p>
                        Success is no accident. It is hard work, perseverance,
                        learning, studying, sacrifice and most of all, love of
                        what you are doing.
                      </p>
                      <Link to="/blog-details" className="more">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="img">
                  <Link to="/blog-details">
                    <div className="simpleParallax">
                      <img
                        src={require("../../assets/imgs/b4.jpg").default}
                        alt=""
                        className="thumparallax"
                      />
                    </div>
                  </Link>
                  <div className="info">
                    <div className="date">
                      <h5>
                        <a href="#0">
                          <span className="num custom-font">06</span>
                          <span>Aug</span>
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-10 offset-lg-1">
                    <div className="content">
                      <div className="tags">
                        <a href="#0">WordPress</a>
                        <a href="#0">Themeforest</a>
                        <a href="#0">Archo</a>
                      </div>
                      <h4 className="title">
                        <Link to="/blog-details">
                          Build a Beautiful Blog With Ease
                        </Link>
                      </h4>
                      <p>
                        Success is no accident. It is hard work, perseverance,
                        learning, studying, sacrifice and most of all, love of
                        what you are doing.
                      </p>
                      <Link to="/blog-details" className="more">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BlogStyle>
  );
}

export default Blog;
