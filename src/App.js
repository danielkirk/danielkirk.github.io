import React, { Component } from "react";
import Navigation from "./Navigation/Navigation";
import Header from "./Navigation/Header";
import AboutMe from "./Navigation/AboutMe";
import Contact from "./Navigation/Contact";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation logo="Portfolio" />
        <Header />
        <div
          id="about"
          style={{
            backgroundColor: "rgb(24,24,24)",
            // backgroundSize: "cover",
            height: "100%",
            minHeight: "100%",
            width: "100vw"
            // minWidth: "100%",
            // top: 0,
            // left: 0
          }}
        >
          <AboutMe />
        </div>
        <Contact />
      </React.Fragment>
    );
  }
}

export default App;
