import React, { Component } from "react";
import emma from "./emma.jpeg";
import FeatureList from "./FeatureList";
class ProfileAvatar extends Component {
  state = {};
  render() {
    return (
      <div className="profile-Container">
        <img
          src={emma}
          style={{ borderRadius: "50%", width: "30%", height: "100%" }}
        />
        <p style={{ marginLeft: "1rem" }}> Hello, Emma!</p>
      </div>
    );
  }
}

export default ProfileAvatar;
