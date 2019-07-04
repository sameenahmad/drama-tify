import React, { Component } from "react";
import "./App.css";

import Sidebar from "./Components/Sidebar";
class App extends Component {
  render() {
    return (
      <div className="app-Container">
        <Sidebar />
      </div>
    );
  }
}

export default App;
