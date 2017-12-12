import React from 'react';
import './tracker.css';

export default function Tracker() {
    const z = '2';
    return (
        <div>
            <p><span className="tracker-results">{z}</span></p>
        </div>
    )
}