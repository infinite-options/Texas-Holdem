import PlayerProfile from "./PlayerProfile";
import "./Contact.css";

export default function PlayerStyle(props) {
    const [playerName, playerType, color] = props.data;
    const sliceIndex = playerType.indexOf('-')+1;
    const playerType1 = playerType.slice(0, sliceIndex);
    const playerType2 = playerType.slice(sliceIndex);

    function showOverlay() {
        
    }

    return(
        <div className="style-container">
            <PlayerProfile data={playerName}/>
            <div className="style-container-reverse">
                <div className="edit-button" onClick={()=>showOverlay()}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 3.8C9 3.51997 9 3.37996 9.0545 3.273C9.10243 3.17892 9.17892 3.10243 9.273 3.0545C9.37996 3 9.51997 3 9.8 3H14.2C14.48 3 14.62 3 14.727 3.0545C14.8211 3.10243 14.8976 3.17892 14.9455 3.273C15 3.37996 15 3.51997 15 3.8V14H19L12 21L5 14H9V3.8Z" stroke="white" stroke-opacity="0.88" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div className="type-container" style={{"backgroundColor" : color}}>
                    <div>
                        {playerType1}
                    </div>
                    <div>
                        {playerType2}
                    </div>
                </div>
            </div>
        </div>
    );
}