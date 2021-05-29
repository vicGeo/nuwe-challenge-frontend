import React from "react";
import Profile from "../components/Profile";
import logo from "../images/logo_nuwe.jpg";

function DataProfile() {
  return (
    <div className="App-body">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Profile />
    </div>
  );
}

export default DataProfile;
