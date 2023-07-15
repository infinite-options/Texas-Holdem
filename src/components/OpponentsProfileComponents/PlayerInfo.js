import "./OpponentsProfile.css";

export default function PlayerInfo(props) {
    return(
        <div className="playerInfo-container">
            <div className="text-box">
                <div>
                    Player's Name
                </div>
                <div className="second-text">
                    Position
                </div>
            </div>
            <div className="content-box">
                <div>
                    Michael
                </div>
                <div className="second-text">
                    Small Blind (SB)
                </div>
            </div>

        </div>
    );
}