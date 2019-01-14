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
              <img
                className="pt-3"
                src="http://eleveight.azurewebsites.net/Content/assets/img/app/eleveight-logo-navbar.png"
                style={{
                  border: "none",
                  display: "block",
                  margin: "0 auto",
                  width: "100%"
                }}
              />
              <p
                style={{ fontSize: "13px", color: "grey" }}
              >{`*(June 2018-Current)`}</p>
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
              <ul className="pb-5">{list}</ul>
            </div>
            <div
              className="mt-5 col-md-4 offset-md-1"
              style={{ boxShadow: "4px 1px 4px black" }}
            >
              <img
                className="pt-3"
                src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/1474423_659866570731688_775069430_n.jpg?_nc_cat=100&_nc_ht=scontent-lax3-1.xx&oh=bf2bedcb799e2ddc300d33f5e27f1c12&oe=5CBC10D8"
                style={{
                  border: "none",
                  display: "block",
                  margin: "0 auto",
                  height: "30%",
                  width: "90%"
                }}
              />
              <p
                style={{ fontSize: "13px", color: "grey" }}
              >{`*(Aug. 2013 to December 2017)`}</p>
              <h5
                className="mt-3 mb-5"
                style={{
                  color: "grey",
                  display: "block",
                  margin: "0 auto"
                }}
              >
                Artistic Dance Director | ZeroIIHero
              </h5>
              <ul>
                <li>
                  Directed a team of 18+ year old dancers in urban choreography.
                  This team went to various competitions, and performed at
                  exhibitions throughout California. One of our main awards was
                  getting 3rd place at SoCal's Best Dance Crew competition
                </li>
                <li>
                  Contributed various choreography pieces to multiple medleys,
                  in order to be showcased at events, showcases, and
                  competitions.
                </li>
                <li>
                  Created formations/blocked for pieces to be performed on stage
                  by members of the team.
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
