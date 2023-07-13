import { Link } from "react-router-dom";
import "../fonts/orbitron.css";
import "./PokerHeader.css";

export default function PokerHeader(props) {

    return(
        <div className="poker-900-weight-font">
            <div>
                <Link to="/">TestEngine </Link>
                <span style={{"margin-left":"5px"}}/>
                <Link to="/type">Type Selection </Link>
                <span style={{"margin-left":"5px"}}/>
                <Link to="/contact">Contact </Link>
                <span style={{"margin-left":"5px"}}/>
                <Link to="/contact2">ContactOverlay </Link>
                <span style={{"margin-left":"5px"}}/>
                <hr/>
            </div>


            <div className="header-container">
                P O K E R
            </div>
        </div>
    );
}