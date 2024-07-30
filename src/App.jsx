import { useState } from "react";

let player = 0;

function Square() {
  const [value, setValue] = useState(null);

  function handleClick() {
    player % 2 == 0 ? setValue("x") : setValue("o");
    checkWin();
    player++;
  }
  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square value="x" />
        <Square value="x" />
        <Square value="x" />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}

function checkWin() {
  console.log("i cant check who win");
}
