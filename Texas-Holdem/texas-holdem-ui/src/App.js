import './App.css';
import ChangePosition from './components/changePositionComponents/ChangePosition';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GameContextProvider } from './contexts/GameContext';

import TypeSelection from './pages/TypeSelection';
import OpponentsProfile from './pages/OpponentsProfile';
import Profile from './components/profilePageComponents/Profile';
import MainPage from './pages/MainPage';
import ContactPage from './pages/ContactPage';



const App = () => {
  return (
    <React.Fragment>
      <GameContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TypeSelection />} />
            <Route path="main" element={<MainPage />} />
            <Route path="type" element={<TypeSelection />} />
            <Route path="profile" element={<Profile />} />
            <Route path="change-position" element={<ChangePosition />} />
            <Route path="opponent" element={<OpponentsProfile/>} />
            <Route path="player-style" element={<ContactPage/>} />
          </Routes>
        </BrowserRouter>
      </GameContextProvider>
   </React.Fragment>
  );
};

export default App;
