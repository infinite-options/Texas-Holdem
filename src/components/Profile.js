import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-page">
      <div className="header">
        <h1>POKER</h1>
        <button className="close-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none">
            <path
              d="M21 7L7 21M7 7L21 21"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="cards">
        <div className="card">
          <span>Change Display Name</span>
        </div>
        <div className="card">
          <span>Options</span>
        </div>
        <div className="card">
          <span>Hand Rankings</span>
        </div>
        <div className="card">
          <span>Change Player's Style</span>
        </div>
        <div className="card">
          <span>Choose Player's Type</span>
        </div>
        <div className="card">
          <span>Choose Player's Position</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
