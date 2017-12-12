import React from 'react';
import './new-game.css';
//reset the game
export default function NewGame(){
    const newGame = '+New Game'
    return (
        <div>
        <h3 className="new-game">{newGame}</h3>
        </div>
    );
};

