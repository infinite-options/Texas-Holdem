import React, { useState } from "react";
import "./App.css";
import Matrix from "./components/matrix/Matrix";
import Deck from "./components/handle/Deck";

import PlayerInfo from "./components/handle/PlayerInfo";
import Profile from "./components/handle/Profile";

const App = () => {
  const [username, setUsername] = useState("");
  return (
    <div>
      <PlayerInfo setUser={setUsername}/>
      <Profile user={username}/>
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
