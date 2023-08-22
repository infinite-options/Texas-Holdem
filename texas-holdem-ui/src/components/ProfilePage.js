import React from 'react';
import {useNavigate} from "react-router-dom";
import {useLocation} from 'react-router-dom';
import { useState } from 'react';
const positions = ["Dealer", "Small Blind", "Big Blind", "Low Jack", "High Jack", "Cut Off"];
function ProfilePage() {
    const location = useLocation();
    const navigate = useNavigate();
    // const [dealerIndex, setDealerIndex] = useState(location.state.dealerIndex);
    
    const handleMainPageClick = () => {
    //    navigate('/main', { state: { dealerIndex : location.state.dealerIndex} });
    navigate('/main');
    };

    return (<div>
        <h1>Profile Page</h1>
        {/* <div><h1>{location.state.name}</h1></div>
        <div><h1>{location.state.dealerIndex}</h1></div>
        <div><h1>{location.state.position}</h1></div> */}
        <button onClick={() => handleMainPageClick()}>Back to Main Page</button></div>
    );
};

export default ProfilePage;