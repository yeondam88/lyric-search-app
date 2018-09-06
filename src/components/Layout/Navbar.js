import React, { Component } from "react";
import { connect } from "react-redux";
import logo from "./musix_mix_logo.svg";

import { fetchTracks } from "../../actions";

class Navbar extends Component {
  render() {
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
            <li className="nav-item" onClick={() => this.props.fetchTracks()}>
              Top 10 tracks
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default connect(
  null,
  { fetchTracks }
)(Navbar);
