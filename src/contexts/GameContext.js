import { createContext, useState, useEffect, useMemo } from "react";
import axios from 'axios';
import { URL_ENDPOINT } from "../constants/API";
import { shuffledDeck } from "../preset/Preset";

const GameContext = createContext();

const GameContextProvider = ({ children }) => {
    const [fetchData, setFetchData] = useState({});
    const [players, setPlayers] = useState([]);
    const [deck, setDeck] = useState(shuffledDeck());
    const [positionOffset, setPositionOffset] = useState(0);
    
    //console.log(deck);
    const contextValue = useMemo(() => (
      {game_data : [fetchData], 
        game_players:[players, setPlayers], 
        game_decks:[deck, setDeck],
        game_offset:[positionOffset, setPositionOffset],
      }), [fetchData, players, deck, positionOffset]);

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
// const [players, setPlayers] = game_players;
// const [deck, setDeck] = game_decks;