import React from "react";

import styled from "styled-components";
import { Section } from "../../styles/section";
export const SkillsStyle = styled(Section)`
  .skills-box {
    width: 100%;
  }
  .skill {
    &-item {
      margin-bottom: 50px;
      h6 {
        font-size: 13px;
        font-weight: 300;
        font-style: italic;
        text-transform: uppercase;
        letter-spacing: 2px;
        margin-bottom: 10px;
      }
    }
    &-progress {
      height: 7px;
      background-color: #f7f7f7;
      position: relative;

      .progres {
        position: absolute;
        height: 100%;
        width: 0;
        top: 0;
        left: 0;
        background-color: #333;
        transition: all 1.5s;
        &::after {
          content: attr(data-value);
          position: absolute;
          right: 10px;
          top: -30px;
          font-size: 20px;
          font-weight: 100;
        }
        &::before {
          content: "";
          width: 1px;
          height: 30px;
          background: #333;
          position: absolute;
          right: 0;
          bottom: 0;
        }
      }
    }
  }
  h4 {
    font-size: 30px;
  }
  p {
    color: #888;
    font-size: 15px;
    font-weight: 400;
    line-height: 2;
    margin: 0;
  }
`;

function Skills() {
  return (
    <SkillsStyle class="skills-sec section-padding pt-80">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 valign">
            <div class="skills-box full-width">
              <div class="skill-item">
                <h6>Architecture</h6>
                <div class="skill-progress">
                  <div
                    class="progres custom-font"
                    data-value="80%"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
              <div class="skill-item">
                <h6>Interior Design</h6>
                <div class="skill-progress">
                  <div
                    class="progres custom-font"
                    data-value="75%"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>
              <div class="skill-item">
                <h6>3D Modeling</h6>
                <div class="skill-progress">
                  <div
                    class="progres custom-font"
                    data-value="90%"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="content">
              <h4 class="playfont line-height-50 mb-20">
                Providing Customized Design Solutions That Fits Every Space .
              </h4>
              <p class="mb-10">
                Beyond more stoic this along goodness hey this this wow ipsum
                manate far impressive manifest farcrud opened inside.
              </p>
              <p>
                Fustered impressive manifest crud opened inside owing punitively
                around forewent and after wasteful telling sprang coldly and
                spoke less clients.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </SkillsStyle>
  );
}

export default Skills;
