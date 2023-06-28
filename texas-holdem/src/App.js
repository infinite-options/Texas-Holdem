import React from "react";
import Table from "./components/table/Table";
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
      {/* <h3>HiJack Table</h3>
      <Table /> */}
    </div>
  );
};

export default App;
