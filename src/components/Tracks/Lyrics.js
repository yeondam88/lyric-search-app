import React, { Component } from "react";
import axios from "axios";
import moment from "moment";
import { Link } from "react-router-dom";

import Spinner from "../Layout/Spinner";

class Lyrics extends Component {
  state = {
    track: {},
    lyrics: {}
  };

  componentDidMount() {
    const { track_id } = this.props.match.params;
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${track_id}&apikey=${
          process.env.REACT_APP_API_KEY
        }`
      )
      .then(res => {
        this.setState({ lyrics: res.data.message.body.lyrics });

        return axios.get(
          `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${track_id}&apikey=${
            process.env.REACT_APP_API_KEY
          }`
        );
      })
      .then(res => {
        this.setState({ track: res.data.message.body.track });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { lyrics, track } = this.state;
    if (
      track === undefined ||
      lyrics === undefined ||
      Object.keys(track).length === 0 ||
      Object.keys(lyrics).length === 0
    ) {
      return <Spinner />;
    } else {
      return (
        <div className="">
          <div className="track-banner">
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src="https://source.unsplash.com/weekly?music"
                    alt="music background from unsplash"
                  />
                </div>
                <div className="col-md-6">
                  <h5>Lyrics</h5>
                  <h1 className="lyrics-track-title">{track.album_name}</h1>
                  <a className="lyrics-track-artist">{track.artist_name}</a>
                  <p className="font-weight-light font-italic mt-1">
                    <small>Release Date: {moment().format("MMM Do YY")}</small>
                  </p>
                  <div className="genre-box">
                    <div className="genre-button">
                      <span>
                        {track.primary_genres.music_genre_list.length !== 0
                          ? track.primary_genres.music_genre_list[0].music_genre
                              .music_genre_name
                          : "N/A"}
                      </span>
                    </div>
                  </div>
                  {track.explicit === 0 ? null : (
                    <div className="genre-box">
                      <div className="genre-button">
                        <span>Explicit</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-2">
                <div className="genre-box">
                  <div className="genre-button go-back-btn">
                    <i className="fas fa-arrow-left" />
                    <Link to="/">Back</Link>
                  </div>
                </div>
              </div>
              <div className="col-9">
                <div className="lyrics-container">
                  {track.track_name && (
                    <h6 className="lyrics-content-title">
                      {track.track_name} lyrics:{" "}
                    </h6>
                  )}
                  <p className="lead">{lyrics.lyrics_body}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Lyrics;
