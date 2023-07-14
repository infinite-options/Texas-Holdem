import "./PlayerTypeSelector.css";
import "../../fonts/orbitron.css";
import { useState } from "react";

export default function PlayerTypeSelector(props) {
    const [playerType, color] = props.box;
    const output = props.output;
    const [count, setCount] = useState(0);
    const dashIndex = playerType.indexOf('-')+1;
    const text1 = playerType.slice(0, dashIndex);
    const text2 = playerType.slice(dashIndex);

    function updateOutput(count) {
        switch (playerType) {
            case "Tight-aggressive":
                output.tightAggressive = count;
                break;
            case "Loose-aggressive":
                output.looseAggressive = count;
                break;
            case "Tight-passive":
                output.tightPassive = count;
                break;
            case "Loose-passive":
                output.loosePassive = count;
                break;
            default:
                break;
        }
    }

    function isCountIncrementable() {
        const max = 5;
        const num = output.tightAggressive + output.looseAggressive + output.tightPassive + output.loosePassive;
        return num < max;
    }

    function increament() {
        if(isCountIncrementable()) {
            updateOutput(count+1);
            setCount(count+1);
        }
    }
    function decrement() {
        if(count > 0) {
            updateOutput(count-1);
            setCount(count-1);
        }
    }
    return(
        <div className="flex-container">
            <div className="poker-900-weight-font" >
                <div className="type-box" style={{"background-color": color}}>
                    <div>
                        {text1}
                    </div>
                    <div>
                        {text2}
                    </div>
                </div>
            </div>
            <div className="flex-reverse-container">
                <button className="type-button" onClick={()=>increament()}>+</button>
                <div className="count-display">{count}</div>
                <button className="type-button" onClick={()=>decrement()}>-</button>
            </div>
        </div>
    );
}