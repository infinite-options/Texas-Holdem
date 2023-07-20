import "./OpponentsProfile.css";

export default function PlayerInfo(props) {
    const [player_name, , player_pos] = props.player;
    const [hands, action] = props.hands;

    function isRed(card) {
        if(card.length !== 2) {
            return false;
        }
        return (card.charAt(1) === '♥' || card.charAt(1) === '♦');
    }

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
                <div  className="col-text">
                    Player's Name
                </div>
                <div className="col-text">
                    Position 
                </div>
                <div className="col-text">
                    Hands
                </div>
                <div className="col-text">
                    Action
                </div>
            </div>
            <div className="content-box">
                <div  className="col-text">
                    {player_name}
                </div>
                <div className="col-text">
                    {getPositionText(player_pos)}
                </div>
                <div className="col-text">
                    <span className={`${isRed(hands[0])?"font-red":""}`}>{hands[0]}</span>{', '}<span className={`${isRed(hands[1])?"font-red":""}`}>{hands[1]}</span>
                </div>
                <div className="col-text">
                    {action}
                </div>
            </div>

        </div>
    );
}