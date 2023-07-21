import React, { useState } from "react";

const TexasHoldem = () => {
  const [players, setPlayers] = useState(2);
  const [playerCards, setPlayerCards] = useState([]);
  const [tableCards, setTableCards] = useState([]);

  const handlePlayerChange = (event) => {
    setPlayers(parseInt(event.target.value));
  };

  const dealCards = () => {
    const deck = generateDeck();
    const newPlayerCards = [];
    const newTableCards = [];

    // Deal player cards
    for (let i = 0; i < players; i++) {
      const playerHand = [];
      playerHand.push(deck.pop());
      playerHand.push(deck.pop());
      newPlayerCards.push(playerHand);
    }

    // Deal table cards
    for (let i = 0; i < 5; i++) {
      newTableCards.push(deck.pop());
    }

    setPlayerCards(newPlayerCards);
    setTableCards(newTableCards);
  };

  const generateDeck = () => {
    const ranks = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
    ];
    const suits = ["♠", "♣", "♥", "♦"];
    const deck = [];

    for (let rank of ranks) {
      for (let suit of suits) {
        deck.push(rank + suit);
      }
    }

    // Shuffle the deck
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }

    return deck;
  };

  const logData = () => {
    console.log("Player Cards:", playerCards);
    console.log("Table Cards:", tableCards);
  };

  return (
    <div>
      <label>
        Number of Players:
        <input
          type="number"
          min="2"
          max="9"
          value={players}
          onChange={handlePlayerChange}
        />
      </label>
      <button onClick={dealCards}>Deal Cards</button>
      <button onClick={logData}>Log Data</button>
    </div>
  );
};

export default TexasHoldem;
