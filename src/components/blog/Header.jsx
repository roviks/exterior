import React from "react";

function Header() {
  return (
    <header
      className="pages-header bg-img valign"
      style={{backgroundImage: `url(${require("../../assets/imgs/pg1.jpg").default})`}}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="cont text-center">
              <h1>Our Blogs</h1>
              <div className="path">
                <a href="#0">Home</a>
                <span>/</span>
                <a href="#0" className="active">
                  blog
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
