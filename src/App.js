import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Downloaded from "./Components/Links/Downloaded";
import Todownload from "./Components/Links/Todownload";
import Watched from "./Components/Links/Watched";
import Collection from "./Components/Links/Collection";
import UserDashboard from "./Components/UserDashboard";
import MovieDashboard from "./Components/MovieDashboard";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="app-Container">
          <UserDashboard />
          <MovieDashboard />
          <Route path="/collection" Component={Collection} />
          <Route path="/downloaded" Component={Downloaded} />
          <Route path="/todownloade" Component={Todownload} />
          <Route path="/watched" Component={Watched} />
        </div>
      </Router>
    );
  }
}

export default App;
