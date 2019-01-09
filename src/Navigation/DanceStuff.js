import React, { Component } from "react";
import ModalVideo from "react-modal-video";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import "./Dance.css";

class DanceStuff extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onClick = evt => {
    console.log(evt.target);
    this.setState({ movieID: evt.target.alt, isOpen: true });
  };

  render() {
    const images = [
      {
        original: require("./My Post (6).jpg"),
        thumbnail: require("./My Post (6).jpg"),
        originalAlt: "O59Sak1X-nc"
      },
      {
        original: require("./My Post (7).jpg"),
        thumbnail: require("./My Post (7).jpg"),
        originalAlt: "k6ULJV_u18A"
      },
      {
        original: require("./My Post (8).jpg"),
        thumbnail: require("./My Post (8).jpg"),
        originalAlt: "dvxxILi48yo"
      }
    ];
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
          <ImageGallery items={images} onClick={this.onClick} />
          <ModalVideo
            channel="youtube"
            isOpen={this.state.isOpen}
            videoId={this.state.movieID}
            onClose={() => this.setState({ isOpen: false })}
          />
          <hr className="hr" />
        </div>
      </React.Fragment>
    );
  }
}

export default DanceStuff;
