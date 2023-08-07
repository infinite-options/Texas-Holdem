import React, { useState } from 'react';
// import HiJackHandChart from '../decisions/HiJackHandChart';
// import LoJackHandChart from '../decisions/LoJackHandChart';
// import DealerHandChart from '../decisions/DealerHandChart';
// import SmallBlindHandChart from '../decisions/SmallBlindHandChart';
// import BigBlindHandChart from '../decisions/BigBlindHandChart';
// import UnderTheGunHandChart from '../decisions/UnderTheGunHandChart';
// import UnderTheGunHandChart1 from '../decisions/UnderTheGunHandChart1';
// import UnderTheGunHandChart2 from '../decisions/UnderTheGunHandChart2';
import utgImg from '../../images/UTG.png';
import BtnImg from '../../images/BTN.png';
import LjImg from '../../images/LJ.png';
import Utg1img from '../../images/UTG1.png';
import Utg2img from '../../images/UTG2.png';
import Sbimg from '../../images/SB.png';
import HjImg from '../../images/HJ.png';
import CoImg from '../../images/CO.png';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Table1 from './Table1';



// import CutOffHandChart from '../decisions/CutOffHandChart';
import DealerMatrix from '../matrix/DealerMatrix';
import SmallBlindMatrix from '../matrix/SmallBlindMatrix';
import BigBlindMatrix from '../matrix/BigBlindMatrix';
import UnderTheGunMatrix from '../matrix/UnderTheGunMatrix';
import LowJackMatrixMatrix from '../matrix/LowJackMatrix';
import HighJackMatrix from '../matrix/HighJackMatrix';
import CutOffMatrix from '../matrix/CutOffMatrix';
// import PreflopTable from './PreflopTable';



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

const positions = [
  "Dealer",
  "Small Blind",
  "Big Blind",
  "UTG",
  "Low Jack",
  "High Jack",
  "Cut Off",
];


