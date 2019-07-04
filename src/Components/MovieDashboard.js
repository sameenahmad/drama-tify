import React, { Component } from "react";
import Allmovies from "./Links/Allmovies";
import Search from "./Search";
class MovieDashboard extends Component {
  render() {
    return (
      <div className="movie-Container">
        <div className="header-movie-dashboard">
          <h2 style={{ color: "white" }}> Trending Movies</h2>
          <Search />
        </div>
        <Allmovies />
      </div>
    );
  }
}

export default MovieDashboard;
