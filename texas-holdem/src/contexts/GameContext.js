import { createContext, useState, useEffect, useMemo } from "react";
import axios from 'axios';
import { URL_ENDPOINT } from "../constants/API";
import { GAME_STATE } from "../components/preset/GamePhase";
import { shuffledDeck } from "../components/preset/Preset";

const GameContext = createContext();

const GameContextProvider = ({ children }) => {
    const [fetchData, setFetchData] = useState({});
    const [gameState, setGameState] = useState(GAME_STATE.SETUP);
    const [players, setPlayers] = useState([]);
    const [deck, setDeck] = useState(shuffledDeck());
    
    //console.log(deck);
    const contextValue = useMemo(() => (
      {game_data : [fetchData], 
        game_states: [gameState, setGameState], 
        game_players:[players, setPlayers], 
        game_decks:[deck, setDeck]
      }), [fetchData, gameState, players, deck]);

    useEffect(()=>{
        axios.get(URL_ENDPOINT+'/preflop').then((res=> {
          setFetchData(res.data);
          console.log("APP: data initialized.");
          console.log(res.data);
        }));
      }, [setFetchData]);

    return (
        // the Provider gives access to the context to its children
        <GameContext.Provider 
        value = { contextValue }>
          {children}
        </GameContext.Provider>
      );
}

export { GameContext, GameContextProvider };

// const {game_data, game_states, game_players, game_decks} = useContext(GameContext);
// const [fetchData] = game_data
// const [gameState, setGameState] = game_states;
// const [players, setPlayers] = game_players;
// const [deck, setDeck] = game_decks;