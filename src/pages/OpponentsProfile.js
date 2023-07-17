import PlayerInfo from "../components/OpponentsProfileComponents/PlayerInfo";
import PlayerTypeButton from "../components/OpponentsProfileComponents/PlayerTypeButton";
import Stastics from "../components/OpponentsProfileComponents/Statistics";
import Table from "../components/OpponentsProfileComponents/Table";
import "../components/OpponentsProfileComponents/OpponentsProfile.css";
import "./Pages.css";
import { useContext } from "react";
import { GameContext } from "../contexts/GameContext";
import { useState } from "react";

export default function OpponentsProfile() {
    // Inputs
    const player_name = "Player 1";
    const player_type = "tight-agressive";
    const player_pos = "sb";

    const { game_data } = useContext(GameContext);
    const [fetchData] = game_data;

    return(
        <div className="app-container">
            <div className="poker-900-weight-font">
                <div className="close-button-container">
                    <div className="close-box">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="28" height="28" rx="5" fill="#233329"/>
                            <path d="M21 7L7 21M7 7L21 21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                
                <PlayerInfo player={[player_name, player_type, player_pos]}/>
                <Table player={[player_name, player_type, player_pos]} data={fetchData}/>
                <Stastics player={[player_name, player_type, player_pos]} data={fetchData}/>
                <PlayerTypeButton type={player_type}/>
            </div>
        </div>
    );
}