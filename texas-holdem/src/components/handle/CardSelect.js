import { useState } from "react";
import { SUIT, getRankIndex } from "../preset/Preset";

export default function CardSelect(props) {
    const [setHands] = props.hands
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
      const hand = shuffledDeck.slice(0, 2);
      setSelectedCards(hand);
      const card1 = hand[0].name.charAt(0);
      const card2 = hand[1].name.charAt(0);
      const suit = hand[0].name.charAt(1) === hand[1].name.charAt(0) ? SUIT.SUIT : SUIT.OFFSUIT;

      const handKey = getRankIndex(card1) < getRankIndex(card2) ? card1+card2+suit : card2+card1+suit;      
      
      setHands(handKey);
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
    
    return(
        <div>
            <button onClick={getRandomCards}>Get Cards</button>
            <div>{renderCards()}</div>
        </div>
    );
}
    
  