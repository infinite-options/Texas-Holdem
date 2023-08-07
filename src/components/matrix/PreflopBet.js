// import React, { useState } from 'react';

// const PreflopBet = () => {
//   const [playerCards, setPlayerCards] = useState(['A', 'J']); // Example: Player's hole cards ranks
//   const [playerPosition, setPlayerPosition] = useState('but'); // Example: Player's position
//   const [playerStyle, setPlayerStyle] = useState('loose-aggressive'); // Example: Player's style
//   const [decision, setDecision] = useState(null);
//   const [raiseAmount, setRaiseAmount] = useState(null);
//   const purseValue = 850; // Example: The purse value

//   const preflopTableData = {
//     'AAo': "RAISE",
//     'AKs': "RAISE",
//     'AQs': "RAISE",
//     'AJs': "RAISE",
//     'ATs': "RAISE",
//     'A9s': "RAISE",
//     'A8s': "RAISE",
//     'A7s': "RAISE",
//     'A6s': "RAISE",
//     'A5s': "RAISE",
//     'A4s': "RAISE",
//     'A3s': "RAISE",
//     'A2s': "RAISE",
//     'AKo': "RAISE",
//     'KKo': "RAISE",
//     'KQs': "RAISE",
//     'KJs': "RAISE",
//     'KTs': "RAISE",
//     'K9s': "RAISE",
//     'K8s': "RAISE",
//     'K7s': "RAISE",
//     'K6s': "RAISE",
//     'K5s': "RAISE",
//     'K4s': "RAISE",
//     'K3s': "RAISE",
//     'K2s': "RAISE",
//     'AQo': "RAISE",
//     'KQo': "RAISE",
//     'QQo': "RAISE",
//     'QJs': "RAISE",
//     'QTs': "RAISE",
//     'Q9s': "RAISE",
//     'Q8s': "RAISE",
//     'Q7s': "RAISE",
//     'Q6s': "RAISE",
//     'Q5s': "RAISE",
//     'Q4s': "RAISE",
//     'Q3s': "RAISE",
//     'Q2s': "RAISE",
//     "22o": "RAISE",
//     'AJo': "RAISE",
//     'KJo': "RAISE",
//     'QJo': "RAISE",
//     'JJo': "RAISE",
//     'JTs': "RAISE",
//     'J9s': "RAISE",
//     'J8s': "RAISE",
//     'J7s': "RAISE",
//     'J6s': "RAISE",
//     'J5s': "FOLD",
//     'J4s': "FOLD",
//     'J3s': "FOLD",
//     'J2s': "FOLD",
//     'ATo': "RAISE",
//     'KTo': "FOLD",
//     'QTo': "FOLD",
//     'JTo': "FOLD",
//     'TTo': "RAISE",
//     'T9s': "RAISE",
//     'T8s': "RAISE",
//     'T7s': "RAISE",
//     'T6s': "RAISE",
//     'T5s': "FOLD",
//     'T4s': "FOLD",
//     'T3s': "FOLD",
//     'T2s': "FOLD",
//     'A9o': "RAISE",
//     'K9o': "RAISE",
//     'Q9o': "RAISE",
//     'J9o': "RAISE",
//     'T9o': "RAISE",
//     "99o": "RAISE",
//     "98s": "RAISE",
//     "97s": "RAISE",
//     "96s": "RAISE",
//     "95s": "FOLD",
//     "94s": "FOLD",
//     "93s": "FOLD",
//     "92s": "FOLD",
//     'A8o': "RAISE",
//     'K8o': "RAISE",
//     'Q8o': "RAISE",
//     'J8o': "RAISE",
//     'T8o': "RAISE",
//     "98o": "RAISE",
//     "88o": "RAISE",
//     "87s": "RAISE",
//     "86s": "RAISE",
//     "85s": "RAISE",
//     "84s": "FOLD",
//     "83s": "FOLD",
//     "82s": "FOLD",
//     'A7o': "RAISE",
//     'K7o': "RAISE",
//     'Q7o': "FOLD",
//     'J7o': "FOLD",
//     'T7o': "FOLD",
//     "97o": "RAISE",
//     "87o": "RAISE",
//     "77o": "RAISE",
//     "76s": "RAISE",
//     "75s": "RAISE",
//     "74s": "RAISE",
//     "73s": "FOLD",
//     "72s": "FOLD",
//     'A6o': "RAISE",
//     'K6o': "FOLD",
//     'Q6o': "FOLD",
//     'J6o': "FOLD",
//     'T6o': "FOLD",
//     "96o": "FOLD",
//     "86o": "FOLD",
//     "76o": "RAISE",
//     "66o": "RAISE",
//     "65s": "RAISE",
//     "64s": "RAISE",
//     "63s": "FOLD",
//     "62s": "FOLD",
//     'A5o': "RAISE",
//     'K5o': "FOLD",
//     'Q5o': "FOLD",
//     'J5o': "FOLD",
//     'T5o': "FOLD",
//     "95o": "FOLD",
//     "85o": "FOLD",
//     "75o": "FOLD",
//     "65o": "FOLD",
//     "55o": "RAISE",
//     "54s": "RAISE",
//     "53s": "RAISE",
//     "52s": "FOLD",
//     'A4o': "RAISE",
//     'K4o': "FOLD",
//     'Q4o': "FOLD",
//     'J4o': "FOLD",
//     'T4o': "FOLD",
//     "94o": "FOLD",
//     "84o": "FOLD",
//     "74o": "FOLD",
//     "64o": "FOLD",
//     "54o": "FOLD",
//     "44o": "RAISE",
//     "43s": "RAISE",
//     "42s": "FOLD",
//     'A3o': "RAISE",
//     'K3o': "FOLD",
//     'Q3o': "FOLD",
//     'J3o': "FOLD",
//     'T3o': "FOLD",
//     "93o": "FOLD",
//     "83o": "FOLD",
//     "73o": "FOLD",
//     "63o": "FOLD",
//     "53o": "FOLD",
//     "43o": "FOLD",
//     "33o": "RAISE",
//     "32s": "RAISE",
//     'A2o': "RAISE",
//     'K2o': "FOLD",
//     'Q2o': "FOLD",
//     'J2o': "FOLD",
//     'T2o': "FOLD",
//     "92o": "FOLD",
//     "82o": "FOLD",
//     "72o": "FOLD",
//     "62o": "FOLD",
//     "52o": "FOLD",
//     "42o": "FOLD",
//     "32o": "FOLD",
//   };

