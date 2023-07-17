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
    const { game_data } = useContext(GameContext);
    const [fetchData] = game_data;
    // Manual input to test the logic
    const [player_name, setPlayerName] = useState("");
    const [player_type, setPlayerType] = useState("");
    const [player_pos, setPlayerPos] = useState("");
    const [input, setInput] = useState([]);
    function saveData() {
        setInput([player_name, player_type, player_pos]);
    }

    return(
        <div className="app-container">
            <div className="Delete on integration">
                <h2>Manual Input</h2>
                <div>
                    <label>
                        Player Name: <input value={player_name} onChange={(e)=>setPlayerName(e.target.value)}/>
                    </label>
                </div>
                <div>
                    <label>
                        Player Type: <input value={player_type} onChange={(e)=>setPlayerType(e.target.value)}/>
                    </label>
                </div>
                <div>
                    <label>
                        Player Position: <input value={player_pos} onChange={(e)=>setPlayerPos(e.target.value)}/>
                    </label>
                </div>
                <button onClick={()=>saveData()}>save</button>
            </div>
            <div className="poker-900-weight-font">
                <div className="close-button-container">
                    <div className="close-box">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="28" height="28" rx="5" fill="#233329"/>
                            <path d="M21 7L7 21M7 7L21 21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                
                <PlayerInfo player={[input[0], input[1], input[2]]}/>
                <Table player={[input[0], input[1], input[2]]} data={fetchData}/>
                <Stastics player={[input[0], input[1], input[2]]} data={fetchData}/>
                <PlayerTypeButton type={input[1]}/>
            </div>
        </div>
    );
}