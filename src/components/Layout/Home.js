import React from "react";
import Tracks from "../Tracks/Tracks";
import Search from "../Tracks/Search";

const Home = () => {
  return (
    <React.Fragment>
      <section className="main-search-area">
        <div className="container main-banner">
          <h1 className="landing-page-title">
            Explore the world's largest catalog of
            <br /> song lyrics and translations
          </h1>
          <Search />
        </div>
      </section>
      <section className="container mt-5">
        <Tracks />
      </section>
    </React.Fragment>
  );
};

export default Home;