//   const raiseMultipliers = {
//     'Tight-passive': 2,
//     'Loose-passive': 2.5,
//     'Tight-aggressive': 3,
//     'Loose-aggressive': 3.5,
//   };

//   const positionMultipliers = {
//     'Button': 1.5,
//     'Small Blind': 1.3,
//     'Big Blind': 1.2,
//     'Lo Jack': 1,
//     'High Jack': 1,
//     'Cut OFF': 1.5,
//   };

//   const getCardCombination = () => {
//     // Randomly select two cards from '2' to 'A'
//     const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
//     const randomRank1 = ranks[Math.floor(Math.random() * ranks.length)];
//     const randomRank2 = ranks[Math.floor(Math.random() * ranks.length)];
//     return [randomRank1, randomRank2].sort().reverse(); // Sort in descending order
//   };

//   const formatCardCombination = (cards) => {
//     // Add 'o' for offsuit or 's' for suited
//     return cards[0] === cards[1] ? `${cards[0]}o` : `${cards[0]}${cards[1]}s`;
//   };

//   const calculateRaiseAmount = (action) => {
//     if (action === 'RAISE') {
//       const raiseMultiplier = raiseMultipliers[playerStyle] || 3;
//       const positionMultiplier = positionMultipliers[playerPosition] || 1.5;

//       // Calculate the raise amount based on the purse value, with custom rules
//       let calculatedRaiseAmount = Math.ceil(purseValue * raiseMultiplier * positionMultiplier);

//       // Custom rules for certain card combinations
//       const playerHand = formatCardCombination(playerCards);
//       if (playerHand === '74s') {
//         calculatedRaiseAmount = Math.ceil(calculatedRaiseAmount / 4); // Less raise amount
//       } else if (playerHand === '76o') {
//         calculatedRaiseAmount = Math.ceil(calculatedRaiseAmount / 2); // Moderate raise amount
//       }

//       return calculatedRaiseAmount > purseValue ? purseValue : calculatedRaiseAmount;
//     } else {
//       return null;
//     }
//   };

//   const handlePreflopDecision = () => {
//     // Get random player hole cards and format them
//     const cards = getCardCombination();
//     setPlayerCards(cards);
//     const playerHand = formatCardCombination(cards);

//     // Check the preflop table for the player's starting hand
//     if (preflopTableData[playerHand]) {
//       const action = preflopTableData[playerHand];

//       // Update the state with the decision and raise amount
//       setDecision(action);
//       setRaiseAmount(calculateRaiseAmount(action));
//     } else {
//       // Default action if not found in the preflop table (e.g., FOLD)
//       setDecision('FOLD');
//       setRaiseAmount(null);
//     }
//   };

//   return (
//     <div>
//       {/* Display player's hole cards, position, and style */}
//       <p>Player Hole Cards: {playerCards[0]}{playerCards[1] === '1' ? 'A' : playerCards[1]}s</p>
//       <p>Position: {playerPosition}</p>
//       <p>Style: {playerStyle}</p>

//       {/* Display preflop decision */}
//       {decision && <p>Decision: {decision}</p>}
//       {raiseAmount !== null && (
//         <p>Raise Amount: ${raiseAmount > purseValue ? purseValue : raiseAmount}</p>
//       )}

//       {/* Button to trigger preflop decision */}
//       <button onClick={handlePreflopDecision}>Get Preflop Decision</button>
//     </div>
//   );
// };

// export default PreflopBet;




// import React, { useState } from 'react';

// const PreflopBet = () => {
//   const [playerCards, setPlayerCards] = useState(['A', 'K']); // Example: Player's hole cards ranks
//   const [playerPosition, setPlayerPosition] = useState('but'); // Example: Player's position
//   const [playerStyle, setPlayerStyle] = useState('loose-aggressive'); // Example: Player's style
//   const [decision, setDecision] = useState(null);
//   const [raiseAmount, setRaiseAmount] = useState(null);
//   const purseValue = 850; // Example: The purse value

