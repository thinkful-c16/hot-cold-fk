import React from 'react';
import './tracker.css';

export default function Tracker() {
    const z = '2';
    return (
        <div>
            <ul>
              <li className="tracker-results">{z}</li>
            </ul>
        </div>
    )
}