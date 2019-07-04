import React, { Component } from "react";
import ProfileAvatar from "./ProfileAvatar";
import FeatureList from "./FeatureList";
const UserDashboard = () => {
  return (
    <div className="user-Container">
      <ProfileAvatar />
      <FeatureList />
    </div>
  );
};

export default UserDashboard;
