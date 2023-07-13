import { useContext } from "react";
import { GameContext } from "../../contexts/GameContext";
import Player from "./Player";
import { POSITION, shuffledDeck } from "../../preset/Preset";

import './Preflop.css';

export default function Preflop() {
    const {game_players, game_decks, game_offset} = useContext(GameContext);
    const [players, ] = game_players;
    const [deck, setDeck] = game_decks;   
    const [positionOffset, setPositionOffset] = game_offset;

    function deal() {
        setPositionOffset(positionOffset+1);
        setDeck(shuffledDeck());
    }
    function positionIndex(i, offset) {
        return (i+offset)%9;
    }

    return(
        <div>
            <h1>Preflop</h1>
            <label>
                Move the button and deal out new cards: <button onClick={()=>deal()}>Deal</button>
            </label>
            
            <div className="grid-col-3">
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
            
        </div>
    );
}