import React from 'react';
import { Router } from '@reach/router';
import PlayHome from './../rulePages/PlayHome';
import Round from './../rulePages/Round';
import Combat from './../rulePages/Combat';
import Actions from './../rulePages/Actions';
import Status from './../rulePages/Status';
import CardsBarbs from './../rulePages/CardsBarbs';
const PlayingGame = () => {
    return (
        <div>
            <h2>Playing the Game</h2>
            <Router>
                <PlayHome path="/" />
                <Round path="round" />
                <Actions path="actions" />
                <Status path="status" />
                <Combat path="combat" />
                <CardsBarbs path="cards" />
            </Router>

        </div>
    )
}
export default PlayingGame;