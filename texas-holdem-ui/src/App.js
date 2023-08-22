import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import ChangePosition from './components/changePositionComponents/ChangePosition';
import React from 'react';
import Main from './components/mainComponents/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import TypeSelection from './pages/TypeSelection';
import ProfilePage from './components/ProfilePage';
import OpponentsProfile from './components/opponentsProfileComponents/OpponentsProfile';
import Profile from './components/profilePageComponents/Profile';
import ContactPage from './pages/ContactPage';
import { useState } from 'react';
import { PlayerContext, PlayerContextProvider } from './contexts/PlayerContext';
import Main01 from './components/mainComponents/Main01';
import { GameContextProvider } from './contexts/GameContext';
import MainPage from './components/mainComponents/MainPage';
import SliderOverlay from './components/mainComponents/SliderOverlay';


const App = () => {

  return (
    <React.Fragment>
     
       <PlayerContextProvider>
       <GameContextProvider>
        <BrowserRouter>
          <Routes>
       
            <Route path="/" element={<TypeSelection />}></Route>
            <Route path="main" element={<MainPage />} />
           
            <Route path="type" element={<TypeSelection />} />
            <Route path="profile" element={<Profile />} />
            <Route path="change-position" element={<ChangePosition />} />
            <Route path="opponent" element={<OpponentsProfile/>} />
            <Route path="player-style" element={<ContactPage/>} />
            <Route path="player-position" element={<ChangePosition/>} />
            <Route path="raise-amt" element={<SliderOverlay />} />
      </Routes>
      </BrowserRouter>
      </GameContextProvider>
      </PlayerContextProvider>
   </React.Fragment>
  );
};

export default App;
