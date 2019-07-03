import React, { Component } from "react";
import ProfileAvatar from "./ProfileAvatar";
import FeatureList from "./FeatureList";
const UserDashboard = () => {
  return (
    <div className="user-Container">
      <p>Hello From UserDashboard!</p>
      <ProfileAvatar />
      <FeatureList />
    </div>
  );
};

export default UserDashboard;
