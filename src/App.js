import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import "./App.css";
import Header from "./layout/header/Header";
import MainPage from "./pages/mainPage/MainPage";
import Contact from "./pages/contact/Contact";

class App extends Component {
  state = {
    test: "dziala",
  };
  render() {
    return (
      <BrowserRouter>
        <>
          <Switch>
            <Header />
            <Route exact path="/" component={MainPage} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}

export default App;