//   const preflopTableData = {
//     'AAo': "RAISE",
//     'AKs': "RAISE",
//     'AQs': "RAISE",
//     'AJs': "RAISE",
//     'ATs': "RAISE",
//     'A9s': "RAISE",
//     'A8s': "RAISE",
//     'A7s': "RAISE",
//     'A6s': "RAISE",
//     'A5s': "RAISE",
//     'A4s': "RAISE",
//     'A3s': "RAISE",
//     'A2s': "RAISE",
//     'AKo': "RAISE",
//     'KKo': "RAISE",
//     'KQs': "RAISE",
//     'KJs': "RAISE",
//     'KTs': "RAISE",
//     'K9s': "RAISE",
//     'K8s': "RAISE",
//     'K7s': "RAISE",
//     'K6s': "RAISE",
//     'K5s': "RAISE",
//     'K4s': "RAISE",
//     'K3s': "RAISE",
//     'K2s': "RAISE",
//     'AQo': "RAISE",
//     'KQo': "RAISE",
//     'QQo': "RAISE",
//     'QJs': "RAISE",
//     'QTs': "RAISE",
//     'Q9s': "RAISE",
//     'Q8s': "RAISE",
//     'Q7s': "RAISE",
//     'Q6s': "RAISE",
//     'Q5s': "RAISE",
//     'Q4s': "RAISE",
//     'Q3s': "RAISE",
//     'Q2s': "RAISE",
//     "22o": "RAISE",
//     'AJo': "RAISE",
//     'KJo': "RAISE",
//     'QJo': "RAISE",
//     'JJo': "RAISE",
//     'JTs': "RAISE",
//     'J9s': "RAISE",
//     'J8s': "RAISE",
//     'J7s': "RAISE",
//     'J6s': "RAISE",
//     'J5s': "FOLD",
//     'J4s': "FOLD",
//     'J3s': "FOLD",
//     'J2s': "FOLD",
//     'ATo': "RAISE",
//     'KTo': "FOLD",
//     'QTo': "FOLD",
//     'JTo': "FOLD",
//     'TTo': "RAISE",
//     'T9s': "RAISE",
//     'T8s': "RAISE",
//     'T7s': "RAISE",
//     'T6s': "RAISE",
//     'T5s': "FOLD",
//     'T4s': "FOLD",
//     'T3s': "FOLD",
//     'T2s': "FOLD",
//     'A9o': "RAISE",
//     'K9o': "RAISE",
//     'Q9o': "RAISE",
//     'J9o': "RAISE",
//     'T9o': "RAISE",
//     "99o": "RAISE",
//     "98s": "RAISE",
//     "97s": "RAISE",
//     "96s": "RAISE",
//     "95s": "FOLD",
//     "94s": "FOLD",
//     "93s": "FOLD",
//     "92s": "FOLD",
//     'A8o': "RAISE",
//     'K8o': "RAISE",
//     'Q8o': "RAISE",
//     'J8o': "RAISE",
//     'T8o': "RAISE",
//     "98o": "RAISE",
//     "88o": "RAISE",
//     "87s": "RAISE",
//     "86s": "RAISE",
//     "85s": "RAISE",
//     "84s": "FOLD",
//     "83s": "FOLD",
//     "82s": "FOLD",
//     'A7o': "RAISE",
//     'K7o': "RAISE",
//     'Q7o': "FOLD",
//     'J7o': "FOLD",
//     'T7o': "FOLD",
//     "97o": "RAISE",
//     "87o": "RAISE",
//     "77o": "RAISE",
//     "76s": "RAISE",
//     "75s": "RAISE",
//     "74s": "RAISE",
//     "73s": "FOLD",
//     "72s": "FOLD",
//     'A6o': "RAISE",
//     'K6o': "FOLD",
//     'Q6o': "FOLD",
//     'J6o': "FOLD",
//     'T6o': "FOLD",
//     "96o": "FOLD",
//     "86o": "FOLD",
//     "76o": "RAISE",
//     "66o": "RAISE",
//     "65s": "RAISE",
//     "64s": "RAISE",
//     "63s": "FOLD",
//     "62s": "FOLD",
//     'A5o': "RAISE",
//     'K5o': "FOLD",
//     'Q5o': "FOLD",
//     'J5o': "FOLD",
//     'T5o': "FOLD",
//     "95o": "FOLD",
//     "85o": "FOLD",
//     "75o": "FOLD",
//     "65o": "FOLD",
//     "55o": "RAISE",
//     "54s": "RAISE",
//     "53s": "RAISE",
//     "52s": "FOLD",
//     'A4o': "RAISE",
//     'K4o': "FOLD",
//     'Q4o': "FOLD",
//     'J4o': "FOLD",
//     'T4o': "FOLD",
//     "94o": "FOLD",
//     "84o": "FOLD",
//     "74o": "FOLD",
//     "64o": "FOLD",
//     "54o": "FOLD",
//     "44o": "RAISE",
//     "43s": "RAISE",
//     "42s": "FOLD",
//     'A3o': "RAISE",
//     'K3o': "FOLD",
//     'Q3o': "FOLD",
//     'J3o': "FOLD",
//     'T3o': "FOLD",
//     "93o": "FOLD",
//     "83o": "FOLD",
//     "73o": "FOLD",
//     "63o": "FOLD",
//     "53o": "FOLD",
//     "43o": "FOLD",
//     "33o": "RAISE",
//     "32s": "RAISE",
//     'A2o': "RAISE",
//     'K2o': "FOLD",
//     'Q2o': "FOLD",
//     'J2o': "FOLD",
//     'T2o': "FOLD",
//     "92o": "FOLD",
//     "82o": "FOLD",
//     "72o": "FOLD",
//     "62o": "FOLD",
//     "52o": "FOLD",
//     "42o": "FOLD",
//     "32o": "FOLD",
//   };

//   const raiseMultipliers = {
//     'Tight-passive': 2,
//     'Loose-passive': 2.5,
//     'Tight-aggressive': 3,
//     'Loose-aggressive': 3.5,
//   };

//   const positionMultipliers = {
//     'Button': 1.5,
//     'Small Blind': 1.3,
//     'Big Blind': 1.2,
//     'Lo Jack': 1,
//     'High Jack': 1,
//     'Cut OFF': 1.5,
//   };

//   const getCardCombination = () => {
//     // Randomly select two cards from '2' to 'A'
//     const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
//     const randomRank1 = ranks[Math.floor(Math.random() * ranks.length)];
//     const randomRank2 = ranks[Math.floor(Math.random() * ranks.length)];
//     return [randomRank1, randomRank2];
//   };

//   const formatCardCombination = (cards) => {
//     // Add 'o' for offsuit or 's' for suited
//     return cards[0] === cards[1] ? `${cards[0]}o` : `${cards[0]}${cards[1]}s`;
//   };

//   const calculateRaiseAmount = (action) => {
//     if (action === 'RAISE') {
//       const raiseMultiplier = raiseMultipliers[playerStyle] || 3;
//       const positionMultiplier = positionMultipliers[playerPosition] || 1.5;

//       // Calculate the raise amount based on the purse value
//       const calculatedRaiseAmount = Math.ceil(purseValue * raiseMultiplier * positionMultiplier);
//       return calculatedRaiseAmount;
//     } else {
//       return null;
//     }
//   };

//   const handlePreflopDecision = () => {
//     // Get random player hole cards and format them
//     const cards = getCardCombination();
//     setPlayerCards(cards);
//     const playerHand = formatCardCombination(cards);

//     // Check the preflop table for the player's starting hand
//     if (preflopTableData[playerHand]) {
//       const action = preflopTableData[playerHand];

//       // Update the state with the decision and raise amount
//       setDecision(action);
//       setRaiseAmount(calculateRaiseAmount(action));
//     } else {
//       // Default action if not found in the preflop table (e.g., FOLD)
//       setDecision('FOLD');
//       setRaiseAmount(null);
//     }
//   };

//   return (
//     <div>
//       {/* Display player's hole cards, position, and style */}
//       <p>Player Hole Cards: {playerCards[0]}{playerCards[1]}</p>
//       <p>Position: {playerPosition}</p>
//       <p>Style: {playerStyle}</p>

