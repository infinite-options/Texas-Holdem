import "./Contact.css";
import "../../fonts/orbitron.css";
import {useLocation} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function ReturnButton(props) {

    const navigate = useNavigate();

    function returnHome() {
       // console.log('Player Style',props.data)
        navigate('/profile')
    }
    
    return(
        <div className="poker-900-weight-font">
            <button className="return-button" onClick={()=>returnHome()}>Return</button>
        </div>
    );
}