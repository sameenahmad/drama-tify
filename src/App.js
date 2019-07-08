import React, { Component } from "react";
import "./App.css";
import Auth from './Auth'
import Sidebar from "./Components/Sidebar";
class App extends Component {
  render() {
    return (
      <div >
        <Auth/>
      </div>
    );
  }
}

export default App;
