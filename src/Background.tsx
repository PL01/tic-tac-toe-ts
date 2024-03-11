import React from 'react'
import './Backgrounds.css'

export default function Background(){
    return(
    <div className='my-info'>
          <h3>Developer's Notes</h3>
          <p className='notes'>
            Hey! I'm Pablo Lara, and I'm a full-stack developer who is starting his best to 
            public get into the Software Development industry! This is a small game I made for Major League Hacking's
            Global Hacking Week, with an emphasis on gaming. One of the challenges was to make a simple tic-tac-toe
            game.
          </p>

          <h4>Rules:</h4>
          <p>
            We all know, Tic-Tac-Toe, but if you don't, here's the gist! 
            Tic-Tac-Toe is normally, a turn-based game played on a 3x3 grid. 
            The objective is to be the first player to align three of their respective symbols (either 'X' or 'O') horizontally, vertically, or diagonally. 
            You start this game by picking your symbol. Then, it switches to the next symbol. 
            You keep playing the game, until either X or O win OR neither player achieves 3 symbols, and it comes to a draw!
            When every game ends, you have the option to reset the game OR go through each stage of the game to review how you played it out.
          </p> 

          <p>
            To play the game, you can either download this repo and follow the installation instructions below OR you can click the link 
            for the deployed version! 
          </p>
          <p>
            Thank you so much for playing my game, and I hope you'll follow me across my social media. Have fun!
          </p>
        </div>
    );
}