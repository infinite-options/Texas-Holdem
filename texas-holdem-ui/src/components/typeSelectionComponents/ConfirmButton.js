import "./ConfirmButton.css";
import { useNavigate } from 'react-router-dom';
export default function ConfirmButton(props) {
    const output = props.output;
    const navigate = useNavigate();


    function enterGame(output) {
        console.log("Output TA "+output.tightAggressive);
        console.log("Output TP "+output.tightPassive);
        console.log("Output LA "+output.looseAggressive);
        console.log("Output LP "+output.loosePassive);  

        navigate('/main', { state: { 
            ota : output.tightAggressive, 
            otp : output.tightPassive,
            ola : output.looseAggressive,
            olp : output.loosePassive
        } });
    }
    
    return(
        
        <div className="poker-900-weight-font">
            {/* <button onClick={handleMainClick} className="confirm-button">Confirm Selection</button> */}
            <button className="confirm-button" onClick={()=>enterGame(output)}>Confirm Selection</button>
        </div>
    );
}