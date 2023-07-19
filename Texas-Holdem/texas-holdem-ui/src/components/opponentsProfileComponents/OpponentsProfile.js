
import React, { useState } from "react";
import "./OpponentsProfile.css";
import { useContext } from 'react';
import { PlayerContext } from '../../contexts/PlayerContext';
import { ReactComponent as Close } from "../../assets/images/x-close.svg";
import {useNavigate} from "react-router-dom";
import {useLocation} from 'react-router-dom';
import { useParams } from 'react-router-dom';

const positions = ["Dealer", "Small Blind", "Big Blind", "Low Jack", "High Jack", "Cut Off"];

const OpponentsProfile = () => {
  const { name, position, type } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  let selectedUser = location.state.selectedName;
  let selectedPosition = positions[location.state.selectedPosition];
  let selectedStyle = location.state.selectedStyle;

  console.log("Selected Player");
  console.log(selectedUser+" "+selectedPosition+" "+selectedStyle);

  const { dealerIndex, updateDealerIndex,
    player0, updatePlayer0,
    player1, updatePlayer1,
    player2, updatePlayer2,
    player3, updatePlayer3,
    player4, updatePlayer4,
    player5, updatePlayer5} = useContext(PlayerContext);

  const handleMainPageClick = () => {
      navigate('/main');
  };
  
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
      setIsFlipped(!isFlipped);
    };


  return (
    <div className="profile-page">
      <div className="header">
        <button onClick={() => handleMainPageClick()} className="close-button">
            <Close />
        </button>
      </div>
      <div className="card">
        <div className="card-line">
          <span className="card-span">Player's Name</span>
          <span className="card-span white">&nbsp;{selectedUser}</span>
        </div>
        <div className="card-line">
          <span className="card-span">Current Position</span>
          <span className="card-span white">&nbsp;{selectedPosition}</span>
        </div>
        <div className="card-line">
          <span className="card-span">Current Style</span>
          <span className="card-span white">&nbsp;{selectedStyle}</span>
        </div>
      </div>
      <div className="hands-text">Hands Player would play</div>
      <div className="image-container"></div>
      <div className="hands-text">Statistics</div>
      <div className="image-2"></div>
      {/* <div className="legend-container">
        <span>No. of flop scenes</span>
        <span>No. of Pre-Flops</span>
        <span>No. of raises</span>
      </div> */}
      <div
        className={`flippable-button ${isFlipped ? "flipped" : ""}`}
        onClick={handleClick}>
        <span className="flippable-button-text">
          {isFlipped ? "Tight-passive" : "Reveal Player's style"}
        </span>
      </div>
    </div>
  );
};

export default OpponentsProfile;
