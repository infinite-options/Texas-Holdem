import React from 'react';
import {useNavigate} from "react-router-dom";
import {useLocation} from 'react-router-dom';
import { useState } from 'react';
const positions = ["Dealer", "Small Blind", "Big Blind", "Low Jack", "High Jack", "Cut Off"];
function OpponentProfile() {
    const location = useLocation();
    const navigate = useNavigate();
    const [dealerIndex, setDealerIndex] = useState(location.state.dealerIndex);
    console.log("On Player click in OP ",dealerIndex)
    const handleMainPageClick = () => {
        navigate('/', { state: { dealerIndex : location.state.dealerIndex} });
    };

    return (<div>
        <h1>Opponent Profile Page</h1>
        <div><h1>{location.state.name}</h1></div>
        <div><h1>{location.state.dealerIndex}</h1></div>
        <div><h1>{location.state.position}</h1></div>
        <button onClick={() => handleMainPageClick()}>Back to Main Page</button></div>
    );
};

export default OpponentProfile;