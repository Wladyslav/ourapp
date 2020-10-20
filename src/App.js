import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Header from "./layout/header/Header";
import MainPage from "./pages/mainPage/MainPage";
import Contact from "./pages/contact/Contact";
import Footer from "./layout/Footer/Footer";
import Services from "./pages/services/Services";

class App extends Component {
  state = {};
  componentDidMount() {
    window.addEventListener("scroll", () => {
      let nav = document.querySelector("header");
      nav.classList.toggle("section_size", window.scrollY > 0);
      let logo = document.querySelector("small");
      logo.classList.toggle("section_size", window.scrollY > 0);
    });
  }
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/services" component={Services} />

          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
