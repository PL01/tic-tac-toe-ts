// Board.tsx

import './Board.css';
import React from 'react';
import Square, { SquareXO } from './Square';

// Props interface for the Board component

interface BoardProps{
    squares: (SquareXO | null)[]; 
    //squares prop represents an array of values of each square on the board.
    xIsNext: boolean;
    // xIsNext prop covers the player's turn, 'true' for X's turn, 'false' for O's turn.
    onClickSquare: (index: number) => void;
    // onClickSquare prop is a callback function which takes the index of the clicked square as
    // an argument and returns 'void'
    onGameEnd: (winner: SquareXO | null) => void;
    // onGameEnd prop is a callback function which takes the winner or if its a draw, 'null'
    // returns void.
    // Used for resetting the game and logging results
    winner: SquareXO | null;
    // winner prop displays the current winner of the game.
    // This is for presentation
    status: string;
    // status prop represents current status of the game
    // i.e. Next Player: X or Winner: O.
    isGameOver: boolean;
    //isGameOver prop with type boolean indicates if the game is over or not.
    // 'true' for game over, otherwise its 'false'
    resetGame: () => void;
    //resetGame prop is a callback function that resets the game state
}

const Board: React.FunctionComponent<BoardProps> =({
    squares,
    xIsNext,
    onClickSquare,
    onGameEnd,
    winner,
    status,
    isGameOver,
    resetGame,
}) => {
    // Delcare a function to render each square
    const renderSquare = (index: number): JSX.Element =>{
        //renderSquare takes index with a parameter type of number and return a JSX element
        return <Square value={squares[index]} onClick={() => onClickSquare(index)} />;
        // return Square component,  squares[index] represents the current state of the board, with index being a position of the square.
        // the arrow function will call onClickSquare with the current index
        // this passes information about which square was clicked back to the Board
    };

    return(
        <div>
            {/* Display the game status */}
            <div className='status'>{status}</div>
            <div className='board-container'>
                {/* Render the board */}
                <div className='board-row'>
                    {renderSquare(0)}
                    {renderSquare(1)}
                    {renderSquare(2)}
                </div>
                <div className='board-row'>
                    {renderSquare(3)}
                    {renderSquare(4)}
                    {renderSquare(5)}
                </div>
                <div className='board-row'>
                    {renderSquare(6)}
                    {renderSquare(7)}
                    {renderSquare(8)}
                </div>
            </div>
            {/* Display game over if the game ends */}
            <div className='info-container'>
                {/* Checks if the game is over is true. If true, it will render below. */}
                {isGameOver && (
                    <div className='message'>
                        <p>Game Over!</p>

                        {/* Button to reset game */}
                        <button onClick={resetGame}>Restart Game!</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Board;