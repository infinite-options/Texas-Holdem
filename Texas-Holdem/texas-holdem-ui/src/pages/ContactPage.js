import PlayerStyle from "../components/contactComponents/PlayerStyle";
import ReturnButton from "../components/contactComponents/ReturnButton";
import PokerHeader from "../components/pokerHeaderComponents/PokerHeader";
import "../fonts/orbitron.css";
import "../components/contactComponents/Contact.css"
import "./Pages.css";
import { useState } from "react";

export default function ContactPage() {
    const [usersData,] = useState(
        [
            {username: "Player 1", playerType: "Tight-passive"},
            {username: "Player 2", playerType: "Loose-passive"},
            {username: "Player 3", playerType: "Tight-passive"},
            {username: "Player 4", playerType: "Tight-aggressive"},
            {username: "Player 5", playerType: "Loose-aggressive"},
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
                <ReturnButton />
            </div>
        </div>
        
    );
}