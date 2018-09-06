import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTrackByTrackName } from "../../actions";

class Search extends Component {
  state = {
    trackTitle: ""
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.fetchTrackByTrackName(this.state.trackTitle);
    this.setState({
      trackTitle: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="search-bar">
          <i className="fas fa-search" />
          <div className="search-bar__search-input">
            <input
              type="text"
              className="input-search-bar"
              name="trackTitle"
              value={this.state.trackTitle}
              placeholder="Type song title, artist or lyrics"
              autoCapitalize={"off"}
              autoCorrect={"off"}
              onChange={this.handleInputChange}
            />
          </div>
        </div>
      </form>
    );
  }
}

export default connect(
  null,
  { fetchTrackByTrackName }
)(Search);
