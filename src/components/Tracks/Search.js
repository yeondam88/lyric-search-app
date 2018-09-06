import React, { Component } from "react";
import axios from "axios";
import { Consumer } from "../../context";

class Search extends Component {
  state = {
    trackTitle: ""
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (dispatch, event) => {
    event.preventDefault();
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${
          this.state.trackTitle
        }&page_size=10&page=1&s_track_rating=desc&apikey=${
          process.env.REACT_APP_API_KEY
        }`
      )
      .then(res => {
        dispatch({
          type: "SEARCH_TRACKS",
          payload: res.data.message.body.track_list
        });
        this.setState({
          trackTitle: ""
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <form onSubmit={this.handleSubmit.bind(this, dispatch)}>
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
        }}
      </Consumer>
    );
  }
}

export default Search;
