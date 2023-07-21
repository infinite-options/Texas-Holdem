// import React from "react";
// import { Game, Player, Deck } from "./Game";
// import "./PokerDeck.css"

// class PokerGame extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       numberOfPlayers: 2,
//       gameState: null,
//       consoleOutput: "", // State variable to store console output
//     };
//   }

//   handlePlayerChange = (event) => {
//     this.setState({ numberOfPlayers: parseInt(event.target.value) });
//   };


//   dealCards = () => {
//     const { numberOfPlayers } = this.state;

//     const game = new Game();
//     const deck = new Deck();

//     for (let i = 1; i <= numberOfPlayers; i++) {
//       game.addPlayer(new Player(`Player ${i}`));
//     }

//     const totalCardsNeeded = numberOfPlayers * 2 + 5; // Total cards needed for players and table
//     const playerCards = [];

//     while (playerCards.length < totalCardsNeeded) {
//       const card = deck.drawCard();
//       const isCardUsed = playerCards.some(
//         (usedCard) =>
//           usedCard.suit === card.suit && usedCard.value === card.value
//       );

//       if (!isCardUsed) {
//         playerCards.push(card);
//       }
//     }

//     let cardIndex = 0;
//     for (let player of game.players) {
//       player.hand = playerCards.slice(cardIndex, cardIndex + 2);
//       cardIndex += 2;
//     }

//     game.flop = playerCards.slice(cardIndex, cardIndex + 3);
//     cardIndex += 3;

//     game.turn = playerCards[cardIndex];
//     cardIndex++;

//     game.river = playerCards[cardIndex];

//     this.setState(
//       {
//         gameState: game.getGameState(),
//       },
//       () => {
//         this.logData();
//       }
//     );
//   };

//   logData = (game) => {
//     const { gameState } = this.state;

//     if (gameState) {
//       const { playersCards, flop, turn, river } = gameState;

//       // Store console output in a variable
//       let consoleOutput = "";

//       consoleOutput += "Players Cards:\n";
//       for (let player of playersCards) {
//         consoleOutput += player.name + "\n";
//         for (let card of player.cards) {
//           consoleOutput += card.suit + card.value + "\n";
//         }
//       }

//       consoleOutput += "Flop:\n";
//       for (let card of flop) {
//         consoleOutput += card.suit + card.value + "\n";
//       }

//       consoleOutput += "Turn:\n";
//       consoleOutput += turn.suit + turn.value + "\n";

//       consoleOutput += "River:\n";
//       consoleOutput += river.suit + river.value + "\n";

//       // Update both consoleOutput and gameState in the state
//       this.setState({
//         consoleOutput,
//       });

//       console.log(consoleOutput); // Log console output
//     }
//   };

//   render() {
//     const { numberOfPlayers, gameState } = this.state;

//     return (
//       <div>
//         <label>
//           Number of Players:
//           <input
//             type="number"
//             min="2"
//             max="9"
//             value={numberOfPlayers}
//             onChange={this.handlePlayerChange}
//           />
//         </label>
//         <button onClick={this.dealCards}>Deal</button>

//         {gameState && (
//           <div>
//             <div className="players-row">
//               {gameState.playersCards.map((player) => (
//                 <div key={player.name} className="player">
//                   <h2>{player.name}</h2>
//                   <ul>
//                     {player.cards.map((card, index) => (
//                       <li key={index}>
//                         <span
//                           style={{
//                             color: card.color,
//                           }}>{`${card.value}${card.suit}`}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>

//             <div className="community-cards-row">
//               <div className="community-section">
//                 <h2>Flop</h2>
//                 <ul>
//                   {gameState.flop.map((card, index) => (
//                     <li key={index}>
//                       <span
//                         style={{
//                           color: card.color,
//                         }}>{`${card.value}${card.suit}`}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//               <div className="community-section">
//                 <h2>Turn</h2>
//                 <p>
//                   <span style={{ color: gameState.turn.color }}>
//                     {`${gameState.turn.value}${gameState.turn.suit}`}
//                   </span>
//                 </p>
//               </div>
//               <div className="community-section">
//                 <h2>River</h2>
//                 <p>
//                   <span style={{ color: gameState.river.color }}>
//                     {`${gameState.river.value}${gameState.river.suit}`}
//                   </span>
//                 </p>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     );
//   }
// }

// export default PokerGame;


import React from "react";
import { Game, Player, Deck } from "./Game";
import "./PokerDeck.css";

