import PlayerStyle from "../components/contactComponents/PlayerStyle";
import ReturnButton from "../components/contactComponents/ReturnButton";
import PokerHeader from "../components/pokerHeaderComponents/PokerHeader";
import "../fonts/orbitron.css";
import "../components/contactComponents/Contact.css"

export default function ContactPage() {
    return(
        <div className="poker-900-weight-font">
            <PokerHeader />
            <div className="contact-title">
                Choose Player Style
            </div>
            <PlayerStyle data={["Player 1", "Tight-passive", "#E28D7E"]}/>
            <PlayerStyle data={["Player 2", "Loose-passive", "#84827F"]}/>
            <PlayerStyle data={["Player 3", "Tight-passive", "#E28D7E"]}/>
            <PlayerStyle data={["Player 4", "Tight-aggressive", "#7ACEA8"]}/>
            <PlayerStyle data={["Player 5", "Loose-aggressive", "#7A94C9"]}/>

            <ReturnButton />
            
        </div>
    );
}