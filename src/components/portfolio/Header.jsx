import React from "react";

import styled from "styled-components";
export const HeaderStyle = styled.header`
  &::before {
    opacity: 0.8;
    background-color: #fff;
  }
`;

function Header() {
  return (
    <header
      className="pages-header bg-img valign"
      style={{
        backgroundImage: `url(${require("../../assets/imgs/pg1.jpg").default})`,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="cont text-center">
              <h1>Мое портфолио</h1>
              <div className="path">
                <a href="#0">Главная</a>
                <span>/</span>
                <a href="#0" className="active">
                  Портфолио
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
