import React, { useEffect, useState } from "react";
import "./App.css";
import Matrix from "./components/matrix/Matrix";
import Deck from "./components/handle/Deck";

import PlayerInfo from "./components/handle/PlayerInfo";
import Profile from "./components/handle/Profile";

import axios from 'axios';
import { URL_ENDPOINT } from "./constants/API";
import CardSelect from "./components/handle/CardSelect";

const App = () => {
  const [username, setUsername] = useState("");
  const [fetchData, setFetchData] = useState({});
  const [hands, setHands] = useState("");

  useEffect(()=>{
    axios.get(URL_ENDPOINT+'/preflop').then((res=> {
      setFetchData(res.data);
      console.log("APP: data initialized.");
    }));
  }, []);
  
  return (
    <div>
      <CardSelect hands={[setHands]}/>
      <PlayerInfo setUser={[setUsername]}/>
      <Profile data={[username, fetchData]} hands={[hands]} />
      {/*
      <div>
        <Deck></Deck>
      </div>
      <Matrix />
      */}
    </div>
  );
};

export default App;
