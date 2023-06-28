import { useEffect, useState } from "react";
//import Table from "./Table/Table";

export default function Prediction(props) {
    const [recommendation, setRecommendation] = useState("");
    const hands = props.hands[0];
    const position_title = props.position[0];
    const position = props.position[1];
    useEffect(()=>{
        const prediction = position.get(hands);
        setRecommendation(()=> prediction ? "Raise" : "Fold");
    },[hands, position]);    

    return(
        <div>
            <h2>{position_title}</h2>
            <p>Recommendation: {recommendation}</p>
            {   
            console.log(position_title+": " + JSON.stringify(Object.fromEntries(position)))
            /*            
                <Table 
                    table={position}
                />*/
            }
            
        </div>
    );
};