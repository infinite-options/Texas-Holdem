import { SUIT, createHijack, createTable, getRankIndex, mergeTables, shuffledDeck} from "./preset/Preset";
import Position from  "./profileComponents/Position";
import { useContext, useEffect, useState } from "react";
import { GameContext } from "../contexts/GameContext";

function getHand(draw1, draw2) {
    const rank1 = draw1.charAt(0);
    const rank2 = draw2.charAt(0);
    const suit = draw1.charAt(1) === draw2.charAt(1) ? SUIT.SUIT : SUIT.OFFSUIT;

    const handKey = getRankIndex(rank1) < getRankIndex(rank2) ? rank1+rank2+suit : rank2+rank1+suit;  
    return handKey;
}


export default function Player(props) {
    const [playerName, position] = props.data;
    const [card1, card2] = props.hand;
    const hand = getHand(card1, card2);
    const {game_data, game_states, game_players, game_decks} = useContext(GameContext);
    const [fetchData] = game_data;
    const [gameState, setGameState] = game_states;
    const [players, setPlayers] = game_players;
    const [deck, setDeck] = game_decks;
    
    const [table, setTable] = useState(createTable());

    useEffect(()=> {
        function fetchTable(pos, setState, standardTable) {
            if(fetchData.length > 0) {
                let isExist = false;
                fetchData.map((preflop) => {
                    if(preflop.player_type === playerName && preflop.position === pos) {    
                        let playerTable;
                        try {
                            playerTable = JSON.parse(preflop.preflop_table);
                            setState(mergeTables(playerTable, createTable()));
                            isExist = true;
                        } catch (error) {
                            console.log("Wrong table format. \n" + error.message);
                        } 
                        
                    }
                });
                if(!isExist) {
                    setState(standardTable());
                }
            }                
        }
        fetchTable(position, setTable, createTable);
    }, [fetchData,playerName]);

    return(
        <div>
            <div>
                <h2>Player: {playerName === "" ? "Type username" : playerName}</h2>
                <h3>Hand: {card1} & {card2}</h3>
            </div>
            <Position data={[playerName, position, table, setTable]} hands={[hand]}/>
        </div>
    );
}