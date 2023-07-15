// import React from "react";
// import './OpponentsProfile.css'
// import { ReactComponent as Close } from '../images/x-close.svg';

// const OpponentsProfile = () => {
//     return (
//       <div>
//         <div className="profile-page">
//           <div className="header">
//             <button className="close-button">
//               <Close></Close>
//             </button>
//           </div>
//           <div className="card">
//             <span>Player's Name</span>
//           </div>
//         </div>
//       </div>
//     );
// }

// export default OpponentsProfile;


import React, { useState } from "react";
import "./OpponentsProfile.css";
import { ReactComponent as Close } from "../../assets/images/x-close.svg";
import {useNavigate} from "react-router-dom";
import {useLocation} from 'react-router-dom';
const positions = ["Dealer", "Small Blind", "Big Blind", "Low Jack", "High Jack", "Cut Off"];

const OpponentsProfile = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const [dealerIndex, setDealerIndex] = useState(location.state.dealerIndex);
  console.log("On Player click in OP ",dealerIndex)
  const handleMainPageClick = () => {
      navigate('/main', { state: { dealerIndex : location.state.dealerIndex} });
  };
  
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
      setIsFlipped(!isFlipped);
    };

    console.log("Opponent Profile Page")
    console.log(location.state.name)
    console.log(location.state.dealerIndex)
    console.log(location.state.position)

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
          <span className="card-span white">{location.state.name}</span>
        </div>
        <div className="card-line">
          <span className="card-span">Current Position</span>
          <span className="card-span white">{location.state.position}</span>
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
