import React, { Component } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Navigation.css";

class Navigation extends Component {
  render() {
    const sections = ["Intro", "About", "Experience", "Dance"];
    const navLinks = sections.map(link => {
      return (
        <li className="nav-item">
          <AnchorLink className="nav-link" href={"#" + link.toLowerCase()}>
            {link}
          </AnchorLink>
        </li>
      );
    });
    return (
      <nav
        className="justify-content-center nav nav-tabs"
        style={{ background: "black", border: "none" }}
      >
        <ul className="navcomps" style={{ fontFamily: "Helvetica" }}>
          {navLinks}
        </ul>
      </nav>
    );
  }
}

export default Navigation;
