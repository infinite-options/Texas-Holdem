import "./ConfirmButton.css";
import { useNavigate } from 'react-router-dom';
export default function ConfirmButton(props) {

    const navigate = useNavigate();

    const handleMainClick = () => {
        navigate('/main');
    };
    
    return(
        
        <div className="poker-900-weight-font">
            <button onClick={handleMainClick} className="confirm-button">Confirm Selection</button>
        </div>
    );
}