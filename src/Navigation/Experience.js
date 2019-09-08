import React, { Component } from "react";

class Experience extends Component {
  render() {
    const strings = [
      "Created a registration page that would inherit inputs based on a GUID token sent to the user’s email via SENDGRID. This component also implemented one-way encryption using salt and hash methods that would maintain user password security.",
      `Designed a login component that would live-validate user inputs, and check the table of users in SQL for email confirmation was well as compare the hashed passwords to allow access to the website.`,
      ` Implemented Redux within the application for easier state management. Doing so allowed for the isolation of the currently logged in user.`,
      `Produced a dynamic form builder within the application which gave organizational and system administrators the ability to dynamically create and update forms thus reducing the need for paper forms.`,
      `Maintained input value information of the created forms. Thus giving administrators of the website the ability to read values that clients are inputting, and use these for reporting.`,
      `Attended daily SCRUM stand ups, weekly client demonstrations, strict code review processes, and technical presentations to development the team.`
    ];
    const list = strings.map(items => {
      return <li>{items}</li>;
    });
    return (
      <React.Fragment>
        <div
          style={{
            height: "100%",
            minHeight: "100vh",
            maxHeight: "100%",
            width: "100vw"
          }}
          id="experience"
          className="experience"
        >
          <h1
            className="pt-5 ml-4 underline"
            style={{
              textShadow: "4px 1px 4px black",
              letterSpacing: "5px"
            }}
          >
            Work Experience
          </h1>
          <div className="row pb-4">
            <div
              className="mt-5 col-md-4 offset-md-2"
              style={{ boxShadow: "4px 1px 4px black" }}
            >
              <h5
                className="mt-3 mb-5"
                style={{
                  color: "grey",
                  display: "block",
                  margin: "0 auto"
                }}
              >
                Full-Stack Developer | Eleveight
              </h5>
              <p
                style={{ fontSize: "13px", color: "grey" }}
              >{`*(June 2018 to January 2019)`}</p>
              <ul className="pb-5">{list}</ul>
            </div>
            <div
              className="mt-5 col-md-4 offset-md-1"
              style={{ boxShadow: "4px 1px 4px black" }}
            >
              <h5
                className="mt-3 mb-5"
                style={{
                  color: "grey",
                  display: "block",
                  margin: "0 auto"
                }}
              >
                Web/Applications Developer | IAPMO
              </h5>
              <p
                style={{ fontSize: "13px", color: "grey" }}
              >{`*(Feb. 2019 to Present)`}</p>
              <ul>
                <li>
                  The IAPMO Group is a complete service organization providing:
                  code development assistance, industry-leading education,
                  personnel certification, plumbing, electro-plumbing, and
                  mechanical product testing and certification, building product
                  evaluation and a manufacturer-preferred quality assurance
                  program.
                </li>
                <li>
                  Worked as a Full-Stack Developer to create an application to
                  optimize research and testing of Products within IAPMO.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Experience;
