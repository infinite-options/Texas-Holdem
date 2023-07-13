import "./AppDisplay.css";
import { Routes, Route } from "react-router-dom";
import EngineTest from "./pages/EngineTest";
import { GameContextProvider } from "./contexts/GameContext";
import TypeSelection from "./pages/TypeSelection";
import ContactPage from "./pages/ContactPage";
import ContactPage2 from "./pages/ContactPage2";
import Navbar from "./components/navbarComponents/Navbar";

const App = () => {
  
  return (
    <div className="app-container">
      <GameContextProvider>
        <Navbar />
          <Routes>
            <Route path="/" element={<EngineTest />} />
            <Route path="type" element={<TypeSelection />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="contact2" element={<ContactPage2 />} />
          </Routes>
      </GameContextProvider>
    </div>
  );
};

export default App;
