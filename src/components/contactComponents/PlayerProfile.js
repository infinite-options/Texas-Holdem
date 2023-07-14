import "./Contact.css";

export default function PlayerProfile(props) {
    const playerName = props.data;

    return(
        <div className="profile-container">
            <img src="ProfileImg.png" alt="Player Profile" style={{"width": "70px"}}/>
            <div className="profile-nametag">
                {playerName}
            </div>
        </div>
    );
}