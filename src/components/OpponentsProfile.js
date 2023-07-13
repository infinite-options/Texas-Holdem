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
import { ReactComponent as Close } from "../images/x-close.svg";

const OpponentsProfile = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
      setIsFlipped(!isFlipped);
    };

  return (
    <div className="profile-page">
      <div className="header">
        <button className="close-button">
          <Close />
        </button>
      </div>
      <div className="card">
        <div className="card-line">
          <span className="card-span">Player's Name</span>
          <span className="card-span white">Michael</span>
        </div>
        <div className="card-line">
          <span className="card-span">Current Position</span>
          <span className="card-span white">Small Blind (SB)</span>
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
