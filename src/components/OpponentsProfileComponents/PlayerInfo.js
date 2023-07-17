import "./OpponentsProfile.css";

export default function PlayerInfo(props) {
    const [player_name, , player_pos] = props.player;

    function getPositionText(pos) {
        switch (pos) {
            case 'sb':
                return "Small Blind (SB)";
            case 'bb':
                return "Big Blind (BB)";
            case 'utg':
                return "Under The Gun (UTG)";
            case 'utgp1':
                return "Under The Gun +1 (UTG+1)";
            case 'utgp2':
                return "Under The Gun +2 (UTG+2)";
            case 'lj':
                return "Lojack (LJ)";
            case 'hj':
                return "Hijack (HJ)";
            case 'co':
                return "Cut Off (CO)";
            case 'but':
                return "Button (BUT)";    
            default:
                return "";
        }
    }

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
                    {player_name}
                </div>
                <div className="second-text">
                    {getPositionText(player_pos)}
                </div>
            </div>

        </div>
    );
}