import React, { Component } from "react";
import { Consumer } from "../../context";

import Spinner from "../Layout/Spinner";
import Track from "./Track";

class Tracks extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { track_list, heading } = value;
          if (track_list === undefined || track_list.length === 0) {
            return <Spinner />;
          } else {
            const randomImageUrl = "https://source.unsplash.com/random/600x400";
            return (
              <React.Fragment>
                <h3 className="text-center mb-4">{heading}</h3>
                <div className="row">
                  {track_list.map((item, i) => {
                    return (
                      <Track
                        key={i}
                        track={item.track}
                        imgSrc={randomImageUrl}
                      />
                    );
                  })}
                </div>
              </React.Fragment>
            );
          }
        }}
      </Consumer>
    );
  }
}

export default Tracks;
