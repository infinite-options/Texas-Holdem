import { createContext, useState, useEffect, useMemo } from "react";
import { URL_ENDPOINT } from "../constants/API";


const PlayerContext = createContext();

 const PlayerContextProvider = ({ children }) => {

    const [dealerIndex, setDealerIndex] = useState(1);
    
    const [player0, setPlayer0] = useState({name: 'Michael',position:(dealerIndex)%6,ptype:'Loose-passive',
    cards:[], totalAmt:850, currentAmt:0});
const [player1, setPlayer1] = useState({name: 'John',position:(dealerIndex+1)%6,ptype:'Loose-passive',
    cards:[], totalAmt:850, currentAmt:0});
const [player2, setPlayer2] = useState({name: 'Jay',position:(dealerIndex+2)%6,ptype:'Tight-passive',
    cards:[], totalAmt:850, currentAmt:0});
const [player3, setPlayer3] = useState({name: 'Stan',position:(dealerIndex+3)%6,ptype:'Tight-aggressive',
    cards:[], totalAmt:850, currentAmt:0});
const [player4, setPlayer4] = useState({name: 'Jack',position:(dealerIndex+4)%6,ptype:'Loose-aggressive',
    cards:[], totalAmt:850, currentAmt:0});
const [player5, setPlayer5] = useState({name: 'Archana',position:(dealerIndex+5)%6,ptype:'',
    cards:[], totalAmt:850, currentAmt:0});
  
    const [shuffledDeck, setShuffledDeck] = useState([]);
    const [dealFlag, setDealFlag] = useState('hold');

    const updateDealerIndex = (newData) => {
        setDealerIndex(newData);
    };

    const updatePlayer0 = (newData) => {
        setPlayer0(newData);
    }

    const updatePlayer1 = (newData) => {
        setPlayer1(newData);
    }

    const updatePlayer2 = (newData) => {
        setPlayer2(newData);
    }

    const updatePlayer3 = (newData) => {
        setPlayer3(newData);
    }

    const updatePlayer4 = (newData) => {
        setPlayer4(newData);
    }

    const updatePlayer5 = (newData) => {
        setPlayer5(newData);
    }

    const updateDealFlag=(flag)=>{
       setDealFlag(flag);
    }

    const updateDeck=(newData)=>{
        setShuffledDeck(newData)
    }

    return (
        // the Provider gives access to the context to its children
        <PlayerContext.Provider value = {
            {dealerIndex, updateDealerIndex,
                player0, updatePlayer0,
                player1, updatePlayer1,
                player2, updatePlayer2,
                player3, updatePlayer3,
                player4, updatePlayer4,
                player5, updatePlayer5,
                dealFlag, updateDealFlag,
                shuffledDeck, updateDeck
            }}>
          {children}
        </PlayerContext.Provider>
      );
}

export { PlayerContext, PlayerContextProvider };
