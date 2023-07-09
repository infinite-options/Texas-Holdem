import { useContext, useState } from "react";
import { GameContext } from "../contexts/GameContext";
import { GAME_STATE } from "./preset/GamePhase";

function PlayerInput(props) {
    const [playerNum, player, setPlayer] = props.data;
    return (
        <div>
            <label>
                Player {playerNum}: <input name="username" defaultValue={player} onChange={e => setPlayer(e.target.value)} autoComplete="off"/>
            </label>
        </div>

    );
}

// Have all player setup.
export default function Lobby() {
    const {game_states, game_players} = useContext(GameContext);
    const [, setGameState] = game_states;
    const [, setPlayers] = game_players;

    const [player1, setPlayer1] = useState("");
    const [player2, setPlayer2] = useState("");
    const [player3, setPlayer3] = useState("");
    const [player4, setPlayer4] = useState("");
    const [player5, setPlayer5] = useState("");
    const [player6, setPlayer6] = useState("");
    const [player7, setPlayer7] = useState("");
    const [player8, setPlayer8] = useState("");

    function savePlayerLists() {
        setPlayers([player1, player2, player3, player4, player5, player6, player7, player8]);
        setGameState(GAME_STATE.PREPLOP);
    }

    return(
        <div>
           <h1>Players Position</h1>
            <PlayerInput data={[1, player1, setPlayer1]}/>
            <PlayerInput data={[2, player2, setPlayer2]}/>
            <PlayerInput data={[3, player3, setPlayer3]}/>
            <PlayerInput data={[4, player4, setPlayer4]}/>
            <PlayerInput data={[5, player5, setPlayer5]}/>
            <PlayerInput data={[6, player6, setPlayer6]}/>
            <PlayerInput data={[7, player7, setPlayer7]}/>
            <PlayerInput data={[8, player8, setPlayer8]}/>
            <button onClick={()=>savePlayerLists()}>Save</button>
        </div>
    );
}