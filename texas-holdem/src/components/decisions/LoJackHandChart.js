import React from 'react';

function LoJackHandChart({ hand }) {

  const handChart = {
    'AA': 'RAISE', 'AKs': 'RAISE', 'AQs': 'RAISE', 'AJs': 'RAISE',
    'ATs': 'RAISE', 'A9s': 'RAISE', 'A8s': 'RAISE', 'A7s': 'RAISE',
    'A6s': 'RAISE', 'A5s': 'RAISE', 'A4s': 'RAISE', 'A3s': 'RAISE',
    'A2s': 'RAISE', 'AKo': 'RAISE', 'KK': 'RAISE', 'KQs': 'RAISE',
    'KJs': 'RAISE', 'KTs': 'RAISE', 'K9s': 'RAISE', 'AQo': 'RAISE',
    'KQo': 'RAISE', 'QQ': 'RAISE', 'QJs': 'RAISE', 'QTs': 'RAISE',
    'Q9s': 'RAISE', 'AJo': 'RAISE', 'JJ': 'RAISE', 'JTs': 'RAISE',
    'J9s': 'RAISE', 'TT': 'RAISE', 'T9s': 'RAISE', '99': 'RAISE',
    '98s': 'RAISE', '88': 'RAISE', '87s': 'RAISE', '77': 'RAISE',
    '76s': 'RAISE', '66': 'RAISE', '55': 'RAISE',
    
  };

  let card1 = hand[0].name
  let card2 = hand[1].name

  let combination = card1.charAt(0)+card2.charAt(0)

  // if(card1.charAt(1)==card2.charAt(1)){
  //   combination = combination+"s"
  // }else{
  //   combination = combination+"o"
  // }
  console.log("combination "+combination)

  const action = handChart[combination];

  return (
    <div>

      {/* <p>Hand: {hand}</p> */}

      {console.log(action)}
      {action!=undefined && <p>Action: {action}</p>}
      {action==undefined && <p>Action: FOLD</p>}
      
    </div>
  );
}

export default LoJackHandChart;

