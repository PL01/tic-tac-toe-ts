// Game.tsx

import React, { useState } from 'react';
import Board from './Board';
import { SquareXO } from './Square';
import './Game.css';

const Game: React.FunctionComponent = () => {
    const [startSymbol, setStartSymbol] = useState<SquareXO | string >('X');
    
    //State to keep track of gameplay
    const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
    /**
     * history represents the game's history
     * setHistory is the function used to update history's state
     */

    // State to keep track of the current move
    const [stepNumber, setStepNumber] = useState(0);
    /**
     * stepNumber keeps track of the current move in the game, set to 0.
     * setStepNumber is a function to update the state.
     */

    // State to indicate whether 'X' or '0' is the current player
    const [xIsNext, setXIsNext] = useState(true);
    /**
     * xIsNext is the state variable indiciating if it's player X or player O's turn.
     * setXIsNext is the function to update xIsNext's state between true (X) and false (O)
     */

    // Define the resetGame function
    const resetGame = () => {
        setHistory([{ squares: Array(9).fill(null) }]);
        setStepNumber(0);
        setXIsNext(startSymbol === 'X');
    };

    // Function to handle a square click
    const handleClick = (index: number): void => {
        // Get the current history up to the current step
        const newHistory = history.slice(0, stepNumber + 1); // create a new array, newHistory, containing up-to-date states of game
        const current = newHistory[newHistory.length - 1]; // last element of newHistory, representing current state
        const squares = [...current.squares]; //cop of the current squares array to avoid mutating it.

        // Check if there is a winner or the square is already filled, return early
        if (calculateWinner(squares) || squares[index]) {
            return;
        }

        // Update the clicked square
        squares[index] = xIsNext ? 'X' : 'O';

        // Update state of the game's history
        setHistory([...newHistory, { squares }]);
        setStepNumber(newHistory.length);
        setXIsNext(!xIsNext);
    };

    const handleStartSymbolChange = (symbol: string): void => {
        setStartSymbol(symbol as SquareXO);
        resetGame();
      };

    // Function to jump to a specific move
    const jumpTo = (step: number): void => { // declare step as a number type
        setStepNumber(step); //update the stepnumber state
        setXIsNext(step % 2 === 0); 
        /**
         * update xIsNext state to determiment the current player after jump
         * If step is an even number, it will return true, indicating X's turn.
         * otherwise, return false, O's turn.
         */
    };

    const handleGameEnd = (winner: SquareXO | null): void => {
        if (winner) {
            console.log(`Game Over! Winner: ${winner}`);
            // Display a message to the user
            alert(`Game Over! Winner: ${winner}`);
        } else if (stepNumber === 9) {
            console.log('Game Over! It\'s a draw!');
            // Display a message to the user
            alert('Game Over! It\'s a draw!');
        }
    
        // Additional game-end logic if needed
    
        // For demonstration purposes, you can reset the game after 2 seconds
        setTimeout(() => {
            setHistory([{ squares: Array(9).fill(null) }]);
            setStepNumber(0);
            setXIsNext(true);
        }, 10000);
    };

    // Function to calculate the winner of the game
    const calculateWinner = (squares: (SquareXO | null)[]): SquareXO | null => {
        // function takes the array of squares as an input and returns either a string or null
        
        // Define all possible winning lines (rows, columns, diagonals)
        const lines = [
            // Rows
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            // Columns
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            // Diagonals
            [0, 4, 8],
            [2, 4, 6],
        ];
        
        // Iterate through each winning line
        for (const line of lines) {
            const [a, b, c] = line;

            //Check if the squares in the current line are all the same (X or O)
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                // return the winner (X or O)
                return squares[a];
            }
        }
        // If now winner is found, return null
        return null;
    };

    // Get the current state
    const current = history[stepNumber];

    // Calculate the winner
    const winner = calculateWinner(current.squares);

    // Determine the status message
    let status: string;
    if (winner) {
        status = `Winner: ${winner}`;
    } else if (stepNumber === 9) {
        status = 'Draw! No winner.';
    } else {
        status = `Next player: ${xIsNext ? 'X' : 'O'}`;
    }

    return(
        <div className='game'>
            <div className='game-board'>
                {/* Render the game board */}
                <Board 
                    squares={current.squares}
                    xIsNext={startSymbol === 'X'}
                    onClickSquare={handleClick}
                    onGameEnd={handleGameEnd}
                    winner={winner}
                    status={status}
                    isGameOver={winner !== null || stepNumber === 9}
                    resetGame={resetGame}
                />
            </div>
            <div className='game-info'>
                {/* UI for selecting starting symbol */}
                <div>
                    <p>Select starting symbol:</p>
                    <button className='button-size' onClick={() => handleStartSymbolChange(SquareXO.X)}>X</button>
                    <button className='button-size' onClick={() => handleStartSymbolChange(SquareXO.O)}>O</button>
                </div>
                {/* Display game history */}
                <ol>
                    {history.map((step, move) => (
                        <li key={move}>
                        <button onClick={() => jumpTo(move)}>
                            {move === 0 ? 'Start of Game' : `Jump to move #${move}`}
                        </button>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default Game;