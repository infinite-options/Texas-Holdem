import "../fonts/orbitron.css";
import PlayerTypeSelector from "../components/typeSelectionComponents/PlayerTypeSelector";
import ConfrimButton from "../components/typeSelectionComponents/ConfirmButton";
import PokerHeader from "../components/pokerHeaderComponents/PokerHeader";
import "./Pages.css";

export default function TypeSelection() {
    return(
        <div className="app-container">
            <PokerHeader />
            <div className="poker-base-font">
                <div style={{"font-size": "22px", "font-weight":"bold", "margin" : "15px"}}
                >                    
                    Choose Player type
                </div>
                <div className="flex-container" style={{"margin-left" : "15px"}}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 8.00004V12M10.25 5.50003H6.8C5.11984 5.50003 4.27976 5.50003 3.63803 5.82701C3.07354 6.11463 2.6146 6.57358 2.32698 7.13806C2 7.7798 2 8.61988 2 10.3L2 11.5C2 12.4319 2 12.8979 2.15224 13.2654C2.35523 13.7555 2.74458 14.1448 3.23463 14.3478C3.60218 14.5 4.06812 14.5 5 14.5V18.75C5 18.9822 5 19.0983 5.00963 19.1961C5.10316 20.1456 5.85441 20.8969 6.80397 20.9904C6.90175 21 7.01783 21 7.25 21C7.48217 21 7.59826 21 7.69604 20.9904C8.64559 20.8969 9.39685 20.1456 9.49037 19.1961C9.5 19.0983 9.5 18.9822 9.5 18.75V14.5H10.25C12.0164 14.5 14.1772 15.4469 15.8443 16.3557C16.8168 16.8858 17.3031 17.1509 17.6216 17.1119C17.9169 17.0757 18.1402 16.9431 18.3133 16.7011C18.5 16.4402 18.5 15.918 18.5 14.8737V5.12632C18.5 4.08203 18.5 3.55988 18.3133 3.29892C18.1402 3.05694 17.9169 2.92433 17.6216 2.88816C17.3031 2.84916 16.8168 3.11423 15.8443 3.64439C14.1772 4.55315 12.0164 5.50003 10.25 5.50003Z" stroke="black" stroke-opacity="0.8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    <span style={{"font-size": "16px", "margin-left" : "10px", }}>
                       Maximum 5 selections 
                    </span>
                    
                </div>

                <PlayerTypeSelector box={["Tight-aggressive", "#7ACEA8"]}/>
                <PlayerTypeSelector box={["Loose-aggressive", "#7A94C9"]}/>
                <PlayerTypeSelector box={["Tight-passive", "#E28D7E"]}/>
                <PlayerTypeSelector box={["Loose-passive", "#84827F"]}/>

                <ConfrimButton />
            </div>
        </div>
        
    );
}