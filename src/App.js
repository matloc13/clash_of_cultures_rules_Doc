import React from 'react';
import { Router } from '@reach/router';
import Header from './components/Header';
import OverView from './pages/Overview';
import SetUp from './pages/SetUp';
import Culture from './pages/Culture';
import PlayingGame from './pages/PlayingGame';
import PlayHome from './rulePages/PlayHome';
import Round from './rulePages/Round';
import Actions from './rulePages/Actions';
import Status from './rulePages/Status';
import Combat from './rulePages/Combat';
import CardsBarbs from './rulePages/CardsBarbs';
import './App.css';

const App = () => {
  return (
    <div className="App">

      <Header />

      <Router>
        <OverView path="overview" />
        <SetUp path="setup" />
        <Culture path="culture" />
        <PlayingGame path="play">
          <PlayHome path="/" />
          <Round path="round" />
          <Actions path="actions" />
          <Status path="status" />
          <Combat path="combat" />
          <CardsBarbs path="cards" />
        </PlayingGame>
      </Router>
    </div>
  );
}

export default App;
