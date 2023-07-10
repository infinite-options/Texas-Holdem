import { useContext, useEffect } from "react";
import { GameContext } from "../contexts/GameContext";
import Player from "./Player";
import { shuffledDeck } from "./preset/Preset";
export default function Preflop(props) {
    const {game_data, game_states, game_players, game_decks} = useContext(GameContext);
    const [fetchData] = game_data
    const [gameState, setGameState] = game_states;
    const [players, setPlayers] = game_players;
    const [deck, setDeck] = game_decks;   

    function redraw() {
        setDeck(shuffledDeck());
    }

    return(
        <div>
            <h1>Preflop</h1>
            <button onClick={()=>redraw()}>Redraw</button>
            <Player data={[players[0], 'but']} hand={[deck[0], deck[9]]}/>
            <Player data={[players[1], 'sb']} hand={[deck[1], deck[10]]}/>
            <Player data={[players[2], 'bb']} hand={[deck[2], deck[11]]}/>
            <Player data={[players[3], 'ufg']} hand={[deck[3], deck[12]]}/>
            <Player data={[players[4], 'ufgp1']} hand={[deck[4], deck[13]]}/>
            <Player data={[players[5], 'ufgp2']} hand={[deck[5], deck[14]]}/>
            <Player data={[players[6], 'lj']} hand={[deck[6], deck[15]]}/>
            <Player data={[players[7], 'hj']} hand={[deck[7], deck[16]]}/>
            <Player data={[players[8], 'co']} hand={[deck[8], deck[17]]}/>
        </div>
    );
}