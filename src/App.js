import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/';
import { useState } from 'react';
import Hangman from './components/Hangman';

export default function GameInstance() {

  const [isPlayerA, setIsPlayerA] = useState(true);
  return (
    <div>
      {isPlayerA ? (
        <Hangman key="A" person="A" />
      ) : (
        <Hangman key="B" person="B" />
      )}
      <div className="d-inline-flex gap-2 mb-5" style={{margin: '0 40% 0 40%'}}>
        <button className="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill" type="button" onClick={() => {
          setIsPlayerA(!isPlayerA);
        }}>
          Reset Game!
        </button>
      </div>
        {/* 
          The user should be able to restart the game
          https://react.dev/learn/preserving-and-resetting-state#resetting-state-at-the-same-position
        */}
    </div>
  );
}


