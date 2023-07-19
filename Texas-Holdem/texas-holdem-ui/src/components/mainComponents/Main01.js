// ChildComponentA.js
import React, { useContext } from 'react';
import { PlayerContext } from '../../contexts/PlayerContext';

const Main01 = () => {
  const { dealerIndex, updateDealerIndex,
    player0, updatePlayer0,
    player1, updatePlayer1,
    player2, updatePlayer2,
    player3, updatePlayer3,
    player4, updatePlayer4,
    player5, updatePlayer5} = useContext(PlayerContext);

  const handleChange = (event) => {
    updateDealerIndex(event.target.value);
  };
  
  return (
    <div>
      <h2>Child Component A</h2>
      <p>Data from context: {dealerIndex}</p>
      <p>Data from player0: {player0.name} {player0.position} {player0.ptype}</p>
      <p>Data from player1: {player1.name} {player1.position} {player1.ptype}</p>
      <p>Data from player2: {player2.name} {player2.position} {player2.ptype}</p>
      <p>Data from player3: {player3.name} {player3.position} {player3.ptype}</p>
      <p>Data from player4: {player4.name} {player4.position} {player4.ptype}</p>
      <p>Data from player5: {player5.name} {player5.position} {player5.ptype}</p>

      <input type="text" value={dealerIndex} onChange={handleChange} />
    </div>
  );
};

export default Main01;
