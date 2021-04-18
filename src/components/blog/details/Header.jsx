import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header
      class="pages-header bg-img valign"
      style={{
        backgroundImage: `url(${
          require("../../../assets/imgs/pg1.jpg").default
        })`,
      }}
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="cont text-center">
              <h1>Публикации</h1>
              <div class="path">
                <a href="#0">Главная</a>
                <span>/</span>
                <Link to="/blog">Блог</Link>
                <span>/</span>
                <a href="#0" class="active">
                  Публикации
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
