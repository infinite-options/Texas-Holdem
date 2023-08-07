import React, { useState } from 'react';
import HiJackHandChart from '../decisions/HiJackHandChart';
import LoJackHandChart from '../decisions/LoJackHandChart';
import DealerHandChart from '../decisions/DealerHandChart';
import SmallBlindHandChart from '../decisions/SmallBlindHandChart';
import BigBlindHandChart from '../decisions/BigBlindHandChart';
import UnderTheGunHandChart from '../decisions/UnderTheGunHandChart';
import UnderTheGunHandChart1 from '../decisions/UnderTheGunHandChart1';
import UnderTheGunHandChart2 from '../decisions/UnderTheGunHandChart2';
import utgImg from '../../images/UTG.png';
import BtnImg from '../../images/BTN.png';
import LjImg from '../../images/LJ.png';
import Utg1img from '../../images/UTG1.png';
import Utg2img from '../../images/UTG2.png';
import Sbimg from '../../images/SB.png';
import HjImg from '../../images/HJ.png';
import CoImg from '../../images/CO.png';



import CutOffHandChart from '../decisions/CutOffHandChart';
import DealerMatrix from '../matrix/DealerMatrix';
const Deck = () => {
  const [selectedCards, setSelectedCards] = useState([]);

  const getRandomCards = () => {
    // Replace this with your deck of cards data
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


    const shuffledDeck = deckOfCards.sort(() => Math.random() - 0.5);
    const selected = shuffledDeck.slice(0, 2);

    setSelectedCards(selected);
  };

  const renderCards = () => {
    return selectedCards.map((card) => (
      <div
        key={card.id}
        style={{
          border: '1px solid black',
          padding: '10px',
          margin: '10px',
        }}
      >
        {card.name}
      </div>
    ));
  };

  return (
    <div>
      <button onClick={getRandomCards}>Get Cards</button>
      <div>{renderCards()}</div>
      {selectedCards.length > 0 ? (
        <div>
          <h4>Texas Hold'em Poker - Dealer</h4>
          {/* <DealerHandChart hand={selectedCards} /> */}
          {/* <img src={BtnImg} alt="BTN" style={{ width: '400px' }} /> */}
          <DealerMatrix hand={selectedCards}></DealerMatrix>
          <h4>Texas Hold'em Poker - Small Blind</h4>
          <SmallBlindHandChart hand={selectedCards} />
          <img src={Sbimg} alt="SB" style={{ width: '400px' }} />
          <h4>Texas Hold'em Poker - Big Blind</h4>
          <BigBlindHandChart hand={selectedCards} />
          <img src={Sbimg} alt="SB" style={{ width: '400px' }} />
          <h4>Texas Hold'em Poker - UnderTheGun</h4>
          <UnderTheGunHandChart hand={selectedCards} />
          <img src={utgImg} alt="UTG" style={{ width: '400px' }} />
          <h4>Texas Hold'em Poker - UnderTheGun1</h4>
          <UnderTheGunHandChart1 hand={selectedCards} />
          <img src={Utg1img} alt="UTG1" style={{ width: '400px' }} />
          <h4>Texas Hold'em Poker - UnderTheGun2</h4>
          <UnderTheGunHandChart2 hand={selectedCards} />
          <img src={Utg2img} alt="UTG2" style={{ width: '400px' }} />
          <h4>Texas Hold'em Poker - HiJack</h4>
          <HiJackHandChart hand={selectedCards} />
          <img src={HjImg} alt="HJ" style={{ width: '400px' }} />
          <h4>Texas Hold'em Poker - LoJack</h4>
          <LoJackHandChart hand={selectedCards} />
          <img src={LjImg} alt="LJ" style={{ width: '400px' }} />
          <h4>Texas Hold'em Poker - CutOff</h4>
          <CutOffHandChart hand={selectedCards} />
          <img src={CoImg} alt="CO" style={{ width: '400px' }} />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Deck;
