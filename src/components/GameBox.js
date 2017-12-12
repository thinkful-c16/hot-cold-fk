import React from 'react';
import './gamebox.css';
import HotColdLogic from './HotColdLogic';
import Guess from './Guess';
import Tracker from './Tracker';

export default function GameBox(props) {
    console.log(props);
    return (
        <div>
            <div className="header">
                <h1>HOT or COLD</h1>
            </div>
            <div className="game-box">
            <div className="hclogic">
                <HotColdLogic />
            </div>
            <div className="guess-field">
                <Guess />
            </div>
            <div className="tracker">
                <Tracker />
            </div>
            </div>
        </div>
    )
}