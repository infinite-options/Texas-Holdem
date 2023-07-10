import { useContext, useEffect, useState } from "react";
import { GameContext } from "../contexts/GameContext";
import Player from "./Player";
import { POSITION, shuffledDeck } from "./preset/Preset";
export default function Preflop(props) {
    const {game_data, game_states, game_players, game_decks, game_offset} = useContext(GameContext);
    const [fetchData] = game_data
    const [gameState, setGameState] = game_states;
    const [players, setPlayers] = game_players;
    const [deck, setDeck] = game_decks;   
    const [positionOffset, setPositionOffset] = game_offset;

    function redraw() {
        setDeck(shuffledDeck());
    }

    function increamentOffset() {
        setPositionOffset(positionOffset+1);
    }
    function positionIndex(i, offset) {
        return (i+offset)%9;
    }

    return(
        <div>
            <h1>Preflop</h1>
            <button onClick={()=>redraw()}>Redraw</button>
            <button onClick={()=>increamentOffset()}>Hand over dealer button</button>
            <Player data={[players[positionIndex(0,positionOffset)], POSITION.SMALL_BLIND]} hand={[deck[0], deck[9]]}/>
            <Player data={[players[positionIndex(1,positionOffset)], POSITION.BIG_BLIND]} hand={[deck[1], deck[10]]}/>
            <Player data={[players[positionIndex(2,positionOffset)], POSITION.UTG]} hand={[deck[2], deck[11]]}/>
            <Player data={[players[positionIndex(3,positionOffset)], POSITION.UTGp1]} hand={[deck[3], deck[12]]}/>
            <Player data={[players[positionIndex(4,positionOffset)], POSITION.UTGp2]} hand={[deck[4], deck[13]]}/>
            <Player data={[players[positionIndex(5,positionOffset)], POSITION.LOJACK]} hand={[deck[5], deck[14]]}/>
            <Player data={[players[positionIndex(6,positionOffset)], POSITION.HIJACK]} hand={[deck[6], deck[15]]}/>
            <Player data={[players[positionIndex(7,positionOffset)], POSITION.CUTOFF]} hand={[deck[7], deck[16]]}/>
            <Player data={[players[positionIndex(8,positionOffset)], POSITION.BUTTON]} hand={[deck[8], deck[17]]}/>
        </div>
    );
}