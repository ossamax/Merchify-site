import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Navbar from "./components/Navbar/Navbar";
import Men from "./components/men/men";
import "./GlobalStyles.css";
import Blog from "./components/blog/blog";
import Women from "./components/women/women";
import Kids from "./components/kids/kids";
import HomeLiving from "./components/homeliving/HomeLiving";
import Wallart from "./components/wallart/wallart";
import EcoFriendly from "./components/ecofriendly/ecofriendly";
import Gifts from "./components/gifts/gifts";
import Accessories from "./components/accessoire/accessories";
import Aboutus from "./components/aboutus/aboutus";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Aboutus">
          <Aboutus />
        </Route>
        <Route exact path="/Contact">
          <Contact />
        </Route>
        <Route exact path="/Men">
          <Men />
        </Route>
        <Route exact path="/Blog">
          <Blog />
        </Route>
        <Route exact path="/Women">
          <Women />
        </Route>
        <Route exact path="/Kids">
          <Kids />
        </Route>
        <Route exact path="/HomeLiving">
          <HomeLiving />
        </Route>
        <Route exact path="/wallart">
          <Wallart />
        </Route>
        <Route exact path="/ecofriendly">
          <EcoFriendly />
        </Route>
        <Route exact path="/Gifts">
          <Gifts />
        </Route>
        <Route exact path="/Accessories">
          <Accessories />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
