import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTracks } from "../../actions";

import Spinner from "../Layout/Spinner";
import Track from "./Track";

class Tracks extends Component {
  componentDidMount() {
    this.props.fetchTracks();
  }

  render() {
    const { track_list } = this.props.track_list;
    const { heading } = this.props;
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
                <Track key={i} track={item.track} imgSrc={randomImageUrl} />
              );
            })}
          </div>
        </React.Fragment>
      );
    }
  }
}

const mapStateToProps = state => ({
  track_list: state.track_list,
  heading: state.heading
});

export default connect(
  mapStateToProps,
  { fetchTracks }
)(Tracks);
