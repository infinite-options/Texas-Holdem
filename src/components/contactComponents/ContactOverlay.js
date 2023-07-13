import "./Contact.css";
import "../../fonts/orbitron.css";
export default function ContactOverlay(props) {
    const [playerName] = props.data;
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
                <div className="overlay-box" style={{backgroundColor: "#E28D7E"}}>
                    Tight-passive
                </div>
                <div className="overlay-box" style={{backgroundColor: "#84827F"}}>
                    Loose-passive
                </div>
                <div className="overlay-box" style={{backgroundColor: "#7ACEA8"}}>
                    Tight-aggressive
                </div>
                <div className="overlay-box" style={{backgroundColor: "#7A94C9"}}>
                    Loose-aggressive
                </div>
            </div>
        </div>
        
    );
}