import "./Contact.css";
import "../../fonts/orbitron.css";

export default function ReturnButton(props) {
    function returnHome() {
        
    }
    
    return(
        <div className="poker-900-weight-font">
            <button className="return-button" onClick={()=>returnHome()}>Return</button>
        </div>
    );
}