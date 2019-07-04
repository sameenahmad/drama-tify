import React, { Component } from "react";
import Search from "./Search";
import Home from "./Links/Home"
class MovieDashboard extends Component {
  render() {
    return (
      <div className="movie-Container">
        {/* <div className="header-movie-dashboard">
          <h2 style={{ color: "white" }}> Trending Movies</h2>
          <Search />
        </div>
        <Home /> */}
      </div>
    );
  }
}

export default MovieDashboard;
