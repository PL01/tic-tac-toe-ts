import React from 'react'
import './Background.css'

export default function Background(){
    return(
    <div className='my-info'>
          <div className='notes'>
            <h3>Developer's Notes</h3>
            <p>
              Hey! I'm Pablo Lara, and I'm a full-stack developer who is starting his best to 
              public get into the Software Development industry! This is a small game I made for Major League Hacking's
              Global Hacking Week, with an emphasis on gaming. One of the challenges was to make a simple tic-tac-toe
              game.
            </p>
          </div>
          <div className='notes links'>
            <h3>How To Download Game</h3>
            <p>
              Click this <a href='https://github.com/PL01/tic-tac-toe-ts'>Link</a> to learn how to download this game! 
            </p>
          </div>
          <div className='notes'>
            <h3>Rules:</h3>
            <p>
              We all know, Tic-Tac-Toe, but if you don't, here's the gist! 
              Tic-Tac-Toe is normally, a turn-based game played on a 3x3 grid. 
              The objective is to be the first player to align three of their respective symbols (either 'X' or 'O') horizontally, vertically, or diagonally. 
              You start this game by picking your symbol. Then, it switches to the next symbol. 
              You keep playing the game, until either X or O win OR neither player achieves 3 symbols, and it comes to a draw!
              When every game ends, you have the option to reset the game OR go through each stage of the game to review how you played it out.
            </p> 
          </div>
          <div className='notes'>
            <h3>Final Word!</h3>
            <p>Thank you so much for playing my game, and I hope you'll follow me across my social media. Have fun!</p>
          </div>
        </div>
    );
}