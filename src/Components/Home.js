import React, { Component } from "react";
import UserDashboard from "./UserDashboard";
import MovieDashboard from "./MovieDashboard";
const Home = () => {
  return (
    <div className="home-Container">
      <UserDashboard />
      <MovieDashboard />
    </div>
  );
};

export default Home;
