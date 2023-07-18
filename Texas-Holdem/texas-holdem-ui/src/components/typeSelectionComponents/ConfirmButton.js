import "./ConfirmButton.css";
import { useNavigate } from 'react-router-dom';
export default function ConfirmButton(props) {
    const [output, setPlayers] = props.output;
    const navigate = useNavigate();

    const handleMainClick = () => {
        navigate('/main');
    };
    function enterGame(output) {
        console.log("Output TA "+output.tightAggressive);
        console.log("Output TP "+output.tightPassive);
        console.log("Output LA "+output.looseAggressive);
        console.log("Output LP "+output.loosePassive);  
        const players = [];
        let count = 1;
        count += pushPlayers(players, output.tightAggressive, "tight-aggressive", count);
        count += pushPlayers(players, output.tightPassive, "tight-passive", count);
        count += pushPlayers(players, output.looseAggressive, "loose-aggressive", count);
        count += pushPlayers(players, output.loosePassive, "loose-passive", count);
        
        setPlayers(players);
        navigate('/main');
    }
    function pushPlayers(players, playerCount, type, start_i) {
        for (let index = 0; index < playerCount; index++) {
            players.push(createPlayer("Player "+(start_i+index), type));
        }
        return playerCount;
    }
    function createPlayer(playerName, playerType) {
        return {
            name: playerName,
            type: playerType,
        }
    }
    
    return(
        
        <div className="poker-900-weight-font">
            {/* <button onClick={handleMainClick} className="confirm-button">Confirm Selection</button> */}
            <button className="confirm-button" onClick={()=>enterGame(output)}>Confirm Selection</button>
        </div>
    );
}