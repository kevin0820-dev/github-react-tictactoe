import { useState } from "react";

let player = 0;

function Square(value, onSquareClick) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(index) {
    const nextSquares = squares.slice();
    nextSquares[index] = player % 2 == 0 ? "X" : "o";
    setSquares(nextSquares);
    checkWin();
    player++;
  }

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[0]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[0]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[0]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[0]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[0]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[0]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

function checkWin() {
  console.log("i cant check who win");
}
