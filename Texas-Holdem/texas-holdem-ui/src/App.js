import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import ChangePosition from './components/changePositionComponents/ChangePosition';
import React from 'react';
import Main from './components/mainComponents/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OpponentProfile from './components/OpponentProfile';
import TypeSelection from './pages/TypeSelection';
import ProfilePage from './components/ProfilePage';

const App = () => {
  return (
    <React.Fragment>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<TypeSelection />}></Route>
      <Route path="main" element={<Main />} />
            <Route path="type" element={<TypeSelection />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="change-position" element={<ChangePosition />} />
            <Route path="opponent" element={<OpponentProfile/>} />
          
      </Routes>
      </BrowserRouter>
   </React.Fragment>
  );
};

export default App;
