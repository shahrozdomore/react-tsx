import React from "react";
import { Link } from "react-router-dom";

export interface NavbarProps {}

export interface NavbarState {}

class Navbar extends React.Component<NavbarProps, NavbarState> {
  // state = { :  }
  render() {
    return (
      <div>
        <Link to="/">Home </Link>
        <Link to="/about">About Us </Link>
      </div>
    );
  }
}

export default Navbar;
