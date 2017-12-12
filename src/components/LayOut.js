//largest parent you can have- App.js

import React from 'react';
import './layout.css';
import NewGame from './New-Game';
import Rules from './Rules';

import GameBox from './GameBox';

//place all components here
export default function App(){
    
    return (
        <div className="layout-body">
            <Rules />
            <NewGame />
            <GameBox />            
        </div>            
    )
    
}