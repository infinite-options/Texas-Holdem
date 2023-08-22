import PlayerProfile from "./PlayerProfile";
import "./Contact.css";
import ContactOverlay from "./ContactOverlay";
import { useState } from "react";
import { Modal } from "react-overlays";
import { styled } from "styled-components";

const Backdrop = styled("div")`
  position: fixed;
  z-index: 1040;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000;
  opacity: 0.5;
`;

// we use some pseudo random coords so nested modals
// don't sit right on top of each other.
const PoistionedModal = styled(Modal)`
  position: fixed;
  width: 360px;
  z-index: 1040;
  top: 20%;
  left: 15px;
`;

export default function PlayerStyle(props) {
    const [playerName, playerType, color] = props.data;
    const [setPlayerType, i] = props.modifier;
    const sliceIndex = playerType.indexOf('-')+1;
    const playerType1 = playerType.slice(0, sliceIndex);
    const playerType2 = playerType.slice(sliceIndex);

    const [show, setShow] = useState(false);
    const renderBackdrop = (props) => <Backdrop {...props} />;

    function showOverlay() {
        setShow(true);
    }

    function closeOverlay() {
        setShow(false);
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
            
            <div>
                <PoistionedModal
                    show={show}
                    onHide={() => setShow(false)}
                    renderBackdrop={renderBackdrop}
                    aria-labelledby="modal-label"
                >
                    <ContactOverlay data={[playerName, setPlayerType, i]} close={closeOverlay}/>
                </PoistionedModal>
            </div>
        </div>
    );
}