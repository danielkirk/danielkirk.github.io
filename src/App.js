import React, { Component } from "react";
import Navigation from "./Navigation/Navigation";
import Header from "./Navigation/Header";
import AboutMe from "./Navigation/AboutMe";
import Contact from "./Navigation/Contact";
import DanceStuff from "./Navigation/DanceStuff";
import Dance from "./Navigation/Contact";

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
            height: "100%",
            minHeight: "100%",
            width: "100vw"
          }}
        >
          <AboutMe />
        </div>
        <DanceStuff />
        <Contact />
      </React.Fragment>
    );
  }
}

export default App;
