
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";

import "./assets/css/all.min.css";
import "./assets/css/bootstrap.grid.min.css";
import "./assets/webfonts/flaticon.css";
import "./styles/reset.scss";
import "./styles/index.scss";
import Footer from "./components/footer";
import BlogDetails from "./pages/BlogDetails";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/blog" exact>
          <Blog />
        </Route>
        <Route path="/blog-details" exact>
          <BlogDetails />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/portfolio" exact>
          <Portfolio />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
