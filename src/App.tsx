import './App.css';
import Game from './Game'; 
import React from 'react';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pablo's Tic-Tac-Toe Game</h1>
      </header>
      <Game />
    </div>
  );
}

