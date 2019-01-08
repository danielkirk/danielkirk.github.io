import React, { Component } from "react";
import Slider from "react-slick";
import ModalVideo from "react-modal-video";
import "./Dance.css";

class DanceStuff extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onClick = evt => {
    this.setState({ movieID: evt.target.id, isOpen: true });
  };

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <React.Fragment>
        <div id="dance">
          <h2
            className="pt-4 ml-2 underline"
            style={{
              textShadow: "1px 1px 1px grey",
              color: "white",
              letterSpacing: "5px"
            }}
          >
            CHOREOGRAPHY SAMPLES
          </h2>
          <p className="ml-4" style={{ color: "dimGrey", fontSize: "13px" }}>
            *click on image to view video
          </p>
          <ModalVideo
            channel="youtube"
            isOpen={this.state.isOpen}
            videoId={this.state.movieID}
            onClose={() => this.setState({ isOpen: false })}
          />
          <div className="pb-4">
            <img
              title="Come and See Me"
              onClick={this.onClick}
              id={`O59Sak1X-nc`}
              className="items mr-3"
              src="http://i3.ytimg.com/vi/O59Sak1X-nc/hqdefault.jpg"
            />
            <img
              title="Lord Pretty Flacko Jodye 2"
              onClick={this.onClick}
              id={`k6ULJV_u18A`}
              className="items mr-3"
              src="http://i3.ytimg.com/vi/k6ULJV_u18A/hqdefault.jpg"
            />
            <img
              title="Lights"
              onClick={this.onClick}
              id={`dvxxILi48yo`}
              className="items"
              src="http://i3.ytimg.com/vi/dvxxILi48yo/hqdefault.jpg"
            />
          </div>
          <hr className="hr" />
        </div>
      </React.Fragment>
    );
  }
}

export default DanceStuff;
