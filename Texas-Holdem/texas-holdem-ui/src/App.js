import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import ChangePosition from './components/ChangePosition';
import React from 'react';
import Main from './components/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OpponentProfile from './components/OpponentProfile';
import CounterComponent from './components/CounterComponent';

const greenRound = {
  width: '349.938px',
  height: '229.439px',
  transform: 'rotate(-90.363deg)',
  flexShrink: 0,
  borderRadius: '1000px',
  border: '1px solid #F3AA45',
  background: 'linear-gradient(271deg, #233329 0%, #63D471 100%)',
}

const App = () => {
  return (
    <React.Fragment>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Main />}></Route>
            <Route path="change-position" element={<ChangePosition />} />
            <Route path="opponent" element={<OpponentProfile/>} />
          
      </Routes>
      </BrowserRouter>
      {/* <CounterComponent></CounterComponent> */}
   </React.Fragment>
  );
};

export default App;