const PokerDeck = (props) => {
  const [fetchData] = props.data;
  // const [position, setPosition] = useState(0);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [selectedD, setSelectedD] = useState([]);
  const [selectedSB, setSelectedSB] = useState([]);
  const [selectedBB, setSelectedBB] = useState([]);
  const [selectedUTG, setSelectedUTG] = useState([]);
  const [selectedLJ, setSelectedLJ] = useState([]);
  const [selectedHJ, setSelectedHJ] = useState([]);
  const [selectedCO, setSelectedCO] = useState([]);

  const shuffledDeck = deckOfCards.sort(() => Math.random() - 0.5);

  const getRandomCards = (start, end) => {
    const selected = shuffledDeck.slice(start, end);
    return selected;
  };
//   const [data, setData] = useState([]);

  // const setSelectedCards = () => {
  //   const shuffledDeck = deckOfCards.sort(() => Math.random() - 0.5);
  //   console.log(shuffledDeck);
  //   setCards({
  //     dealerCards: shuffledDeck.slice(0, 2),
  //     smallBlindCards: shuffledDeck.slice(2, 4),
  //     bigBlindCards: shuffledDeck.slice(4, 6),
  //     utgCards: shuffledDeck.slice(6, 8),
  //     lowJackCards: shuffledDeck.slice(8, 10),
  //     highJackCards: shuffledDeck.slice(10, 12),
  //     cutOffCards: shuffledDeck.slice(12, 14),
  //     dealt: true,
  //   });
  // };

  // const handleGoButtonClick = () => {
  //   setPosition((position + 1) % positions.length);
  const handleGoButtonClick = () => {
    // setCurrentPosition((currentPosition + 1) % positions.length);
     setCurrentPosition(
       (currentPosition + positions.length - 1) % positions.length
     );

    const updatedPositions = [
      ...positions.slice(currentPosition + 1),
      ...positions.slice(0, currentPosition + 1),
    ];

    // Get random cards for each player based on their new position
    setSelectedD(getRandomCards(0, 2));
    setSelectedSB(getRandomCards(2, 4));
    setSelectedBB(getRandomCards(4, 6));
    setSelectedUTG(getRandomCards(6, 8));
    setSelectedLJ(getRandomCards(8, 10));
    setSelectedHJ(getRandomCards(10, 12));
    setSelectedCO(getRandomCards(12, 14));
  };

  //   return (
  //     <div>
  //       <button onClick={handleGoButtonClick}>Go</button>
  //       <div>
  //         <Container fluid>
  //           <Row>
  //             <Col>
  //               <button onClick={getRandomCardsD}>Dealer</button>
  //               {selectedD.length > 0 ? (
  //                 <div>
  //                   <h4>Dealer</h4>
  //                   <DealerMatrix
  //                     position={"dealer"}
  //                     hand={selectedD}></DealerMatrix>
  //                   <div>
  //                     <h5>
  //                       Hand: {selectedD[0].name}
  //                       {selectedD[0].suit} {selectedD[1].name}
  //                       {selectedD[1].suit}
  //                     </h5>
  //                   </div>
  //                   <div>
  //                     <img src={BtnImg} alt="BTN" style={{ width: "400px" }} />
  //                   </div>
  //                 </div>
  //               ) : (
  //                 <div></div>
  //               )}
  //             </Col>
  //             <Col>
  //               <button onClick={getRandomCardsSB}>Small Blind</button>
  //               {selectedSB.length > 0 ? (
  //                 <div>
  //                   <h4>Small Blind</h4>
  //                   <SmallBlindMatrix
  //                     position={"small-blind"}
  //                     hand={selectedSB}></SmallBlindMatrix>
  //                   <div>
  //                     <h5>
  //                       Hand: {selectedSB[0].name}
  //                       {selectedSB[0].suit} {selectedSB[1].name}
  //                       {selectedSB[1].suit}
  //                     </h5>
  //                   </div>
  //                   <div>
  //                     <img src={Sbimg} alt="SB" style={{ width: "400px" }} />
  //                   </div>
  //                 </div>
  //               ) : (
  //                 <div></div>
  //               )}
  //             </Col>
  //             <Col>
  //               <button onClick={getRandomCardsBB}>Big Blind</button>
  //               {selectedBB.length > 0 ? (
  //                 <div>
  //                   <h4>Big Blind</h4>
  //                   <BigBlindMatrix
  //                     position={"big-blind"}
  //                     hand={selectedBB}></BigBlindMatrix>
  //                   <div>
  //                     <h5>
  //                       Hand: {selectedBB[0].name}
  //                       {selectedBB[0].suit} {selectedBB[1].name}
  //                       {selectedBB[1].suit}
  //                     </h5>
  //                   </div>
  //                   <div>
  //                     <img src={Sbimg} alt="SB" style={{ width: "400px" }} />
  //                   </div>
  //                 </div>
  //               ) : (
  //                 <div></div>
  //               )}
  //             </Col>
  //             <Col>
  //               <button onClick={getRandomCardsUTG}>UTG</button>
  //               {selectedUTG.length > 0 ? (
  //                 <div>
  //                   <h4>UTG</h4>
  //                   <UnderTheGunMatrix
  //                     position={"UTG"}
  //                     hand={selectedUTG}></UnderTheGunMatrix>
  //                   <div>
  //                     <h5>
  //                       Hand: {selectedUTG[0].name}
  //                       {selectedUTG[0].suit} {selectedUTG[1].name}
  //                       {selectedUTG[1].suit}
  //                     </h5>
  //                   </div>
  //                   <div>
  //                     <img src={utgImg} alt="UTG" style={{ width: "400px" }} />
  //                   </div>
  //                 </div>
  //               ) : (
  //                 <div></div>
  //               )}
  //             </Col>
  //             <Col>
  //               <button onClick={getRandomCardsLJ}>Low Jack</button>
  //               {selectedLJ.length > 0 ? (
  //                 <div>
  //                   <h4>Low Jack</h4>
  //                   <LowJackMatrixMatrix
  //                     position={"low-jack"}
  //                     hand={selectedLJ}></LowJackMatrixMatrix>
  //                   <div>
  //                     <h5>
  //                       Hand: {selectedLJ[0].name}
  //                       {selectedLJ[0].suit} {selectedLJ[1].name}
  //                       {selectedLJ[1].suit}
  //                     </h5>
  //                   </div>
  //                   <div>
  //                     <img src={LjImg} alt="LJ" style={{ width: "400px" }} />
  //                   </div>
  //                 </div>
  //               ) : (
  //                 <div></div>
  //               )}
  //             </Col>
  //             <Col>
  //               <button onClick={getRandomCardsHJ}>High Jack</button>
  //               {selectedHJ.length > 0 ? (
  //                 <div>
  //                   <h4>High Jack</h4>
  //                   <HighJackMatrix
  //                     position={"high-jack"}
  //                     hand={selectedHJ}></HighJackMatrix>
  //                   <div>
  //                     <h5>
  //                       Hand: {selectedHJ[0].name}
  //                       {selectedHJ[0].suit} {selectedHJ[1].name}
  //                       {selectedHJ[1].suit}
  //                     </h5>
  //                   </div>
  //                   <div>
  //                     <img src={HjImg} alt="HJ" style={{ width: "400px" }} />
  //                   </div>
  //                 </div>
  //               ) : (
  //                 <div></div>
  //               )}
  //             </Col>
  //             <Col>
  //               <button onClick={getRandomCardsCO}>Cut Off</button>
  //               {selectedCO.length > 0 ? (
  //                 <div>
  //                   <h4>Cut Off</h4>
  //                   <CutOffMatrix
  //                     position={" "}
  //                     hand={selectedCO}></CutOffMatrix>
  //                   <div>
  //                     <h5>
  //                       Hand: {selectedCO[0].name}
  //                       {selectedCO[0].suit} {selectedCO[1].name}
  //                       {selectedCO[1].suit}
  //                     </h5>
  //                   </div>
  //                   <div>
  //                     <PreflopTable></PreflopTable>
  //                   </div>
  //                 </div>
  //               ) : (
  //                 <div></div>
  //               )}
  //             </Col>
  //           </Row>
  //         </Container>
  //       </div>
  //     </div>
  //   );
  // };

  //   return (
  //     <div>
  //       <button onClick={handleGoButtonClick}>Go</button>
  //       <div style={{ display: "flex", justifyContent: "center" }}>
  //         {positions.map((pos, index) => (
  //           <div key={index} style={{ textAlign: "center", margin: "0 10px" }}>
  //             <h4>{pos}</h4>
  //             {pos === "Dealer" && selectedD.length > 0 && (
  //               <>
  //                 <DealerMatrix position={pos} hand={selectedD} />
  //                 <div>
  //                   <h5>
  //                     Hand: {selectedD[0].name}
  //                     {selectedD[0].suit} {selectedD[1].name}
  //                     {selectedD[1].suit}
  //                   </h5>
  //                 </div>
  //               </>
  //             )}
  //             {pos === "Small Blind" && selectedSB.length > 0 && (
  //               <>
  //                 <SmallBlindMatrix position={pos} hand={selectedSB} />
  //                 <div>
  //                   <h5>
  //                     Hand: {selectedSB[0].name}
  //                     {selectedSB[0].suit} {selectedSB[1].name}
  //                     {selectedSB[1].suit}
  //                   </h5>
  //                 </div>
  //               </>
  //             )}
  //             {pos === "Big Blind" && selectedBB.length > 0 && (
  //               <>
  //                 <BigBlindMatrix position={pos} hand={selectedBB} />
  //                 <div>
  //                   <h5>
  //                     Hand: {selectedBB[0].name}
  //                     {selectedBB[0].suit} {selectedBB[1].name}
  //                     {selectedBB[1].suit}
  //                   </h5>
  //                 </div>
  //               </>
  //             )}
  //             {pos === "UTG" && selectedUTG.length > 0 && (
  //               <>
  //                 <UnderTheGunMatrix position={pos} hand={selectedUTG} />
  //                 <div>
  //                   <h5>
  //                     Hand: {selectedUTG[0].name}
  //                     {selectedUTG[0].suit} {selectedUTG[1].name}
  //                     {selectedUTG[1].suit}
  //                   </h5>
  //                 </div>
  //               </>
  //             )}
  //             {pos === "Low Jack" && selectedLJ.length > 0 && (
  //               <>
  //                 <LowJackMatrixMatrix position={pos} hand={selectedLJ} />
  //                 <div>
  //                   <h5>
  //                     Hand: {selectedLJ[0].name}
  //                     {selectedLJ[0].suit} {selectedLJ[1].name}
  //                     {selectedLJ[1].suit}
  //                   </h5>
  //                 </div>
  //               </>
  //             )}
  //             {pos === "High Jack" && selectedHJ.length > 0 && (
  //               <>
  //                 <HighJackMatrix position={pos} hand={selectedHJ} />
  //                 <div>
  //                   <h5>
  //                     Hand: {selectedHJ[0].name}
  //                     {selectedHJ[0].suit} {selectedHJ[1].name}
  //                     {selectedHJ[1].suit}
  //                   </h5>
  //                 </div>
  //               </>
  //             )}
  //             {pos === "Cut Off" && selectedCO.length > 0 && (
  //               <>
  //                 <CutOffMatrix position={pos} hand={selectedCO} />
  //                 <div>
  //                   <h5>
  //                     Hand: {selectedCO[0].name}
  //                     {selectedCO[0].suit} {selectedCO[1].name}
  //                     {selectedCO[1].suit}
  //                   </h5>
  //                 </div>
  //                 <div>
  //                   <PreflopTable></PreflopTable>
  //                 </div>
  //               </>
  //             )}
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   );
  // };

  const getPlayerPosition = (index) => {
    const updatedPositions = [
      "Dealer",
      "Small Blind",
      "Big Blind",
      "UTG",
      "Low Jack",
      "High Jack",
      "Cut Off",
    ];
    const offset = (currentPosition + index) % positions.length;
    return updatedPositions[offset];
  };

  return (
    <div>
      <button onClick={handleGoButtonClick}>DEAL</button>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {[0, 1, 2, 3, 4, 5, 6].map((index) => {
          const pos = getPlayerPosition(index);
          let playerComponent;
          let selectedHand;
          switch (pos) {
            case "Dealer":
              playerComponent = DealerMatrix;
              selectedHand = selectedD;
              break;
            case "Small Blind":
              playerComponent = SmallBlindMatrix;
              selectedHand = selectedSB;
              break;
            case "Big Blind":
              playerComponent = BigBlindMatrix;
              selectedHand = selectedBB;
              break;
            case "UTG":
              playerComponent = UnderTheGunMatrix;
              selectedHand = selectedUTG;
              break;
            case "Low Jack":
              playerComponent = LowJackMatrixMatrix;
              selectedHand = selectedLJ;
              break;
            case "High Jack":
              playerComponent = HighJackMatrix;
              selectedHand = selectedHJ;
              break;
            case "Cut Off":
              playerComponent = CutOffMatrix;
              selectedHand = selectedCO;
              break;
            default:
              return null;
          }
          const PlayerMatrixComponent = playerComponent;
          return (
            <div key={index} style={{ textAlign: "center", margin: "0 10px" }}>
              <h4>{pos}</h4>
              {selectedHand.length > 0 && (
                <>
                  <PlayerMatrixComponent position={pos} hand={selectedHand} data={fetchData}/>
                  <div>
                    <h5>
                      Hand: {selectedHand[0].name}
                      {selectedHand[0].suit} {selectedHand[1].name}
                      {selectedHand[1].suit}
                    </h5>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PokerDeck;
