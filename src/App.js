import { Routes, Route } from "react-router-dom";
import { GameContextProvider } from "./contexts/GameContext";
import Navbar from "./components/navbarComponents/Navbar";
import EngineTest from "./pages/EngineTest";
import TypeSelection from "./pages/TypeSelection";
import ContactPage from "./pages/ContactPage";
import ContactPage2 from "./pages/ContactPage2";

const App = () => {
  
  return (
    <GameContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<EngineTest />} />
        <Route path="type" element={<TypeSelection />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="contact2" element={<ContactPage2 />} />
      </Routes>
    </GameContextProvider>
  );
};

export default App;
