import React from "react";

function UnderTheGunHandChart1({ hand }) {
  const handChart = {
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
    A3s: "FOLD",
    A2s: "FOLD",
    AKo: "RAISE",
    KKo: "RAISE",
    KQs: "RAISE",
    KJs: "RAISE",
    KTs: "RAISE",
    K9s: "RAISE",
    K8s: "FOLD",
    K7s: "FOLD",
    K6s: "FOLD",
    K5s: "FOLD",
    K4s: "FOLD",
    K3s: "FOLD",
    K2s: "FOLD",
    AQo: "RAISE",
    KQo: "RAISE",
    QQo: "RAISE",
    QJs: "RAISE",
    QTs: "RAISE",
    Q9s: "RAISE",
    Q8s: "FOLD",
    Q7s: "FOLD",
    Q6s: "FOLD",
    Q5s: "FOLD",
    Q4s: "FOLD",
    Q3s: "FOLD",
    Q2s: "FOLD",
    AJo: "RAISE",
    KJo: "FOLD",
    QJo: "FOLD",
    JJo: "RAISE",
    JTs: "RAISE",
    J9s: "RAISE",
    J8s: "FOLD",
    J7s: "FOLD",
    J6s: "FOLD",
    J5s: "FOLD",
    J4s: "FOLD",
    J3s: "FOLD",
    J2s: "FOLD",
    ATo: "FOLD",
    KTo: "FOLD",
    QTo: "FOLD",
    JTo: "FOLD",
    TTo: "RAISE",
    T9s: "RAISE",
    T8s: "FOLD",
    T7s: "FOLD",
    T6s: "FOLD",
    T5s: "FOLD",
    T4s: "FOLD",
    T3s: "FOLD",
    T2s: "FOLD",
    A9o: "FOLD",
    K9o: "FOLD",
    Q9o: "FOLD",
    J9o: "FOLD",
    T9o: "FOLD",
    "99o": "RAISE",
    "98s": "RAISE",
    "97s": "FOLD",
    "96s": "FOLD",
    "95s": "FOLD",
    "94s": "FOLD",
    "93s": "FOLD",
    "92s": "FOLD",
    A8o: "FOLD",
    K8o: "FOLD",
    Q8o: "FOLD",
    J8o: "FOLD",
    T8o: "FOLD",
    "98o": "FOLD",
    "88o": "RAISE",
    "87s": "RAISE",
    "86s": "FOLD",
    "85s": "FOLD",
    "84s": "FOLD",
    "83s": "FOLD",
    "82s": "FOLD",
    A7o: "FOLD",
    K7o: "FOLD",
    Q7o: "FOLD",
    J7o: "FOLD",
    T7o: "FOLD",
    "97o": "FOLD",
    "87o": "FOLD",
    "77o": "RAISE",
    "76s": "FOLD",
    "75s": "FOLD",
    "74s": "FOLD",
    "73s": "FOLD",
    "72s": "FOLD",
    A6o: "FOLD",
    K6o: "FOLD",
    Q6o: "FOLD",
    J6o: "FOLD",
    T6o: "FOLD",
    "96o": "FOLD",
    "86o": "FOLD",
    "76o": "FOLD",
    "66o": "RAISE",
    "65s": "FOLD",
    "64s": "FOLD",
    "63s": "FOLD",
    "62s": "FOLD",
    A5o: "FOLD",
    K5o: "FOLD",
    Q5o: "FOLD",
    J5o: "FOLD",
    T5o: "FOLD",
    "95o": "FOLD",
    "85o": "FOLD",
    "75o": "FOLD",
    "65o": "FOLD",
    "55o": "FOLD",
    "54s": "FOLD",
    "53s": "FOLD",
    "52s": "FOLD",
    A4o: "FOLD",
    K4o: "FOLD",
    Q4o: "FOLD",
    J4o: "FOLD",
    T4o: "FOLD",
    "94o": "FOLD",
    "84o": "FOLD",
    "74o": "FOLD",
    "64o": "FOLD",
    "54o": "FOLD",
    "44o": "FOLD",
    "43s": "FOLD",
    "42s": "FOLD",
    A3o: "FOLD",
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
    "33o": "FOLD",
    "32s": "FOLD",
    A2o: "FOLD",
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
    "22o": "FOLD",
  };

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

export default UnderTheGunHandChart1;
