import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Deck from "./components/handle/Deck";
import PokerDeck from "./components/handle/PokerDeck";
import 'bootstrap/dist/css/bootstrap.min.css';
import DealerMatrix from "./components/matrix/DealerMatrix";
import MatrixTable from "./components/matrix/MatrixTable";
import Layout from "./components/layout/Layout";
import { useEffect, useState } from "react";
import axios from "axios";
import PreflopBet from "./components/matrix/PreflopBet";
import PreflopBet1 from "./components/matrix/PreflopBet1";

const App = () => {
  const [fetchData, setFetchData] = useState({});
  useEffect(() => {
    axios
      .get(
        "https://4jzrko6ioa.execute-api.us-west-1.amazonaws.com/dev/api/v2" +
          "/preflop"
      )
      .then((res) => {
        setFetchData(res.data);
        console.log("APP: data initialized.");
        console.log(res.data);
      });
  }, []);
  return (
    <div>
    <PreflopBet1></PreflopBet1>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PokerDeck data={[fetchData]} />} />
          <Route path="add" element={<MatrixTable />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;
