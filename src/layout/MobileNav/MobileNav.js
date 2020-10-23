import React, { Component } from "react";
import Burger from "./Burger/Burger";
import MobileNavElements from "./MobileNavElements/MobileNavElements";

class MobileNav extends Component {
  state = {
    isOpen: false,
  };
  toggleNav = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    return (
      <div>
        <Burger isOpen={this.state.isOpen} toggleNav={this.toggleNav} />
        <MobileNavElements isOpen={this.state.isOpen} toggleNav={this.toggleNav}/>
      </div>
    );
  }
}

export default MobileNav;
