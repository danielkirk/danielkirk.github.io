import React, { Component } from "react";
import "../App.css";
import "./me.png";

const styles = {
  backgroundImage: `url(
    "https://media.giphy.com/media/Q9aBxHn9fTqKs/giphy.gif"
  )`,
  backgroundSize: "cover",
  height: "100%",
  minWidth: "100vw",
  minHeight: "100vh",
  maxHeight: "100%",
  position: "relative",
  top: "40px",
  left: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center"
};

class Header extends Component {
  render() {
    return (
      <div className="App" id="intro" style={styles}>
        <header>
          <div id="#home">
            <img
              style={{ zIndex: 100 }}
              src={require("./me.png")}
              height={"250vh"}
              className="avatar-img"
            />
            <h2
              className="text1"
              style={{
                fontSize: "120px",
                textShadow: "0px 1px 2px rgba(0, 0, 0, .8)"
              }}
            >
              Daniel Kirk
            </h2>
            <h3
              className="text1 "
              style={{
                textShadow: "0px 1px 2px rgba(0, 0, 0, .8)"
              }}
            >
              Full-Stack Software Developer
            </h3>
            <br />
            <h4
              className="text1"
              style={{
                textShadow: "0px 1px 2px rgba(0, 0, 0, .8)"
              }}
            >
              HTML | CSS | JavaScript | ASP.NET | ADO.Net | C# | React.js |
              Redux | SQL | T-SQL | jQuery | AngularJS | .NET CORE | EF Core
            </h4>
            <hr />
            <ul>
              <li key="linkedin" className="inline pr-5 text1">
                <a
                  className="swag"
                  href="https://www.linkedin.com/in/imdanielkirk/"
                  target="_blank"
                >
                  <i
                    style={{ fontSize: "45px" }}
                    className="fa fa-linkedin-square text1"
                  />
                </a>
              </li>
              <li key="github" className="inline pr-4">
                <a
                  className="swag"
                  href="https://github.com/danielkirk"
                  target="_blank"
                >
                  <i
                    style={{ fontSize: "45px" }}
                    className="fa fa-github text1"
                  />
                </a>
              </li>
            </ul>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
