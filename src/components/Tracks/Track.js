import React from "react";
import { Link } from "react-router-dom";

const Track = ({ track, imgSrc }) => {
  return (
    <div className="col-md-4">
      <div className="card mb-5 shadow bg-white rounded">
        <img
          className="card-img-top"
          src={imgSrc}
          alt="Random unsplash images"
        />
        <div className="card-body">
          <h5 style={{ color: "#4e5860" }}>{track.track_name}</h5>
          <div className="card-text">
            <span style={{ color: "#808b96" }}>{track.artist_name}</span>
          </div>
          <Link
            className="btn btn-dark btn-block mt-2"
            to={`lyrics/track/${track.track_id}`}
          >
            <i className="fas fa-chevron-right" /> View Lyrics
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Track;
