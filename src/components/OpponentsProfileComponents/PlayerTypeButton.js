import { useState } from "react";
import "./OpponentsProfile.css";

export default function PlayerTypeButton(props) {
    const playerType = getContents(props.type);
    function getContents(type) {
        if(type===undefined) {
            return <></>;
        }
        const dashIndex = type.indexOf('-');
        if(dashIndex === -1) {
            return <div>type</div>;
        }
        const line1 = type.slice(0, dashIndex+1);
        const line2 = type.slice(dashIndex+1);
        return <>
            <div>{line1}</div>
            <div>{line2}</div>
        </>
            
    }
    const [isPressing, setIsPressing] = useState(false);

    return(
        <div className="playerType-container">
            <div className={`playerType-button${isPressing ? "-pressed" : ""}`} onMouseDown={()=>{console.log("Pressed"); setIsPressing(true);}} onMouseUp={()=>setIsPressing(false)}>
                {!isPressing ? 
                <>
                    <div>
                        Reveal
                    </div>
                    <div>
                        Player’s
                    </div>
                    <div>
                        style
                    </div>
                </>
                :
                <>
                    {playerType}
                </>
                }
                
            </div>
        </div>
    );
}