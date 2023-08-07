import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

const PreflopBet1 = () => {
  const deckOfCards = [
    { id: 1, name: "A♥" },
    { id: 2, name: "A♦" },
    { id: 3, name: "A♣" },
    { id: 4, name: "A♠" },
    { id: 5, name: "K♥" },
    { id: 6, name: "K♦" },
    { id: 7, name: "K♣" },
    { id: 8, name: "K♠" },
    { id: 9, name: "Q♥" },
    { id: 10, name: "Q♦" },
    { id: 11, name: "Q♣" },
    { id: 12, name: "Q♠" },
    { id: 13, name: "J♥" },
    { id: 14, name: "J♦" },
    { id: 15, name: "J♣" },
    { id: 16, name: "J♠" },
    { id: 17, name: "T♥" },
    { id: 18, name: "T♦" },
    { id: 19, name: "T♣" },
    { id: 20, name: "T♠" },
    { id: 21, name: "9♥" },
    { id: 22, name: "9♦" },
    { id: 23, name: "9♣" },
    { id: 24, name: "9♠" },
    { id: 25, name: "8♥" },
    { id: 26, name: "8♦" },
    { id: 27, name: "8♣" },
    { id: 28, name: "8♠" },
    { id: 29, name: "7♥" },
    { id: 30, name: "7♦" },
    { id: 31, name: "7♣" },
    { id: 32, name: "7♠" },
    { id: 33, name: "6♥" },
    { id: 34, name: "6♦" },
    { id: 35, name: "6♣" },
    { id: 36, name: "6♠" },
    { id: 37, name: "5♥" },
    { id: 38, name: "5♦" },
    { id: 39, name: "5♣" },
    { id: 40, name: "5♠" },
    { id: 41, name: "4♥" },
    { id: 42, name: "4♦" },
    { id: 43, name: "4♣" },
    { id: 44, name: "4♠" },
    { id: 45, name: "3♥" },
    { id: 46, name: "3♦" },
    { id: 47, name: "3♣" },
    { id: 48, name: "3♠" },
    { id: 49, name: "2♥" },
    { id: 50, name: "2♦" },
    { id: 51, name: "2♣" },
    { id: 52, name: "2♠" },
  ];

  const suitCards = [
    { id: 1, name: "♥" },
    { id: 2, name: "♦" },
    { id: 3, name: "♣" },
    { id: 4, name: "♠" },
  ];

  const [playerCards, setPlayerCards] = useState(["", ""]);
  const [playerPosition, setPlayerPosition] = useState("but");
  const [playerStyle, setPlayerStyle] = useState("loose-aggressive");
  const [decision, setDecision] = useState(null);
  const [raiseAmount, setRaiseAmount] = useState(null);
  const [purseValue, setPurseValue] = useState(850);
  const [potSize, setPotSize] = useState(0);
  const [raiseCalculation, setRaiseCalculation] = useState("");
  const [playerHandPoints, setPlayerHandPoints] = useState(0);

  const preflopTableData = {
    AAo: "RAISE",
    AKs: "RAISE",
    AQs: "RAISE",
    AJs: "RAISE",
    ATs: "RAISE",
    A9s: "RAISE",
    A8s: "RAISE",
    A7s: "RAISE",
    A6s: "RAISE",
    A5s: "RAISE",
    A4s: "RAISE",
    A3s: "RAISE",
    A2s: "RAISE",
    AKo: "RAISE",
    KKo: "RAISE",
    KQs: "RAISE",
    KJs: "RAISE",
    KTs: "RAISE",
    K9s: "RAISE",
    K8s: "RAISE",
    K7s: "RAISE",
    K6s: "RAISE",
    K5s: "RAISE",
    K4s: "RAISE",
    K3s: "RAISE",
    K2s: "RAISE",
    AQo: "RAISE",
    KQo: "RAISE",
    QQo: "RAISE",
    QJs: "RAISE",
    QTs: "RAISE",
    Q9s: "RAISE",
    Q8s: "RAISE",
    Q7s: "RAISE",
    Q6s: "RAISE",
    Q5s: "RAISE",
    Q4s: "RAISE",
    Q3s: "RAISE",
    Q2s: "RAISE",
    "22o": "RAISE",
    AJo: "RAISE",
    KJo: "RAISE",
    QJo: "RAISE",
    JJo: "RAISE",
    JTs: "RAISE",
    J9s: "RAISE",
    J8s: "RAISE",
    J7s: "RAISE",
    J6s: "RAISE",
    J5s: "FOLD",
    J4s: "FOLD",
    J3s: "FOLD",
    J2s: "FOLD",
    ATo: "RAISE",
    KTo: "FOLD",
    QTo: "FOLD",
    JTo: "FOLD",
    TTo: "RAISE",
    T9s: "RAISE",
    T8s: "RAISE",
    T7s: "RAISE",
    T6s: "RAISE",
    T5s: "FOLD",
    T4s: "FOLD",
    T3s: "FOLD",
    T2s: "FOLD",
    A9o: "RAISE",
    K9o: "RAISE",
    Q9o: "RAISE",
    J9o: "RAISE",
    T9o: "RAISE",
    "99o": "RAISE",
    "98s": "RAISE",
    "97s": "RAISE",
    "96s": "RAISE",
    "95s": "FOLD",
    "94s": "FOLD",
    "93s": "FOLD",
    "92s": "FOLD",
    A8o: "RAISE",
    K8o: "RAISE",
    Q8o: "RAISE",
    J8o: "RAISE",
    T8o: "RAISE",
    "98o": "RAISE",
    "88o": "RAISE",
    "87s": "RAISE",
    "86s": "RAISE",
    "85s": "RAISE",
    "84s": "FOLD",
    "83s": "FOLD",
    "82s": "FOLD",
    A7o: "RAISE",
    K7o: "RAISE",
    Q7o: "FOLD",
    J7o: "FOLD",
    T7o: "FOLD",
    "97o": "RAISE",
    "87o": "RAISE",
    "77o": "RAISE",
    "76s": "RAISE",
    "75s": "RAISE",
    "74s": "RAISE",
    "73s": "FOLD",
    "72s": "FOLD",
    A6o: "RAISE",
    K6o: "FOLD",
    Q6o: "FOLD",
    J6o: "FOLD",
    T6o: "FOLD",
    "96o": "FOLD",
    "86o": "FOLD",
    "76o": "RAISE",
    "66o": "RAISE",
    "65s": "RAISE",
    "64s": "RAISE",
    "63s": "FOLD",
    "62s": "FOLD",
    A5o: "RAISE",
    K5o: "FOLD",
    Q5o: "FOLD",
    J5o: "FOLD",
    T5o: "FOLD",
    "95o": "FOLD",
    "85o": "FOLD",
    "75o": "FOLD",
    "65o": "FOLD",
    "55o": "RAISE",
    "54s": "RAISE",
    "53s": "RAISE",
    "52s": "FOLD",
    A4o: "RAISE",
    K4o: "FOLD",
    Q4o: "FOLD",
    J4o: "FOLD",
    T4o: "FOLD",
    "94o": "FOLD",
    "84o": "FOLD",
    "74o": "FOLD",
    "64o": "FOLD",
    "54o": "FOLD",
    "44o": "RAISE",
    "43s": "RAISE",
    "42s": "FOLD",
    A3o: "RAISE",
    K3o: "FOLD",
    Q3o: "FOLD",
    J3o: "FOLD",
    T3o: "FOLD",
    "93o": "FOLD",
    "83o": "FOLD",
    "73o": "FOLD",
    "63o": "FOLD",
    "53o": "FOLD",
    "43o": "FOLD",
    "33o": "RAISE",
    "32s": "RAISE",
    A2o: "RAISE",
    K2o: "FOLD",
    Q2o: "FOLD",
    J2o: "FOLD",
    T2o: "FOLD",
    "92o": "FOLD",
    "82o": "FOLD",
    "72o": "FOLD",
    "62o": "FOLD",
    "52o": "FOLD",
    "42o": "FOLD",
    "32o": "FOLD",
  };

  const raiseMultipliers = {
    "tight-passive": 0.4,
    "loose-passive": 0.5,
    "tight-aggressive": 0.7,
    "loose-aggressive": 0.8,
  };

  const positionMultipliers = {
    but: 0.9,
    "Small Blind": 0.7,
    "Big Blind": 0.6,
    "Lo Jack": 0.4,
    "Hi Jack": 0.3,
    "Cut OFF": 0.1,
  };

  const cardPoints = {
    A: 13,
    K: 12,
    Q: 11,
    J: 10,
    T: 9,
    9: 8,
    8: 7,
    7: 6,
    6: 5,
    5: 4,
    4: 3,
    3: 2,
    2: 1,
  };

  // Generate two random cards from the deck
  const generateRandomCards = () => {
    const card1Index = Math.floor(Math.random() * deckOfCards.length);
    let card2Index = Math.floor(Math.random() * deckOfCards.length);

    // Make sure card2 is different from card1
    while (card2Index === card1Index) {
      card2Index = Math.floor(Math.random() * deckOfCards.length);
    }

    const card1 = deckOfCards[card1Index].name;
    const card2 = deckOfCards[card2Index].name;

    return [card1, card2];
  };

  // Convert cards to higher-ranked card followed by lower-ranked card and 'o' or 's'
  const convertCards = (card1, card2) => {
    const [rank1, suit1] = card1.split("");
    const [rank2, suit2] = card2.split("");

    const card1Points = cardPoints[rank1];
    const card2Points = cardPoints[rank2];

    let highRank, lowRank;
    if (card1Points >= card2Points) {
      highRank = rank1;
      lowRank = rank2;
    } else {
      highRank = rank2;
      lowRank = rank1;
    }

    const isSameSuit = suit1 === suit2;
    const formattedCards = `${highRank}${lowRank}${isSameSuit ? "s" : "o"}`;

    return formattedCards;
  };

  // Check against preflopTableData to get RAISE or FOLD
  const getPreflopDecision = (formattedCards) => {
    const decision = preflopTableData[formattedCards];
    return decision || "FOLD";
  };

  //  const getPreflopDecision = async (formattedCards) => {
  //    try {
  //      const response = await axios.get(
  //        `https://4jzrko6ioa.execute-api.us-west-1.amazonaws.com/dev/api/v2/preflop/${formattedCards}`
  //      );
  //      const decision = response.data.decision; // Assuming the API returns the decision in the response data
  //      return decision || "FOLD";
  //    } catch (error) {
  //      console.error("Error fetching preflop decision:", error);
  //      return "FOLD"; // Return a default decision in case of an error
  //    }
  //  };

  const calculatePoints = (cards) => {
    // const [rank1, suit1] = cards[0];
    // const [rank2, suit2] = cards[1];
    const [card1, card2] = cards;
    const rank1 = card1.slice(0, -1); // Extract the rank from the card name (remove the last character)
    const rank2 = card2.slice(0, -1); // Extract the rank from the card name (remove the last character)
    const suit1 = card1.slice(-1); // Extract the suit from the card name (get the last character)
    const suit2 = card2.slice(-1); // Extract the suit from the card name (get the last character)

    // Check if the cards are suited or offsuit
    const suited = suit1 === suit2;

    const card1Points = cardPoints[rank1];
    const card2Points = cardPoints[rank2];

    let points = card1Points + card2Points;
    if (suited) {
      const rankDifference = Math.abs(card1Points - card2Points);
      if (rankDifference === 1 || rankDifference === 0) {
        // Suited and consecutives or Pair get a bonus of 5 points
        points += 5;
      } else {
        points += 2;
      }
    }

    if (!suited) {
      const rankDifference = Math.abs(card1Points - card2Points);
      if (rankDifference === 1 || rankDifference === 0) {
        // Off-Suited and consecutives or Pair get a bonus of 2 points
        points += 2;
      } else {
        points -= 2;
      }
    }
    return points;
  };

  // Calculate the raise amount based on the purse value and custom rules
  const calculateRaiseAmount = (action) => {
    if (action === "RAISE") {
      const raiseMultiplier = raiseMultipliers[playerStyle] || 1;
      const positionMultiplier = positionMultipliers[playerPosition] || 1;

      const playerHandPoints = calculatePoints(playerCards);
      const shouldBetHigh = playerHandPoints > 18;

      // Calculate the raise amount based on the purse value and custom rules
      let calculatedRaiseAmount = Math.ceil(
        purseValue * raiseMultiplier * positionMultiplier
      );

      if (!shouldBetHigh) {
        calculatedRaiseAmount = Math.ceil(calculatedRaiseAmount / 2); // Bet lower if points <= 18
      }

      // Cap the maximum raise amount
      if (playerHandPoints >= 25) {
        calculatedRaiseAmount = Math.min(calculatedRaiseAmount, 100);
      } else if (playerHandPoints === 24 || playerHandPoints === 23) {
        calculatedRaiseAmount = Math.min(calculatedRaiseAmount, 80);
      } else if (playerHandPoints === 22 || playerHandPoints === 21) {
        calculatedRaiseAmount = Math.min(calculatedRaiseAmount, 60);
      } else if (playerHandPoints === 20 || playerHandPoints === 19) {
        calculatedRaiseAmount = Math.min(calculatedRaiseAmount, 50);
      } else if (playerHandPoints === 18) {
        calculatedRaiseAmount = Math.min(calculatedRaiseAmount, 45);
      } else if (
        playerHandPoints === 17 ||
        playerHandPoints === 16 ||
        playerHandPoints === 15
      ) {
        calculatedRaiseAmount = Math.min(calculatedRaiseAmount, 40);
      } else {
        calculatedRaiseAmount = Math.min(calculatedRaiseAmount, 30);
      }

      return calculatedRaiseAmount;
    } else {
      return null;
    }
  };

   const calculatePlayerHandPoints = useCallback((cards) => {
     const points = calculatePoints(cards);
     setPlayerHandPoints(points);
     console.log("Player Hand Points:", points);
   }, []);
   
  // const handlePositionChange = (event) => {
  //   setPlayerPosition(event.target.value);
  // };

  // const handleStyleChange = (event) => {
  //   setPlayerStyle(event.target.value);
  // };

  // const calculatePlayerHandPoints = (cards) => {
  //   const points = calculatePoints(cards);
  //   setPlayerHandPoints(points);
  //   console.log("Line 433", points);
  // };

  useEffect(() => {
    if (decision === "RAISE") {
      const raiseAmount = calculateRaiseAmount("RAISE"); // Assume action is RAISE
      setRaiseAmount(raiseAmount);
      setPurseValue((prevPurseValue) => prevPurseValue - raiseAmount);
      setPotSize((prevPotSize) => prevPotSize + raiseAmount);
    } else {
      setRaiseAmount(null);
      setRaiseCalculation("");
    }
  }, [playerHandPoints, decision]);


  // Handler for generating and processing the hole cards
  const handlePreflopDecision = () => {
    // const [card1, card2] = generateRandomCards();
    // setPlayerCards([card1, card2]);

    // // console.log("Line 441", playerHandPoints);

    // const formattedCards = convertCards(card1, card2);
    // const decision = getPreflopDecision(formattedCards);

    // setDecision(decision);
    // if (decision === "RAISE") {
    //   const raiseAmount = calculateRaiseAmount("RAISE"); // Assume action is RAISE
    //   setRaiseAmount(raiseAmount);
    //   setPurseValue((prevPurseValue) => prevPurseValue - raiseAmount);
    //   setPotSize((prevPotSize) => prevPotSize + raiseAmount);
    // } else {
    //   setRaiseAmount(null);
    //   setRaiseCalculation("");
    // }
    const [card1, card2] = generateRandomCards();
    setPlayerCards([card1, card2]);
    calculatePlayerHandPoints([card1, card2]);

    const formattedCards = convertCards(card1, card2);
    const decision = getPreflopDecision(formattedCards);

    setDecision(decision);
    if (decision === "RAISE") {
      const raiseAmount = calculateRaiseAmount("RAISE"); // Assume action is RAISE
      setRaiseAmount(raiseAmount);
      setPurseValue((prevPurseValue) => prevPurseValue - raiseAmount);
      setPotSize((prevPotSize) => prevPotSize + raiseAmount);
    } else {
      setRaiseAmount(null);
      setRaiseCalculation("");
    }
  };


    // setDecision(decision);
    // if (decision === "RAISE") {
    //   const raiseAmount = calculateRaiseAmount("RAISE", potSize);
    //   setRaiseAmount(raiseAmount);
    //   setPurseValue((prevPurseValue) => prevPurseValue - raiseAmount);
    //   setPotSize((prevPotSize) => prevPotSize + raiseAmount);
    //   const raiseMultiplier = raiseMultipliers[playerStyle] || 1;
    //   const positionMultiplier = positionMultipliers[playerPosition] || 1;
    //   const playerHandPoints = calculatePoints(playerCards);
    //   const shouldBetHigh = playerHandPoints > 18;

    //   let calculationDetails = `Raise Calculation:\n`;
    //   calculationDetails += `Raise Multiplier for ${playerStyle}: ${raiseMultiplier}\n`;
    //   calculationDetails += `Position Multiplier for ${playerPosition}: ${positionMultiplier}\n`;
    //   calculationDetails += `Player Hand Points: ${playerHandPoints}\n`;
    //   calculationDetails += `Should Bet High: ${shouldBetHigh}\n`;
    //   setRaiseCalculation(calculationDetails);
    // } else {
    //   setRaiseAmount(null);
    //   setRaiseCalculation("");
    // }
  // };

  // useEffect(() => {
  //   // Calculate player hand points whenever playerCards change
  //   calculatePlayerHandPoints(playerCards);
  // }, [playerCards, calculatePlayerHandPoints]);
  

  // Perform necessary actions when the playerHandPoints state is updated
  // useEffect(() => {
  //   if (decision === "RAISE") {
  //     const raiseAmount = calculateRaiseAmount(decision);
  //     setRaiseAmount(raiseAmount);
  //     setPurseValue((prevPurseValue) => prevPurseValue - raiseAmount);
  //     setPotSize((prevPotSize) => prevPotSize + raiseAmount);
  //     const raiseMultiplier = raiseMultipliers[playerStyle] || 1;
  //     const positionMultiplier = positionMultipliers[playerPosition] || 1;
  //     const shouldBetHigh = playerHandPoints > 18;

  //     let calculationDetails = `Raise Calculation:\n`;
  //     calculationDetails += `Raise Multiplier for ${playerStyle}: ${raiseMultiplier}\n`;
  //     calculationDetails += `Position Multiplier for ${playerPosition}: ${positionMultiplier}\n`;
  //     calculationDetails += `Player Hand Points: ${playerHandPoints}\n`;
  //     calculationDetails += `Should Bet High: ${shouldBetHigh}\n`;
  //     setRaiseCalculation(calculationDetails);
  //   } else {
  //     setRaiseAmount(null);
  //     setRaiseCalculation("");
  //   }
  // }, [playerHandPoints, decision]);

  useEffect(() => {
    if (decision === "RAISE") {
      const raiseAmount = calculateRaiseAmount("RAISE"); // Assume action is RAISE
      setRaiseAmount(raiseAmount);
      setPurseValue((prevPurseValue) => prevPurseValue - raiseAmount);
      setPotSize((prevPotSize) => prevPotSize + raiseAmount);
      const raiseMultiplier = raiseMultipliers[playerStyle] || 1;
       const positionMultiplier = positionMultipliers[playerPosition] || 1;
       const shouldBetHigh = playerHandPoints > 18;

       let calculationDetails = `Raise Calculation:\n`;
       calculationDetails += `Raise Multiplier for ${playerStyle}: ${raiseMultiplier}\n`;
       calculationDetails += `Position Multiplier for ${playerPosition}: ${positionMultiplier}\n`;
       calculationDetails += `Player Hand Points: ${playerHandPoints}\n`;
       calculationDetails += `Should Bet High: ${shouldBetHigh}\n`;
       setRaiseCalculation(calculationDetails);
    } else {
      setRaiseAmount(null);
      setRaiseCalculation("");
    }
  }, [playerHandPoints, decision]);

  useEffect(() => {
    console.log(
      "Player Hole Cards:",
      convertCards(playerCards[0], playerCards[1])
    );
    console.log(
      "Player Hole Cards with Suits:",
      playerCards[0] + playerCards[1]
    );
    console.log("Position:", playerPosition);
    console.log("Style:", playerStyle);
    console.log("Decision:", decision);
    if (decision === "RAISE") {
      console.log("Raise Amount:", raiseAmount);
    }
    console.log("Purse Value:", purseValue);

    // Log the updated player hand points
    console.log("Player Hand Points:", playerHandPoints);
  }, [
    playerCards,
    playerPosition,
    playerStyle,
    decision,
    raiseAmount,
    purseValue,
    playerHandPoints,
  ]);

  return (
    <div>
      {/* Display player's hole cards in the format "AJo" or "AJs" */}
      <p>Player Hole Cards: {convertCards(playerCards[0], playerCards[1])}</p>

      {/* Display player's hole cards with suits in the format "A♥J♦" or "A♣J♣" */}
      <p>
        Player Hole Cards with Suits: {playerCards[0]}
        {playerCards[1]}
      </p>

      {/* Display the rest of the information */}
      {/* <label>
        Position:
        <select value={playerPosition} onChange={handlePositionChange}>
          <option value="but">Button</option>
          <option value="sb">Small Blind</option>
          <option value="bb">Big Blind</option>
          <option value="lj">Lo Jack</option>
          <option value="hj">High Jack</option>
          <option value="co">Cut OFF</option>
        </select>
      </label>

      <label>
        Style:
        <select value={playerStyle} onChange={handleStyleChange}>
          <option value="tight-passive">Tight Passive</option>
          <option value="loose-passive">Loose Passive</option>
          <option value="tight-aggressive">Tight Aggressive</option>
          <option value="loose-aggressive">Loose Aggressive</option>
        </select>
      </label> */}
      <p>Position: {playerPosition}</p>
      <p>Style: {playerStyle}</p>
      <p>Decision: {decision}</p>
      <p>Player Hand Points: {playerHandPoints}</p>
      <>
        <p>Raise Amount: {raiseAmount}</p>
        <p>Raise Calculation: {raiseCalculation}</p>  
      </>
      <p>Purse Value: {purseValue}</p>
      <p>Pot Size: {potSize}</p>
      <button onClick={handlePreflopDecision}>Generate Hole Cards</button>
    </div>
  );
};

export default PreflopBet1;
