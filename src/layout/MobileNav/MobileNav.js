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
    console.log(this.state.isOpen);
  };

  render() {
    return (
      <div>
        <Burger toggleNav={this.toggleNav} />
        {/* <MobileNavElements open={this.state.isOpen} /> */}
      </div>
    );
  }
}

export default MobileNav;