class PokerGame extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numberOfPlayers: 2,
      gameState: null,
      consoleOutput: "",
      previousGameStates: [],
      isSimilar: false, // New state variable to track similarities in game states
    };
  }

  handlePlayerChange = (event) => {
    this.setState({ numberOfPlayers: parseInt(event.target.value) });
  };

  dealCards = () => {
    const { numberOfPlayers, gameState, previousGameStates } = this.state;

    // Check if it's the first deal or a subsequent one
    if (gameState) {
      // Save the previous game state before dealing new cards
      previousGameStates.push(gameState);
    }

    const game = new Game();
    const deck = new Deck();

    for (let i = 1; i <= numberOfPlayers; i++) {
      game.addPlayer(new Player(`Player ${i}`));
    }

    const totalCardsNeeded = numberOfPlayers * 2 + 5; // Total cards needed for players and table
    const playerCards = [];

    while (playerCards.length < totalCardsNeeded) {
      const card = deck.drawCard();
      const isCardUsed = playerCards.some(
        (usedCard) =>
          usedCard.suit === card.suit && usedCard.value === card.value
      );

      if (!isCardUsed) {
        playerCards.push(card);
      }
    }

    let cardIndex = 0;
    for (let player of game.players) {
      player.hand = playerCards.slice(cardIndex, cardIndex + 2);
      cardIndex += 2;
    }

    game.flop = playerCards.slice(cardIndex, cardIndex + 3);
    cardIndex += 3;

    game.turn = playerCards[cardIndex];
    cardIndex++;

    game.river = playerCards[cardIndex];

    this.setState(
      {
        gameState: game.getGameState(),
        previousGameStates,
      },
      () => {
        this.logData();
      }
    );
  };

  logData = () => {
    const { gameState, previousGameStates } = this.state;

    if (gameState) {
      const { playersCards, flop, turn, river } = gameState;
      const consoleOutput = this.formatGameOutput(
        playersCards,
        flop,
        turn,
        river
      );

      // Check for similarities with previous game states
      const isSimilar = this.checkForSimilarity(gameState, previousGameStates);

      // Update both consoleOutput, gameState, and the result in the state
      this.setState({
        consoleOutput,
        isSimilar,
      });

      console.log(consoleOutput); // Log console output
    }
  };

  formatGameOutput = (playersCards, flop, turn, river) => {
    let consoleOutput = "";

    consoleOutput += "Players Cards:\n";
    for (let player of playersCards) {
      consoleOutput += player.name + "\n";
      for (let card of player.cards) {
        consoleOutput += card.suit + card.value + "\n";
      }
    }

    consoleOutput += "Flop:\n";
    for (let card of flop) {
      consoleOutput += card.suit + card.value + "\n";
    }

    consoleOutput += "Turn:\n";
    consoleOutput += turn.suit + turn.value + "\n";

    consoleOutput += "River:\n";
    consoleOutput += river.suit + river.value + "\n";

    return consoleOutput;
  };

  checkForSimilarity = (currentGameState, previousGameStates) => {
    // Compare the current game state with each previous game state
    for (let previousState of previousGameStates) {
      if (this.areGameStatesEqual(currentGameState, previousState)) {
        return true; // Found similarity, return true
      }
    }

    return false; // No similarity found
  };

  areGameStatesEqual = (state1, state2) => {
    // Compare player cards
    const playersCards1 = state1.playersCards.map((player) =>
      player.cards.map((card) => card.suit + card.value)
    );
    const playersCards2 = state2.playersCards.map((player) =>
      player.cards.map((card) => card.suit + card.value)
    );

    if (JSON.stringify(playersCards1) !== JSON.stringify(playersCards2)) {
      return false; // Player cards are different
    }

    // Compare flop, turn, and river
    const flop1 = state1.flop.map((card) => card.suit + card.value);
    const flop2 = state2.flop.map((card) => card.suit + card.value);

    if (JSON.stringify(flop1) !== JSON.stringify(flop2)) {
      return false; // Flop is different
    }

    const turn1 = state1.turn.suit + state1.turn.value;
    const turn2 = state2.turn.suit + state2.turn.value;

    if (turn1 !== turn2) {
      return false; // Turn is different
    }

    const river1 = state1.river.suit + state1.river.value;
    const river2 = state2.river.suit + state2.river.value;

    if (river1 !== river2) {
      return false; // River is different
    }

    return true; // All elements are equal, game states are similar
  };

  render() {
    const { numberOfPlayers, gameState, isSimilar } = this.state;

    return (
      <div>
        <label>
          Number of Players:
          <input
            type="number"
            min="2"
            max="9"
            value={numberOfPlayers}
            onChange={this.handlePlayerChange}
          />
        </label>
        <button onClick={this.dealCards}>Deal</button>

        {gameState && (
          <div>
            <div className="players-row">
              {gameState.playersCards.map((player) => (
                <div key={player.name} className="player">
                  <h2>{player.name}</h2>
                  <ul>
                    {player.cards.map((card, index) => (
                      <li key={index}>
                        <span
                          style={{
                            color: card.color,
                          }}>{`${card.value}${card.suit}`}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="community-cards-row">
              <div className="community-section">
                <h2>Flop</h2>
                <ul>
                  {gameState.flop.map((card, index) => (
                    <li key={index}>
                      <span
                        style={{
                          color: card.color,
                        }}>{`${card.value}${card.suit}`}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="community-section">
                <h2>Turn</h2>
                <p>
                  <span style={{ color: gameState.turn.color }}>
                    {`${gameState.turn.value}${gameState.turn.suit}`}
                  </span>
                </p>
              </div>
              <div className="community-section">
                <h2>River</h2>
                <p>
                  <span style={{ color: gameState.river.color }}>
                    {`${gameState.river.value}${gameState.river.suit}`}
                  </span>
                </p>
              </div>
            </div>

            {/* Display the result of similarity */}
            <div>
              <h2>Previous Game States:</h2>
              {isSimilar ? <p>Similar</p> : <p>Different</p>}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default PokerGame;
