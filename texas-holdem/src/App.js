import "./App.css";
import Lobby from "./components/Lobby";
import Preflop from "./components/Preflop";
import { GameContextProvider } from "./contexts/GameContext";

const App = () => {
  
  return (
    <div>
      <GameContextProvider>
          <Lobby />
          <Preflop />
      </GameContextProvider>
    </div>
  );
};

export default App;
