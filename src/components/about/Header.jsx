import React from "react";

function Header() {
  return (
    <header
      class="pages-header bg-img valign"
      style={{backgroundImage: `url(${require("../../assets/imgs/pg1.jpg").default})`}}
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="cont text-center">
              <h1>About me</h1>
              <div class="path">
                <a href="#0">Home</a>
                <span>/</span>
                <a href="#0" class="active">
                  About me
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
