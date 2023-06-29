import DrawingCard from "../Components/DrawingCard";
import Prediction from "../Components/Prediction";
import { useState } from "react";
import UTG from "../Engine/UTG";
import UTGp1 from "../Engine/UTGp1";
import UTGp2 from "../Engine/UTGp2";
import Lojack from "../Engine/Lojack";
import Hijack from "../Engine/Hijack";
import Cutoff from "../Engine/Cutoff";
import Button from "../Engine/Button";

export default function Main() {
    const [hands, setHands] = useState();
    const [utg] = useState(UTG);
    const [utgp1] = useState(UTGp1);
    const [utgp2] = useState(UTGp2);
    const [lojack] = useState(Lojack);
    const [hijack] = useState(Hijack);
    const [cutoff] = useState(Cutoff);
    const [button] = useState(Button);

    
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
                    position={["UTG+1", utgp1]}
                />
                <Prediction 
                    hands={[hands, setHands]}
                    position={["UTG+2", utgp2]}
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