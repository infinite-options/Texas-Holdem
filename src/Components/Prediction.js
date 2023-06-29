import { useEffect, useState } from "react";
import Table from "./Table/Table";

export default function Prediction(props) {
    const [action, setAction] = useState("");
    const hands = props.hands[0];
    const position_title = props.position[0];
    const position = props.position[1];

    useEffect(()=>{
        const prediction = position.get(hands);
        setAction(()=> prediction ? "Raise" : "Fold");
    },[hands, position]);    

    return(
        <div>
            <h2>{position_title}</h2>
            <p>Action: {action}</p>
            <Table 
                table={[position_title, position]}
            />
            
        </div>
    );
};