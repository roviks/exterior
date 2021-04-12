import React from "react";
import { Section, SectionTitle } from "../../styles/section";
import styled from 'styled-components';

export const BlogStyle = styled(Section)`
  .item {
    text-align: center;
    .more {
      color: #b19777;
      font-size: 16px;
      text-transform: uppercase;
      letter-spacing: 1px;
      border-bottom: 1px solid #b19777;
      transition: all .4s;
    }
    .info {
      margin-bottom: 15px;
      a {
        color: #777;
        font-size: 11px;
        text-transform: uppercase;
        font-weight: 500;
        letter-spacing: 1px;
        margin-right: 10px;
      }
    }
    .cont {
      position: relative;
      width: 92%;
      margin-top: -40px;
      margin-left: 4%;
      padding: 40px;
      background: #fff;
      h5 {
        font-size: 21px;
        line-height: 1.7;
        margin-bottom: 15px;
      }
    }
  }
`;

function Blog() {
  return (
    <BlogStyle className="blog-grid center bg-gray section-padding">
      <div className="container">
        <div className="section-head text-center">
          <div className="row justify-content-center">
            <SectionTitle className="col-lg-6 col-md-8 col-sm-10">
              <h6
                className="custom-font"
              >
                Latest News
              </h6>
              <h4
                className="playfont wow flipInX"
              >
                My Blog
              </h4>
            </SectionTitle>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div
              className="item md-mb50"
            >
              <div className="post-img">
                <div className="img">
                  <img src={require("../../assets/imgs/blog-1.jpg").default} alt="" />
                </div>
              </div>
              <div className="cont">
                <div className="info">
                  <a href="#0">Alex Smith</a>
                  <a href="#0">Aug 06 2019</a>
                </div>

                <h5 className="playfont">
                  <a href="#0">
                    In Good Taste: Mark Finlay Architects and Interiors
                  </a>
                </h5>

                <a href="blog-details.html" className="more">
                  <span className="custom-font">Read More</span>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div
              className="item md-mb50"
            >
              <div className="post-img">
                <div className="img">
                  <img src={require("../../assets/imgs/blog-1.jpg").default} alt="" />
                </div>
              </div>
              <div className="cont">
                <div className="info">
                  <a href="#0">Alex Smith</a>
                  <a href="#0">Aug 06 2019</a>
                </div>
                <h5 className="playfont">
                  <a href="#0">
                    Five Things You Should Know About Modern Furniture.
                  </a>
                </h5>
                <a href="blog-details.html" className="more">
                  <span className="custom-font">Read More</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BlogStyle>
  );
}

export default Blog;
