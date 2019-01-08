import React, { Component } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Navigation.css";

class Navigation extends Component {
  render() {
    const sections = ["Intro", "About", "Dance"];
    const navLinks = sections.map(link => {
      return (
        <li>
          <AnchorLink href={"#" + link.toLowerCase()}>{link}</AnchorLink>
        </li>
      );
    });
    return (
      <nav className="navigation">
        <ul className="navcomps">{navLinks}</ul>
      </nav>
    );
  }
}

export default Navigation;
