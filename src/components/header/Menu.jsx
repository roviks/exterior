import classNames from "classnames";
import { useEffect, useState } from "react";
import {
  Nav,
  Search,
  Lists,
  Logo,
  Link,
  List,
  ButtonToggler,
  Icons,
} from "../../styles/header";
// import logo from "../../assets/imgs/logo.png";

function Menu() {
  const [activeMenu, setActiveMenu] = useState(false);
  const [activeSearch, setActiveSearch] = useState(false)
  const [animate, setAnimate] = useState(false)
  const closeMenu = () => {
    setAnimate(true);
    setTimeout(() => {
      setActiveSearch(false);
      setAnimate(false);
    }, 500);
  }
  useEffect(() => {
    if (activeSearch || activeMenu) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [activeSearch, activeMenu]);

  return (
    <Nav>
      <div className="container">
        <Logo>
          <svg id="logo" viewBox="0 0 568 389.87">
            <defs></defs>
            <path
              className="cls-1"
              d="M284,116.87v-54L145.72,162.82l66.64-97.94a40,40,0,0,0-9.23-55.81L94.76,159.79l33.37-109a39.86,39.86,0,0,0,2.55-14c0-16.21-9.93-31.46-24.23-36.8L42.12,161.46l-1.77-.66L40,67.87A39.88,39.88,0,0,0,28.28,39.59,39.88,39.88,0,0,0,0,27.87v362H280.29a40.44,40.44,0,0,0-40.45-40.44H142V214.92ZM40,286.43v-1.08l.54-.37Z"
            />
            <path
              className="cls-2"
              d="M426,214.92V349.43H328.16a40.44,40.44,0,0,0-40.45,40.44H568v-362a40,40,0,0,0-40,40l-.35,92.93-1.77.66L461.55,0c-14.3,5.34-24.23,20.59-24.23,36.8a39.86,39.86,0,0,0,2.55,14l33.37,109L364.87,9.07a40,40,0,0,0-9.23,55.81l66.64,97.94L284,62.87v54ZM527.46,285l.54.37v1.08Z"
            />
            <rect
              className="cls-1"
              x="239.85"
              y="217.32"
              width="34.28"
              height="34.28"
            />
            <rect
              className="cls-1"
              x="239.85"
              y="270.71"
              width="34.28"
              height="34.28"
            />
            <rect
              className="cls-1"
              x="294.26"
              y="217.32"
              width="34.28"
              height="34.28"
            />
            <rect
              className="cls-1"
              x="294.26"
              y="270.71"
              width="34.28"
              height="34.28"
            />
          </svg>{" "}
          EXTERIOR
        </Logo>
        <ButtonToggler type="button" onClick={() =>  setActiveMenu(!activeMenu)}>
          {(activeMenu) ? <i className="close fas fa-times" onClick={closeMenu}></i> : <i className="fas fa-bars"></i>}
        </ButtonToggler>
        <Lists className={classNames({
          "show": activeMenu
        })}>
          <List>
            <Link to="/">Home</Link>
          </List>
          <List>
            <Link to="/about">About</Link>
          </List>
          <List>
            <Link to="/portfolio">Portfolio</Link>
          </List>
          <List>
            <Link to="/blog">Blog</Link>
          </List>
          <List>
            <Link to="/contact">Contact</Link>
          </List>
          <Icons className="social-icon">
            <a href="#0">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#0">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#0">
              <i className="fab fa-behance"></i>
            </a>
          </Icons>
          <Search className="search">
            <div className={classNames("search-form text-center custom-font", {
              "show": activeSearch,
              "closing": animate
            })}>
              <form>
                <input type="text" name="search" placeholder="Search" />
              </form>
              <i className="close fas fa-times" onClick={closeMenu}></i>
            </div>
            <i className="fas fa-search" onClick={() => setActiveSearch(true)}></i>
          </Search>
        </Lists>
      </div>
    </Nav>
  );
}

export default Menu;
