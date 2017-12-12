import React from 'react';
import './guess.css';

export default function Guess() {
  const guessNumber = 3;
 return (
   <div className="guess">
      <form>
        <input className="input" type="text" name="enter-guess" placeholder="Enter your Guess" required></input>
        <button className="button" type="button" name="submit" value="">Guess</button>
      </form>
      <p className="guess-number">Guess #
        <span className="count">{guessNumber}</span>!
      </p>
   </div>
    )
}