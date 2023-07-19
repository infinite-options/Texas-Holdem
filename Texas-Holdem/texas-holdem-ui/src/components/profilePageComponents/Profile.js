import React,{ useState }  from "react";
import "./Profile.css";
import {useNavigate} from "react-router-dom";
import {useLocation} from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleCloseClick = () => {
    navigate('/main');
  };
  
  const handlePlayerStyleClick = () => {
    navigate('/player-style');
  };

  const handlePlayerPositionClick= () => {
    navigate('/player-position');
  };

  return (
    <div className="profile-page">
      <div className="header">
        <h1>POKER</h1>
        <button className="close-button" onClick={handleCloseClick}>
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
         <button onClick={handlePlayerStyleClick}>
          <span>Change Player's Style</span>
          </button>
        </div>
        
        <div className="card">
          <span>Choose Player's Type</span>
        </div>
        <div className="card">
        <button onClick={handlePlayerPositionClick}>
          <span>Choose Player's Position</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
