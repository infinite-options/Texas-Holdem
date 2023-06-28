import DrawingCard from "../Components/DrawingCard";
import Prediction from "../Components/Prediction";
import { useState } from "react";
import utg from "../Engine/UTG";
import UTGp1 from "../Engine/UTGp1";
import UTGp2 from "../Engine/UTGp2";
import lojack from "../Engine/Lojack";
import hijack from "../Engine/Hijack";
import cutoff from "../Engine/Cutoff";
import button from "../Engine/Button";

export default function Main() {
    const [hands, setHands] = useState();
    
    return (
        <>
            <h1>Texas Hold'em</h1>
            <div>
                <DrawingCard 
                    hands={[hands, setHands]}
                />
                <hr/>
                <Prediction 
                    hands={[hands, setHands]}
                    position={["UTG", utg]}
                />
                <Prediction 
                    hands={[hands, setHands]}
                    position={["UTG+1", UTGp1]}
                />
                <Prediction 
                    hands={[hands, setHands]}
                    position={["UTG+2", UTGp2]}
                />
                <Prediction 
                    hands={[hands, setHands]}
                    position={["Lojack", lojack]}
                />
                <Prediction 
                    hands={[hands, setHands]}
                    position={["Hijack", hijack]}
                />
                <Prediction 
                    hands={[hands, setHands]}
                    position={["Cutoff", cutoff]}
                />
                <Prediction 
                    hands={[hands, setHands]}
                    position={["Button", button]}
                />
            </div>
            
        </>
    );
}