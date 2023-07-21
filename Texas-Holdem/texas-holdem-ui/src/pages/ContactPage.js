import PlayerStyle from "../components/contactComponents/PlayerStyle";
import ReturnButton from "../components/contactComponents/ReturnButton";
import PokerHeader from "../components/pokerHeaderComponents/PokerHeader";
import "../fonts/orbitron.css";
import "../components/contactComponents/Contact.css"
import "./Pages.css";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import {useLocation} from "react-router-dom";
import { useContext } from 'react';
import { PlayerContext } from '../contexts/PlayerContext';

export default function ContactPage(props) {
    const location = useLocation();
    const navigate = useNavigate();
    const positions = ["Dealer", "Small Blind", "Big Blind", "Low Jack", "High Jack", "Cut Off"];

    const { dealerIndex, updateDealerIndex,
        player0, updatePlayer0,
        player1, updatePlayer1,
        player2, updatePlayer2,
        player3, updatePlayer3,
        player4, updatePlayer4,
        player5, updatePlayer5,
        // holdFlag, updateHold,
        // flopFlag, updateFlop,
        // turnFlag, updateTurn,
        // riverFlag, updateRiver
        dealFlag, updateDealFlag,
        shuffledDeck, updateDeck
    } = useContext(PlayerContext);
 
        const [usersData,] = useState(
        [
            {username: player0.name, playerType: player0.ptype },
            {username: player1.name, playerType: player1.ptype},
            {username: player2.name, playerType: player2.ptype},
            {username: player3.name, playerType: player3.ptype},
            {username: player4.name, playerType: player4.ptype},
        ]
    );

    const [, updator] = useState();

    function setPlayerType(playerIndex, newPlayerType) {
        usersData[playerIndex].playerType = newPlayerType;
        console.log(usersData);
        updator([]);
    }

    function getBoxColor(playerType) {
        switch (playerType) {
            case "Tight-passive":
                return "#E28D7E";
            case "Tight-aggressive":
                return "#7ACEA8";
            case "Loose-passive":
                return "#84827F";
            case "Loose-aggressive":
                return "#7A94C9";
            default:
                return null;
        }
    }

    const handleReturnClick = () => {
    
        usersData.map((user, i) => {
            if(user.username==player0.name){
                let player0x = {name:player0.name,position:player0.position,
                    ptype: user.playerType,cards: player0.cards}
                updatePlayer0(player0x)
            }
            if(user.username==player1.name){
                let player1x = {name:player1.name,position:player1.position,
                    ptype: user.playerType,cards: player1.cards}
                updatePlayer1(player1x)
            }
            if(user.username==player2.name){
                let player2x = {name:player2.name,position:player2.position,
                    ptype: user.playerType,cards: player2.cards}
                updatePlayer2(player2x)
            }
            if(user.username==player3.name){
                let player3x = {name:player3.name,position:player3.position,
                    ptype: user.playerType,cards: player3.cards}
                updatePlayer3(player3x)
            }
            if(user.username==player4.name){
                let player4x = {name:player4.name,position:player4.position,
                    ptype: user.playerType,cards: player4.cards}
                updatePlayer4(player4x)
            }
        });

        navigate('/profile');
    };

    return(
        <div className="app-container">
            <div className="poker-900-weight-font">
                <PokerHeader />
                
                <div className="contact-title">
                    Choose Player Style
                </div>
               
                {
                    usersData.map((user, i) => 
                        <PlayerStyle data={[user.username, user.playerType, getBoxColor(user.playerType)]} modifier={[setPlayerType, i]} />
                    )
                }
                
                <div className="poker-900-weight-font">
                    <button className="return-button" onClick={handleReturnClick}>Return</button>
                </div>
            </div>
        </div>
        
    );
}