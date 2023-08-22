import ContactOverlay from "../components/contactComponents/ContactOverlay";
import "./Pages.css";


export default function ContactPage2() {
    return(
        <div className="app-container">
            <ContactOverlay data={["Player 1"]} />
        </div>
    );
}