//       {/* Display preflop decision */}
//       {decision && <p>Decision: {decision}</p>}
//       {raiseAmount && <p>Raise Amount: ${raiseAmount}</p>}

//       {/* Button to trigger preflop decision */}
//       <button onClick={handlePreflopDecision}>Get Preflop Decision</button>
//     </div>
//   );
// };

// export default PreflopBet;


// import React, { useState } from 'react';

// const PreflopBet = () => {
//   const [playerCards, setPlayerCards] = useState(['A', 'J']); // Example: Player's hole cards ranks
//   const [playerPosition, setPlayerPosition] = useState('but'); // Example: Player's position
//   const [playerStyle, setPlayerStyle] = useState('loose-aggressive'); // Example: Player's style
//   const [decision, setDecision] = useState(null);
//   const [raiseAmount, setRaiseAmount] = useState(null);
//   const purseValue = 850; // Example: The purse value

//   const preflopTableData = {
//     'AAo': "RAISE",
//     'AKs': "RAISE",
//     'AQs': "RAISE",
//     'AJs': "RAISE",
//     'ATs': "RAISE",
//     'A9s': "RAISE",
//     'A8s': "RAISE",
//     'A7s': "RAISE",
//     'A6s': "RAISE",
//     'A5s': "RAISE",
//     'A4s': "RAISE",
//     'A3s': "RAISE",
//     'A2s': "RAISE",
//     'AKo': "RAISE",
//     'KKo': "RAISE",
//     'KQs': "RAISE",
//     'KJs': "RAISE",
//     'KTs': "RAISE",
//     'K9s': "RAISE",
//     'K8s': "RAISE",
//     'K7s': "RAISE",
//     'K6s': "RAISE",
//     'K5s': "RAISE",
//     'K4s': "RAISE",
//     'K3s': "RAISE",
//     'K2s': "RAISE",
//     'AQo': "RAISE",
//     'KQo': "RAISE",
//     'QQo': "RAISE",
//     'QJs': "RAISE",
//     'QTs': "RAISE",
//     'Q9s': "RAISE",
//     'Q8s': "RAISE",
//     'Q7s': "RAISE",
//     'Q6s': "RAISE",
//     'Q5s': "RAISE",
//     'Q4s': "RAISE",
//     'Q3s': "RAISE",
//     'Q2s': "RAISE",
//     "22o": "RAISE",
//     'AJo': "RAISE",
//     'KJo': "RAISE",
//     'QJo': "RAISE",
//     'JJo': "RAISE",
//     'JTs': "RAISE",
//     'J9s': "RAISE",
//     'J8s': "RAISE",
//     'J7s': "RAISE",
//     'J6s': "RAISE",
//     'J5s': "FOLD",
//     'J4s': "FOLD",
//     'J3s': "FOLD",
//     'J2s': "FOLD",
//     'ATo': "RAISE",
//     'KTo': "FOLD",
//     'QTo': "FOLD",
//     'JTo': "FOLD",
//     'TTo': "RAISE",
//     'T9s': "RAISE",
//     'T8s': "RAISE",
//     'T7s': "RAISE",
//     'T6s': "RAISE",
//     'T5s': "FOLD",
//     'T4s': "FOLD",
//     'T3s': "FOLD",
//     'T2s': "FOLD",
//     'A9o': "RAISE",
//     'K9o': "RAISE",
//     'Q9o': "RAISE",
//     'J9o': "RAISE",
//     'T9o': "RAISE",
//     "99o": "RAISE",
//     "98s": "RAISE",
//     "97s": "RAISE",
//     "96s": "RAISE",
//     "95s": "FOLD",
//     "94s": "FOLD",
//     "93s": "FOLD",
//     "92s": "FOLD",
//     'A8o': "RAISE",
//     'K8o': "RAISE",
//     'Q8o': "RAISE",
//     'J8o': "RAISE",
//     'T8o': "RAISE",
//     "98o": "RAISE",
//     "88o": "RAISE",
//     "87s": "RAISE",
//     "86s": "RAISE",
//     "85s": "RAISE",
//     "84s": "FOLD",
//     "83s": "FOLD",
//     "82s": "FOLD",
//     'A7o': "RAISE",
//     'K7o': "RAISE",
//     'Q7o': "FOLD",
//     'J7o': "FOLD",
//     'T7o': "FOLD",
//     "97o": "RAISE",
//     "87o": "RAISE",
//     "77o": "RAISE",
//     "76s": "RAISE",
//     "75s": "RAISE",
//     "74s": "RAISE",
//     "73s": "FOLD",
//     "72s": "FOLD",
//     'A6o': "RAISE",
//     'K6o': "FOLD",
//     'Q6o': "FOLD",
//     'J6o': "FOLD",
//     'T6o': "FOLD",
//     "96o": "FOLD",
//     "86o": "FOLD",
//     "76o": "RAISE",
//     "66o": "RAISE",
//     "65s": "RAISE",
//     "64s": "RAISE",
//     "63s": "FOLD",
//     "62s": "FOLD",
//     'A5o': "RAISE",
//     'K5o': "FOLD",
//     'Q5o': "FOLD",
//     'J5o': "FOLD",
//     'T5o': "FOLD",
//     "95o": "FOLD",
//     "85o": "FOLD",
//     "75o": "FOLD",
//     "65o": "FOLD",
//     "55o": "RAISE",
//     "54s": "RAISE",
//     "53s": "RAISE",
//     "52s": "FOLD",
//     'A4o': "RAISE",
//     'K4o': "FOLD",
//     'Q4o': "FOLD",
//     'J4o': "FOLD",
//     'T4o': "FOLD",
//     "94o": "FOLD",
//     "84o": "FOLD",
//     "74o": "FOLD",
//     "64o": "FOLD",
//     "54o": "FOLD",
//     "44o": "RAISE",
//     "43s": "RAISE",
//     "42s": "FOLD",
//     'A3o': "RAISE",
//     'K3o': "FOLD",
//     'Q3o': "FOLD",
//     'J3o': "FOLD",
//     'T3o': "FOLD",
//     "93o": "FOLD",
//     "83o": "FOLD",
//     "73o": "FOLD",
//     "63o": "FOLD",
//     "53o": "FOLD",
//     "43o": "FOLD",
//     "33o": "RAISE",
//     "32s": "RAISE",
//     'A2o': "RAISE",
//     'K2o': "FOLD",
//     'Q2o': "FOLD",
//     'J2o': "FOLD",
//     'T2o': "FOLD",
//     "92o": "FOLD",
//     "82o": "FOLD",
//     "72o": "FOLD",
//     "62o": "FOLD",
//     "52o": "FOLD",
//     "42o": "FOLD",
//     "32o": "FOLD",
//   };

