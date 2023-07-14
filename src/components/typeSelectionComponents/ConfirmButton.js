import "./ConfirmButton.css";
export default function ConfrimButton(props) {
    const output = props.output;

    return(
        <div className="poker-900-weight-font">
            <button className="confirm-button" onClick={()=>enterGame(output)}>Confirm Selection</button>
        </div>
    );
}

function enterGame(output) {
        
}