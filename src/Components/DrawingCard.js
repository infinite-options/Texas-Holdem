import { useState } from 'react';
import { ranks } from '../Engine/Card';
import {getIndexOfRank} from "../Engine/KeySelection";

export default function DrawingCard(props) {
    const [hands, setHands] = props.hands;
    const [message, setMessage] = useState("No hands. Please draw cards.")

    function orderByRank(card1, card2) {
        return getIndexOfRank(card1) < getIndexOfRank(card2) ? card1+card2 : card2+card1 ;
    }

    const drawRandomCards = () => {
        let key = "";
        const firstCard = ranks[Math.floor(Math.random() * ranks.length)];
        const secondCard = ranks[Math.floor(Math.random() * ranks.length)];
        const suit = Math.random() < 0.5 ? "s" : "o";
        if(firstCard === secondCard) {
            key = firstCard+secondCard;
        } else {
            key = orderByRank(firstCard, secondCard)+suit;
        }
        setHands(key);
    }

    function checkInputAvailability(input) {
        let available = false;
        for (let i = 0; i < ranks.length; i++) {
            if(input === ranks[i]) {
                available = true;
            }            
        }
        return available;
    }

    const handleSubmit = (e) => {
        // Prevent the browser from reloading the page
        e.preventDefault();

        // Read the form data
        const form = e.target;
        const formData = new FormData(form);

        const formJson = Object.fromEntries(formData.entries());
        //console.log(formJson);
        const firstCard = formJson.firstCard;
        const secondCard = formJson.secondCard;
        const suit = formJson.suit;
        if(checkInputAvailability(firstCard) && checkInputAvailability(secondCard)) {
            if(firstCard === secondCard) {
                setHands(firstCard+secondCard);
            } else {
                let suit_c = suit ? 's' : 'o';
                setHands(orderByRank(firstCard, secondCard)+suit_c);
            }
        } else {
            setMessage("Invaild input. Retype the maunal cards setting.");
            setHands("");
        }
    };

    return(
        <div>
            <h2>Draw 2 hole cards</h2>
            <div>
                <button onClick={drawRandomCards}>
                    Draw Random
                </button>
            </div>
            <br/>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>
                            First Card: <input name="firstCard" />
                        </label>
                        <br/>
                        <label>
                            Second Card: <input name="secondCard" />
                        </label>
                        <br/>
                        <label>
                            Suit <input type="checkbox" name="suit" />
                        </label>
                    </div>               
                    <button type='submit'>
                        Draw Maunally
                    </button>
                </form>                
            </div>            
            <h3>My Hands</h3>
            <p>{hands !== "" ? hands : message}</p>
        </div>
    );
}