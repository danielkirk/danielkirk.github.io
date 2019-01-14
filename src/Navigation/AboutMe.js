import React, { Component } from "react";

class AboutMe extends Component {
  onClick = () => {
    window.location =
      "https://drive.google.com/file/d/13-VGFYmEqbFb3FbfhyqKBuQooNxJ1eDf/view?usp=sharing";
  };

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <h1
            className="mt-5 ml-4 underline"
            style={{
              textShadow: "4px 1px 4px black",
              color: "white",
              letterSpacing: "5px"
            }}
          >
            About Me
          </h1>
        </div>
        <br />
        <br />
        <div className="about col-md-4 offset-md-4" style={{ width: "100vw" }}>
          <p style={{ textIndent: "35px" }}>
            Software Developer with working knowledge of the front end to back
            end development cycle. Well-versed in the .NET framework, NodeJS,
            JavaScript, SQL, T-SQL, C#, ReactJS, and Redux. Robust background in
            team environments and independent projects.
          </p>
          <p style={{ textIndent: "35px" }}>
            Born and raised in Oceanside, California. I was an athlete
            throughout grade school until about Sophomore year. Sophomore year
            is the time when the realization that my passion for playing sports
            had subsided, and the passion for dance came to fruition.
          </p>
          <p style={{ textIndent: "35px" }}>
            Beginning my dancing career as an Artistic Director on a team called
            Zero2Hero. I remained with the team for 4-5 years, but it then
            became time for me to embark on a new journey. Thus, began my 1-2
            year tenure in Los Angeles as an urban choreography
            instructor/student. The time in Los Angeles was a time of
            self-realization, hardwork, and struggle. After this temporary
            adventure, I came to the realization that there was something bigger
            in my life that brought constant enjoyment to my life, that wasn't
            noticeable at first. This epiphany was that web/software
            development, was my true passion. At the age of 21 years old, I
            decided this was my newest, and permanent venture.
          </p>
          <p style={{ textIndent: "35px" }}>
            For about a year, I emerged myself within the languages of
            JavaScript, C#, and SQL through various online tutorials. After
            getting comfortable, I decided to take a chance and apply for a
            startup called Eleveight. Through a vetting process, I was able to
            get into the project. Hours upon hours were spent enduring the
            process of creating this application; an application to bring ease
            to case management workers who struggle with always searching
            through documents, contacting sources for funding, keeping tabs on
            their clientele. Eleveight is an application created to make all the
            duties of a case worker, available at the click of a button while
            maintaining security protocol through HIPPA Compliancy. This project
            emplored the usage of ReactJS, Redux, SQL, C#, .NET, and JavaScript.
          </p>
          <p style={{ textIndent: "35px" }}>
            Other than that of programming, I hold interest in the following:
            Dance, Urban Choreography, Los Angeles Lakers, Baltimore Ravens,
            Football, Basketball, PC Gaming(League of Legends, Fortnite, WoW),
            Console Gaming (Nintendo and Xbox), Dogs, OTTERS, Tattoos, Deadpool,
            Marvel.
          </p>
          <p>
            Feel free to download my resume below for any inquiries about work,
            or check out my{" "}
            <a
              className="atag"
              href="https://github.com/danielkirk"
              target="_blank"
            >
              Github
            </a>{" "}
            for my work samples.
          </p>
          <br />
          <button
            id="resumebutton"
            className="btn btn-default mb-4"
            onClick={this.onClick}
          >
            Download Resume
          </button>
          <div id="contact">
            <p style={{ color: "white" }}>
              Also contact me at:
              <br />
              Phone Number:{" "}
              <span style={{ color: "grey" }}>(760) 672-0397</span> <br />{" "}
              Email:{" "}
              <a className="atag" href="mailto:imdanielkirk@gmail.com">
                imdanielkirk@gmail.com
              </a>{" "}
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AboutMe;
