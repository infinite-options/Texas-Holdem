import React from "react";
import "./App.css";
import Matrix from "./components/matrix/Matrix";

import Deck from "./components/handle/Deck";

const App = () => {
  return (
    <div>
      <div>
        <Deck></Deck>
      </div>
      <Matrix />
    </div>
  );
};

export default App;
