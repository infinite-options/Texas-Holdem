
import React, { useState } from "react";
import "./OpponentsProfile.css";
import PlayerInfo from "./PlayerInfo";
import PlayerTypeButton from "./PlayerTypeButton";
import Stastics from "./Statistics";
import Table from "./Table";
import { useContext } from 'react';
import { PlayerContext } from '../../contexts/PlayerContext';
import { ReactComponent as Close } from "../../assets/images/x-close.svg";
import {useNavigate} from "react-router-dom";
import {useLocation} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { GameContext } from "../../contexts/GameContext";

const positions = ["Dealer", "Small Blind", "Big Blind", "Low Jack", "High Jack", "Cut Off"];

const OpponentsProfile = () => {
  const { name, position, type } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const { game_data } = useContext(GameContext);
  const [fetchData] = game_data;

  let selectedUserName = location.state.selectedName;
  let selectedPosition = location.state.selectedPosition;
  let selectedStyle = location.state.selectedStyle;
  let selectedCards = location.state.selectedCards;
  const action = location.state.action;

  console.log("Selected Player");
  console.log(selectedUserName+" "+selectedPosition+" "+selectedStyle);
  if(selectedCards.length>0){
    console.log(selectedCards[0].name+" "+selectedCards[1].name+" ");
  }

  const handleMainPageClick = () => {
      navigate('/main');
  };
  
  return(
    <div className="app-container">
        <div className="poker-900-weight-font">
            <div className="close-button-container">
                <div className="close-box">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={()=>{handleMainPageClick()}}>
                        <rect width="28" height="28" rx="5" fill="#233329"/>
                        <path d="M21 7L7 21M7 7L21 21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            
            <PlayerInfo player={[selectedUserName, selectedStyle, selectedPosition]}/>
            <Table player={[selectedUserName, selectedStyle, selectedPosition]} data={fetchData}/>
            <div>
                Hands: {selectedCards[0].name} {', '} {selectedCards[1].name}
            </div>
            <div>
                Action: {action}
            </div>
            <Stastics player={[selectedUserName, selectedStyle, selectedPosition]} data={fetchData}/>
            <PlayerTypeButton type={selectedStyle}/>
        </div>
    </div>
);
};

export default OpponentsProfile;
