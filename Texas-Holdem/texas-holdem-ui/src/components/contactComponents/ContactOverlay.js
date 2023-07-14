import "./Contact.css";
import "../../fonts/orbitron.css";
export default function ContactOverlay(props) {
    const [playerName, setPlayerType, i] = props.data;
    const closeOverlay = props.close;
    function updatePlayerType(newPlayerType) {
        setPlayerType(i, newPlayerType);
        closeOverlay();
    }
    return(
        <div className="overlay-container">
            <div className="poker-900-weight-font">
                <div className="overlay-title">
                    <div>
                        Choose {playerName}'s
                    </div>
                    <div>
                        style
                    </div>
                </div>
                <div className="overlay-box" style={{backgroundColor: "#E28D7E"}} onClick={()=>updatePlayerType("Tight-passive")}>
                    Tight-passive
                </div>
                <div className="overlay-box" style={{backgroundColor: "#84827F"}} onClick={()=>updatePlayerType("Loose-passive")}>
                    Loose-passive
                </div>
                <div className="overlay-box" style={{backgroundColor: "#7ACEA8"}} onClick={()=>updatePlayerType("Tight-aggressive")}>
                    Tight-aggressive
                </div>
                <div className="overlay-box" style={{backgroundColor: "#7A94C9"}} onClick={()=>updatePlayerType("Loose-aggressive")}>
                    Loose-aggressive
                </div>
            </div>
        </div>
        
    );
}