//   const raiseMultipliers = {
//     'Tight-passive': 2,
//     'Loose-passive': 2.5,
//     'Tight-aggressive': 3,
//     'Loose-aggressive': 3.5,
//   };

//   const positionMultipliers = {
//     'Button': 1.5,
//     'Small Blind': 1.3,
//     'Big Blind': 1.2,
//     'Lo Jack': 1,
//     'High Jack': 1,
//     'Cut OFF': 1.5,
//   };

//   const getCardCombination = () => {
//     // Randomly select two cards from '2' to 'A'
//     const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
//     const randomRank1 = ranks[Math.floor(Math.random() * ranks.length)];
//     const randomRank2 = ranks[Math.floor(Math.random() * ranks.length)];
//     return [randomRank1, randomRank2];
//   };

//   const formatCardCombination = (cards) => {
//     // Add 'o' for offsuit or 's' for suited
//     return cards[0] === cards[1] ? `${cards[0]}o` : `${cards[0]}${cards[1]}s`;
//   };

//   const calculateRaiseAmount = (action) => {
//     if (action === 'RAISE') {
//       const raiseMultiplier = raiseMultipliers[playerStyle] || 3;
//       const positionMultiplier = positionMultipliers[playerPosition] || 1.5;

//       // Calculate the raise amount based on the purse value, but do not exceed the purse
//       const calculatedRaiseAmount = Math.min(purseValue, Math.ceil(purseValue * raiseMultiplier * positionMultiplier));
//       return calculatedRaiseAmount;
//     } else {
//       return null;
//     }
//   };

//   const handlePreflopDecision = () => {
//     // Get random player hole cards and format them
//     const cards = getCardCombination();
//     setPlayerCards(cards);
//     const playerHand = formatCardCombination(cards);

//     // Check the preflop table for the player's starting hand
//     if (preflopTableData[playerHand]) {
//       const action = preflopTableData[playerHand];

//       // Update the state with the decision and raise amount
//       setDecision(action);
//       setRaiseAmount(calculateRaiseAmount(action));
//     } else {
//       // Default action if not found in the preflop table (e.g., FOLD)
//       setDecision('FOLD');
//       setRaiseAmount(null);
//     }
//   };

//   return (
//     <div>
//       {/* Display player's hole cards, position, and style */}
//       <p>Player Hole Cards: {playerCards[0] === playerCards[1] ? `${playerCards[0]}o` : `${playerCards[0]}${playerCards[1]}s`}</p>
//       <p>Position: {playerPosition}</p>
//       <p>Style: {playerStyle}</p>

//       {/* Display preflop decision */}
//       {decision && <p>Decision: {decision}</p>}
//       {raiseAmount !== null && (
//         <p>Raise Amount: ${raiseAmount > purseValue ? purseValue : raiseAmount}</p>
//       )}

//       {/* Button to trigger preflop decision */}
//       <button onClick={handlePreflopDecision}>Get Preflop Decision</button>
//     </div>
//   );
// };

// export default PreflopBet;

import React, { useState } from 'react';

