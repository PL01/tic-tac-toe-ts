// Square.tsx

import React from 'react';

// We'll need to define type of props for the Squares on the board

enum SquareXO{ //This helps to define the values of X and O for the Square
    X = 'X',
    O = 'O'
}

interface SquareProps{ //Interface helps enforce the type check in our component
    value: SquareXO | null; // String or null represent the current value of the square (i.e. 'X', 'O', or null)
    onClick: () => void; // Callback function for when we click the square
}

// Definition of an individual square on the board.
const Square: React.FunctionComponent<SquareProps> = ({value, onClick}) => {
    
    //sq is a dynamic class name based on the square's value, X or O or null using conditional operators
    const sq = value === SquareXO.X ? 'square x-square' : value === SquareXO.O ? 'square o-square' : 'square';
    /*  First condition: value === SquareXO.X, if true, the expression after the ? will execute
        Second condition: value === SquareXO.O, if true, the expression after the ? will execute
        Default condition: If  neither of the above conditions are true, the square is null/empty
        and default class name is 'square'.
    */
    return(
        // We make a button with a speccific class and onClick handler
        <button className={sq} onClick={onClick}>
            {value}
            {/* Display the value ('X', 'O', or null) when square is clicked. */}
        </button>
    );
};

export default Square;