import { Link } from "react-router-dom";

export default function Navbar(params) {
    return(
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
    );
}