import { useState } from "react";

let player = 0;
let winner = null;
let state = "Next Player is X";
function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (squares[i] || winner) return;
    const nextSquares = squares.slice();
    nextSquares[i] = player % 2 == 0 ? "X" : "O";
    setSquares(nextSquares);
    player++;
  }

  winner = checkWinner(squares);
  if (winner) state = "The winner is " + winner;
  else state = "The next player is " + (player % 2 == 0 ? "X" : "O");

  return (
    <>
      <div className="state">{state}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

function checkWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < 8; i++) {
    let [a, b, c] = lines[i];
    if (
      squares[a] === squares[b] &&
      squares[a] === squares[c] &&
      squares[a] &&
      squares[b] &&
      squares[c]
    )
      return squares[a];
  }
  return null;
}
