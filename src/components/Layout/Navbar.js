import React, { Component } from "react";
import axios from "axios";
import { Consumer } from "../../context";
import logo from "./musix_mix_logo.svg";

class Navbar extends Component {
  getTop10Tracks = dispatch => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${
          process.env.REACT_APP_API_KEY
        }`
      )
      .then(res => {
        dispatch({
          type: "GET_TOP_10_TRACKS",
          payload: res.data.message.body.track_list
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
            <nav className="navbar">
              <div className="container">
                <span className="navbar-brand mb-0">
                  <a className="logo-link" href="/">
                    <img src={logo} alt="logo" />{" "}
                    <span className="logo">musixmatch</span>
                  </a>
                </span>
                <ul className="navbar-nav mr-sm-2">
                  <li
                    className="nav-item"
                    onClick={this.getTop10Tracks.bind(this, dispatch)}
                  >
                    Top 10 tracks
                  </li>
                </ul>
              </div>
            </nav>
          );
        }}
      </Consumer>
    );
  }
}

export default Navbar;
