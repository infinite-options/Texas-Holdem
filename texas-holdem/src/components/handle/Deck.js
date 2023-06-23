import React, { useState } from 'react';
import HiJackHandChart from '../decisions/HiJackHandChart';
import LoJackHandChart from '../decisions/LoJackHandChart';
import DealerHandChart from '../decisions/DealerHandChart';
import SmallBlindHandChart from '../decisions/SmallBlindHandChart';
import BigBlindHandChart from '../decisions/BigBlindHandChart';

const Deck = () => {
  const [selectedCards, setSelectedCards] = useState([]);

  const getRandomCards = () => {
    // Replace this with your deck of cards data
    const deckOfCards = [
      { id: 1, name: 'A♥' },
      { id: 2, name: 'A♦' },
      { id: 3, name: 'A♣' },
      { id: 4, name: 'A♠' },
      { id: 5, name: 'K♥' },
      { id: 6, name: 'K♦' },
      { id: 7, name: 'K♣' },
      { id: 8, name: 'K♠' },
      { id: 9, name: 'Q♥' },
      { id: 10, name: 'Q♦' },
      { id: 11, name: 'Q♣' },
      { id: 12, name: 'Q♠' },
      { id: 13, name: 'J♥' },
      { id: 14, name: 'J♦' },
      { id: 15, name: 'J♣' },
      { id: 16, name: 'J♠' },
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
      {selectedCards.length>0?(<div>
        <h4>Texas Hold'em Poker - Dealer</h4>
      <DealerHandChart hand={selectedCards} />
      <h4>Texas Hold'em Poker - Small Blind</h4>
      <SmallBlindHandChart hand={selectedCards} />
      <h4>Texas Hold'em Poker - Big Blind</h4>
      <BigBlindHandChart hand={selectedCards} />
      <h4>Texas Hold'em Poker - HiJack</h4>
      <HiJackHandChart hand={selectedCards} />
      <h4>Texas Hold'em Poker - LoJack</h4>
      <LoJackHandChart hand={selectedCards} />

      </div>):(<div></div>)}
      </div>
  );
};

export default Deck;