const PreflopBet = () => {
  const [playerCards, setPlayerCards] = useState(['A', 'J']); //  Player's hole cards ranks
  const [playerPosition, setPlayerPosition] = useState('but'); //  Player's position
  const [playerStyle, setPlayerStyle] = useState('loose-aggressive'); //  Player's style
  const [decision, setDecision] = useState(null);
  const [raiseAmount, setRaiseAmount] = useState(null);
  const purseValue = 850; 

  const preflopTableData = {
    'AAo': "RAISE",
    'AKs': "RAISE",
    'AQs': "RAISE",
    'AJs': "RAISE",
    'ATs': "RAISE",
    'A9s': "RAISE",
    'A8s': "RAISE",
    'A7s': "RAISE",
    'A6s': "RAISE",
    'A5s': "RAISE",
    'A4s': "RAISE",
    'A3s': "RAISE",
    'A2s': "RAISE",
    'AKo': "RAISE",
    'KKo': "RAISE",
    'KQs': "RAISE",
    'KJs': "RAISE",
    'KTs': "RAISE",
    'K9s': "RAISE",
    'K8s': "RAISE",
    'K7s': "RAISE",
    'K6s': "RAISE",
    'K5s': "RAISE",
    'K4s': "RAISE",
    'K3s': "RAISE",
    'K2s': "RAISE",
    'AQo': "RAISE",
    'KQo': "RAISE",
    'QQo': "RAISE",
    'QJs': "RAISE",
    'QTs': "RAISE",
    'Q9s': "RAISE",
    'Q8s': "RAISE",
    'Q7s': "RAISE",
    'Q6s': "RAISE",
    'Q5s': "RAISE",
    'Q4s': "RAISE",
    'Q3s': "RAISE",
    'Q2s': "RAISE",
    "22o": "RAISE",
    'AJo': "RAISE",
    'KJo': "RAISE",
    'QJo': "RAISE",
    'JJo': "RAISE",
    'JTs': "RAISE",
    'J9s': "RAISE",
    'J8s': "RAISE",
    'J7s': "RAISE",
    'J6s': "RAISE",
    'J5s': "FOLD",
    'J4s': "FOLD",
    'J3s': "FOLD",
    'J2s': "FOLD",
    'ATo': "RAISE",
    'KTo': "FOLD",
    'QTo': "FOLD",
    'JTo': "FOLD",
    'TTo': "RAISE",
    'T9s': "RAISE",
    'T8s': "RAISE",
    'T7s': "RAISE",
    'T6s': "RAISE",
    'T5s': "FOLD",
    'T4s': "FOLD",
    'T3s': "FOLD",
    'T2s': "FOLD",
    'A9o': "RAISE",
    'K9o': "RAISE",
    'Q9o': "RAISE",
    'J9o': "RAISE",
    'T9o': "RAISE",
    "99o": "RAISE",
    "98s": "RAISE",
    "97s": "RAISE",
    "96s": "RAISE",
    "95s": "FOLD",
    "94s": "FOLD",
    "93s": "FOLD",
    "92s": "FOLD",
    'A8o': "RAISE",
    'K8o': "RAISE",
    'Q8o': "RAISE",
    'J8o': "RAISE",
    'T8o': "RAISE",
    "98o": "RAISE",
    "88o": "RAISE",
    "87s": "RAISE",
    "86s": "RAISE",
    "85s": "RAISE",
    "84s": "FOLD",
    "83s": "FOLD",
    "82s": "FOLD",
    'A7o': "RAISE",
    'K7o': "RAISE",
    'Q7o': "FOLD",
    'J7o': "FOLD",
    'T7o': "FOLD",
    "97o": "RAISE",
    "87o": "RAISE",
    "77o": "RAISE",
    "76s": "RAISE",
    "75s": "RAISE",
    "74s": "RAISE",
    "73s": "FOLD",
    "72s": "FOLD",
    'A6o': "RAISE",
    'K6o': "FOLD",
    'Q6o': "FOLD",
    'J6o': "FOLD",
    'T6o': "FOLD",
    "96o": "FOLD",
    "86o": "FOLD",
    "76o": "RAISE",
    "66o": "RAISE",
    "65s": "RAISE",
    "64s": "RAISE",
    "63s": "FOLD",
    "62s": "FOLD",
    'A5o': "RAISE",
    'K5o': "FOLD",
    'Q5o': "FOLD",
    'J5o': "FOLD",
    'T5o': "FOLD",
    "95o": "FOLD",
    "85o": "FOLD",
    "75o": "FOLD",
    "65o": "FOLD",
    "55o": "RAISE",
    "54s": "RAISE",
    "53s": "RAISE",
    "52s": "FOLD",
    'A4o': "RAISE",
    'K4o': "FOLD",
    'Q4o': "FOLD",
    'J4o': "FOLD",
    'T4o': "FOLD",
    "94o": "FOLD",
    "84o": "FOLD",
    "74o": "FOLD",
    "64o": "FOLD",
    "54o": "FOLD",
    "44o": "RAISE",
    "43s": "RAISE",
    "42s": "FOLD",
    'A3o': "RAISE",
    'K3o': "FOLD",
    'Q3o': "FOLD",
    'J3o': "FOLD",
    'T3o': "FOLD",
    "93o": "FOLD",
    "83o": "FOLD",
    "73o": "FOLD",
    "63o": "FOLD",
    "53o": "FOLD",
    "43o": "FOLD",
    "33o": "RAISE",
    "32s": "RAISE",
    'A2o': "RAISE",
    'K2o': "FOLD",
    'Q2o': "FOLD",
    'J2o': "FOLD",
    'T2o': "FOLD",
    "92o": "FOLD",
    "82o": "FOLD",
    "72o": "FOLD",
    "62o": "FOLD",
    "52o": "FOLD",
    "42o": "FOLD",
    "32o": "FOLD",
  };

  const raiseMultipliers = {
    'Tight-passive': 0.3,
    'Loose-passive': 0.5,
    'Tight-aggressive': 0.8,
    'Loose-aggressive': 1,
  };

  const positionMultipliers = {
    'Button': 1,
    'Small Blind': 0.8,
    'Big Blind': 0.6,
    'Lo Jack': 0.4,
    'High Jack': 0.4,
    'Cut OFF': 1,
  };

  const cardPoints = {
    'A': 13,
    'K': 12,
    'Q': 11,
    'J': 10,
    'T': 9,
    '9': 8,
    '8': 7,
    '7': 6,
    '6': 5,
    '5': 4,
    '4': 3,
    '3': 2,
    '2': 1,
  };

  const getCardCombination = () => {
    
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
    const randomRank1 = ranks[Math.floor(Math.random() * ranks.length)];
    const randomRank2 = ranks[Math.floor(Math.random() * ranks.length)];
    return [randomRank1, randomRank2].sort().reverse(); 
  };

  const formatCardCombination = (cards) => {
    const [rank1, rank2] = cards;
    const formattedRank1 = rank1 === "10" ? "T" : rank1;
    const formattedRank2 = rank2 === "10" ? "T" : rank2;
    return `${formattedRank1}${formattedRank2}${rank1 === rank2 ? "o" : "s"}`;
  };

  // const calculatePoints = (cards) => {
  //   const [rank1, rank2] = cards;
  //   return cardPoints[rank1] + cardPoints[rank2];
  // };

  const calculatePoints = (cards) => {
    const [rank1, suit1] = cards[0];
    const [rank2, suit2] = cards[1];

    // Check if the cards are suited or offsuit
    const suited = suit1 === suit2;

    let points = cardPoints[rank1] + cardPoints[rank2];
    if (!suited) {
      // Reduce points for offsuit hands
      points -= 2;
    }
    return points;
  };


  // const calculateRaiseAmount = (action) => {
  //   if (action === 'RAISE') {
  //     const raiseMultiplier = raiseMultipliers[playerStyle] || 1;
  //     const positionMultiplier = positionMultipliers[playerPosition] || 1;

  //     const playerHandPoints = calculatePoints(playerCards);
  //     const shouldBetHigh = playerHandPoints > 20;

  //     // Calculate the raise amount based on the purse value and custom rules
  //     let calculatedRaiseAmount = Math.ceil(purseValue * raiseMultiplier * positionMultiplier);
      
  //     if (!shouldBetHigh) {
  //       calculatedRaiseAmount = Math.ceil(calculatedRaiseAmount / 2); // Bet lower if points <= 20
  //     }

  //     return calculatedRaiseAmount > purseValue ? purseValue : calculatedRaiseAmount;
  //   } else {
  //     return null;
  //   }
  // };

  // const calculateRaiseAmount = (action) => {
  //   if (action === "RAISE") {
  //     const raiseMultiplier = raiseMultipliers[playerStyle] || 1;
  //     const positionMultiplier = positionMultipliers[playerPosition] || 1;

  //     const playerHandPoints = calculatePoints(playerCards);
  //     const shouldBetHigh = playerHandPoints > 20;

  //     // Calculate the raise amount based on the purse value and custom rules
  //     let calculatedRaiseAmount = Math.ceil(
  //       purseValue * raiseMultiplier * positionMultiplier
  //     );

  //     // Custom rules for determining the raise amount
  //     if (!shouldBetHigh) {
  //       // Bet lower if points <= 20
  //       const multiplier = Math.max(0.2, 1 - (20 - playerHandPoints) * 0.1);
  //       calculatedRaiseAmount = Math.ceil(calculatedRaiseAmount * multiplier);
  //     }

  //     return calculatedRaiseAmount > purseValue
  //       ? purseValue
  //       : calculatedRaiseAmount;
  //   } else {
  //     return null;
  //   }
  // };

  // const calculateRaiseAmount = (action) => {
  //   if (action === "RAISE") {
  //     const raiseMultiplier = raiseMultipliers[playerStyle] || 1;
  //     const positionMultiplier = positionMultipliers[playerPosition] || 1;

  //     const playerHandPoints = calculatePoints(playerCards);
  //     const shouldBetHigh = playerHandPoints > 20;

  //     // Calculate the raise amount based on the purse value and custom rules
  //     let calculatedRaiseAmount = Math.ceil(
  //       purseValue * raiseMultiplier * positionMultiplier
  //     );

  //     // Custom rules for determining the raise amount
  //     if (!shouldBetHigh) {
  //       // Bet lower if points <= 20
  //       const multiplier = Math.max(0.2, 1 - (20 - playerHandPoints) * 0.1);
  //       calculatedRaiseAmount = Math.ceil(calculatedRaiseAmount * multiplier);
  //     }

  //     // Cap the maximum raise amount to 200, except for AAo
  //     if (
  //       playerCards[0] === "A" &&
  //       playerCards[1] === "A" &&
  //       playerCards[2] === "o"
  //     ) {
  //       calculatedRaiseAmount = Math.min(calculatedRaiseAmount, 450);
  //     } else {
  //       calculatedRaiseAmount = Math.min(calculatedRaiseAmount, 200);
  //     }

  //     calculatedRaiseAmount = Math.min(calculatedRaiseAmount, purseValue);
  //     console.log(`Player Hole Cards: ${playerCards[0]}${playerCards[1]}s`);
  //     console.log(`Position: ${playerPosition}`);
  //     console.log(`Style: ${playerStyle}`);
  //     console.log(`Decision: ${action}`);
  //     console.log(`Raise Amount: $${calculatedRaiseAmount}`);
  //     return calculatedRaiseAmount;
  //   } else {
  //     console.log(`Player Hole Cards: ${playerCards[0]}${playerCards[1]}s`);
  //     console.log(`Position: ${playerPosition}`);
  //     console.log(`Style: ${playerStyle}`);
  //     console.log(`Decision: ${action}`);
  //     console.log(`Raise Amount: ${action === "RAISE" ? "$425" : "N/A"}`);
  //     return null;
  //   }
  // };


  // const handlePreflopDecision = () => {
  //   // Get random player hole cards and format them
  //   const cards = getCardCombination();
  //   setPlayerCards(cards);
  //   const playerHand = formatCardCombination(cards);

  //   // Check the preflop table for the player's starting hand
  //   if (preflopTableData[playerHand]) {
  //     const action = preflopTableData[playerHand];

  //     // Update the state with the decision and raise amount
  //     setDecision(action);
  //     setRaiseAmount(calculateRaiseAmount(action));
  //   } else {
  //     // Default action if not found in the preflop table (e.g., FOLD)
  //     setDecision('FOLD');
  //     setRaiseAmount(null);
  //   }
  // };

  const calculateRaiseAmount = (action) => {
    if (action === 'RAISE') {
      const raiseMultiplier = raiseMultipliers[playerStyle] || 1;
      const positionMultiplier = positionMultipliers[playerPosition] || 1;

      const playerHandPoints = calculatePoints(playerCards);
      const shouldBetHigh = playerHandPoints > 18;

      // Calculate the raise amount based on the purse value and custom rules
      let calculatedRaiseAmount = Math.ceil(purseValue * raiseMultiplier * positionMultiplier);
      
      if (!shouldBetHigh) {
        calculatedRaiseAmount = Math.ceil(calculatedRaiseAmount / 5); // Bet lower if points <= 18
      }

      // Cap the maximum raise amount
      if (playerHandPoints === 26) {
        calculatedRaiseAmount = Math.min(calculatedRaiseAmount, 200);
      } else if (playerHandPoints === 25) {
        calculatedRaiseAmount = Math.min(calculatedRaiseAmount, 180);
      } else if (playerHandPoints === 24) {
        calculatedRaiseAmount = Math.min(calculatedRaiseAmount, 160);
      } else if (playerHandPoints === 23) {
        calculatedRaiseAmount = Math.min(calculatedRaiseAmount, 140);
      } else if (playerHandPoints === 22) {
        calculatedRaiseAmount = Math.min(calculatedRaiseAmount, 130);
      } else if (playerHandPoints === 21) {
        calculatedRaiseAmount = Math.min(calculatedRaiseAmount, 120);
      } else if (playerHandPoints === 20) {
        calculatedRaiseAmount = Math.min(calculatedRaiseAmount, 110);
      } else if (playerHandPoints === 19) {
        calculatedRaiseAmount = Math.min(calculatedRaiseAmount, 100);
      } else if (playerHandPoints === 18) {
        calculatedRaiseAmount = Math.min(calculatedRaiseAmount, 95);
      } else if (playerHandPoints === 17) {
        calculatedRaiseAmount = Math.min(calculatedRaiseAmount, 90);
      } else if (playerHandPoints === 16) {
        calculatedRaiseAmount = Math.min(calculatedRaiseAmount, 85);
      } else if (playerHandPoints === 15) {
        calculatedRaiseAmount = Math.min(calculatedRaiseAmount, 80);
      } else if (playerHandPoints === 14) {
        calculatedRaiseAmount = Math.min(calculatedRaiseAmount, 75);
      } else {
        calculatedRaiseAmount = Math.min(calculatedRaiseAmount, 70);
      }

      return calculatedRaiseAmount;
    } else {
      return null;
    }
  };

  // const calculateRaiseAmount = (action) => {
  //   if (action === "RAISE") {
  //     const raiseMultiplier = raiseMultipliers[playerStyle] || 1;
  //     const positionMultiplier = positionMultipliers[playerPosition] || 1;

  //     const playerHandPoints = calculatePoints(playerCards);
  //     const shouldBetHigh = playerHandPoints > 18;

  //     // Calculate the raise amount based on the purse value and custom rules
  //     let calculatedRaiseAmount = Math.ceil(
  //       purseValue * raiseMultiplier * positionMultiplier
  //     );

  //     // Calculate the raise amount based on player hand points
  //     // Increase the raise amount linearly with player hand points
  //     calculatedRaiseAmount += 5 * (playerHandPoints - 18);

  //     // Cap the maximum raise amount
  //     calculatedRaiseAmount = Math.min(calculatedRaiseAmount, 200);

  //     return calculatedRaiseAmount;
  //   } else {
  //     return null;
  //   }
  // };

// const calculateRaiseAmount = (action) => {
//   if (action === "RAISE") {
//     const raiseMultiplier = raiseMultipliers[playerStyle] || 1;
//     const positionMultiplier = positionMultipliers[playerPosition] || 1;

//     const playerHandPoints = calculatePoints(playerCards);
//     const shouldBetHigh = playerHandPoints > 18;

//     // Calculate the base raise amount based on the purse value and custom rules
//     let calculatedRaiseAmount = Math.ceil(
//       purseValue * raiseMultiplier * positionMultiplier
//     );

//     // Calculate the additional raise amount based on player hand points
//     // Higher hand points result in a higher raise amount
//     let additionalRaiseAmount = 0;
//     if (playerHandPoints > 18 && playerHandPoints <= 26) {
//       additionalRaiseAmount = Math.ceil((playerHandPoints - 18) * 10); // Adjust the multiplier as per your preference
//     }

//     // Calculate the total raise amount (base + additional) and cap it at 200 for AA and 180 for AK
//     calculatedRaiseAmount = Math.min(
//       calculatedRaiseAmount + additionalRaiseAmount,
//       200
//     );
//     if (playerHandPoints === 26) {
//       calculatedRaiseAmount = Math.min(calculatedRaiseAmount, 200);
//     } else if (playerHandPoints === 25) {
//       calculatedRaiseAmount = Math.min(calculatedRaiseAmount, 180);
//     }

//     return calculatedRaiseAmount;
//   } else {
//     return null;
//   }
// };

  // const handlePreflopDecision = () => {
  //   // Get random player hole cards and format them
  //   const cards = getCardCombination();
  //   setPlayerCards(cards);
  //   const playerHand = formatCardCombination(cards);

  //   // Check the preflop table for the player's starting hand
  //   if (preflopTableData[playerHand]) {
  //     const action = preflopTableData[playerHand];

  //     // Calculate raise amount
  //     const raiseAmount = calculateRaiseAmount(action);

  //     // Update the state with the decision and raise amount
  //     setDecision(action);
  //     setRaiseAmount(raiseAmount);

  //     // Console output
  //     console.log(`Player Hole Cards: ${cards[0]}${cards[1]}s`);
  //     console.log(`Position: ${playerPosition}`);
  //     console.log(`Style: ${playerStyle}`);
  //     console.log(`Decision: ${action}`);
  //     console.log(`Raise Amount: $${raiseAmount}`);
  //   } else {
  //     // Default action if not found in the preflop table (e.g., FOLD)
  //     setDecision('FOLD');
  //     setRaiseAmount(null);

  //     // Console output
  //     console.log(`Player Hole Cards: ${cards[0]}${cards[1]}s`);
  //     console.log(`Position: ${playerPosition}`);
  //     console.log(`Style: ${playerStyle}`);
  //     console.log(`Decision: FOLD`);
  //     console.log(`Raise Amount: N/A`);
  //   }
  // };

    const handlePreflopDecision = () => {
      // Get random player hole cards and format them
      const cards = getCardCombination();
      setPlayerCards(cards);
      const playerHand = formatCardCombination(cards);

      // Check the preflop table for the player's starting hand
      if (preflopTableData[playerHand]) {
        const action = preflopTableData[playerHand];

        // Calculate raise amount
        const raiseAmount = calculateRaiseAmount(action);

        // Update the state with the decision and raise amount
        setDecision(action);
        setRaiseAmount(raiseAmount);

        // Console output
        console.log(`Player Hole Cards: ${formatCardCombination(cards)}`);
        console.log(`Position: ${playerPosition}`);
        console.log(`Style: ${playerStyle}`);
        console.log(`Decision: ${action}`);
        console.log(`Raise Amount: $${raiseAmount}`);
      } else {
        // Default action if not found in the preflop table (e.g., FOLD)
        setDecision("FOLD");
        setRaiseAmount(null);

        // Console output
        console.log(`Player Hole Cards: ${formatCardCombination(cards)}`);
        console.log(`Position: ${playerPosition}`);
        console.log(`Style: ${playerStyle}`);
        console.log(`Decision: FOLD`);
        console.log(`Raise Amount: N/A`);
      }
    };

  return (
    <div>
      {/* Display player's hole cards, position, and style */}
      <p>Player Hole Cards: {playerCards[0]}{playerCards[1]}s</p>
      <p>Position: {playerPosition}</p>
      <p>Style: {playerStyle}</p>

      {/* Display preflop decision */}
      {decision && <p>Decision: {decision}</p>}
      {raiseAmount !== null && (
        <p>Raise Amount: ${raiseAmount > purseValue ? purseValue : raiseAmount}</p>
      )}

      {/* Button to trigger preflop decision */}
      <button onClick={handlePreflopDecision}>Get Preflop Decision</button>
    </div>
  );
};

export default PreflopBet;

