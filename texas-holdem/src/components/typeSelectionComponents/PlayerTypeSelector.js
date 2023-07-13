import "./PlayerTypeSelector.css";
import "../../fonts/orbitron.css";
import { useState } from "react";

export default function PlayerTypeSelector(props) {
    const [playerType, color] = props.box;
    const [count, setCount] = useState(0);
    const dashIndex = playerType.indexOf('-')+1;
    const text1 = playerType.slice(0, dashIndex);
    const text2 = playerType.slice(dashIndex);

    function increament() {
        setCount(count+1);
    }
    function decrement() {
        if(count > 0) {
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