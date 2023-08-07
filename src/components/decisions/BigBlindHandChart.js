import React from 'react';

function BigBlindHandChart({ hand }) {
  
  const handChart = {
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
    "32o": "FOLD"
  };

  // const handChart = {
  //   AA: "RAISE",
  //   AK: "RAISE",
  //   AQ: "RAISE",
  //   KA: "RAISE",
  //   KK: "RAISE",
  //   KQ: "CALL",
  //   QA: "FOLD",
  //   QK: "FOLD",
  //   QQ: "RAISE",
  // };

  //   console.log("hand " + hand);
  //   let card1 = hand[0].name;
  //   let card2 = hand[1].name;
  //   console.log("card1 " + card1.charAt(0));
  //   console.log("card1 " + card1.charAt(1));
  //   console.log("card2 " + card2.charAt(0));
  //   console.log("card2 " + card2.charAt(1));

  //   let combination = card1.charAt(0) + card2.charAt(0);

  //   if(card1.charAt(1)===card2.charAt(1)){
  //     combination = combination+"s"
  //   }else{
  //     combination = combination+"o"
  //   }
  //   console.log("combination "+combination)
  //   const action = handChart[combination];

  //   return (
  //     <div>
  //       {action !== undefined && <p>Action: {action}</p>}
  //       {action === undefined && <p>Action: FOLD</p>}
  //     </div>
  //   );
  // }

  // export default BigBlindHandChart;

const card1 = hand[0].name;
const card2 = hand[1].name;
const priorityOrder = {
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

const card1Rank = card1.charAt(0);
const card2Rank = card2.charAt(0);

let higherRankCard, lowerRankCard;

if (priorityOrder[card1Rank] > priorityOrder[card2Rank]) {
  higherRankCard = card1Rank;
  lowerRankCard = card2Rank;
} else if (priorityOrder[card2Rank] > priorityOrder[card1Rank]) {
  higherRankCard = card2Rank;
  lowerRankCard = card1Rank;
} else {
  // Handle the case when both cards have the same rank
  higherRankCard = card1Rank;
  lowerRankCard = card2Rank;
}

const combination =
  higherRankCard +
  lowerRankCard +
  (card1.charAt(1) === card2.charAt(1) ? "s" : "o");

console.log("combination:", combination);

const action = handChart[combination] || "FOLD";
console.log("action:", action);



  return (
    <div>
      <p>Action: {action}</p>
    </div>
  );
}

export default BigBlindHandChart;