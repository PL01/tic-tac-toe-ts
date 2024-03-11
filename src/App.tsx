import './App.css';
import Game from './Game'; 
import React from 'react';
import Background from './Background';
import Footer from './Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-free/css/all.css';

// Add Font Awesome brands icons to the library
library.add(fab);

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pablo Lara's Tic-Tac-Toe Game</h1>
      </header>
        <Game />
        <Background />
        <Footer />
    </div>
  );
}

