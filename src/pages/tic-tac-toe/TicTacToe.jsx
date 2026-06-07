import { useState } from "react";
import "./TicTacToe.css";

const initialBoard = Array(9).fill(null);

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];
  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: [a, b, c] };
    }
  }
  return null;
}

function Square({ value, onClick, isWinning }) {
  return (
    <button className={`ttt-square ${isWinning ? "winning" : ""} ${value === "X" ? "x-mark" : value === "O" ? "o-mark" : ""}`} onClick={onClick}>
      {value}
    </button>
  );
}

export default function TicTacToe() {
  const [board, setBoard] = useState(initialBoard);
  const [isXNext, setIsXNext] = useState(true);
  const [scoreX, setScoreX] = useState(0);
  const [scoreO, setScoreO] = useState(0);

  const result = calculateWinner(board);
  const winner = result?.winner;
  const winningLine = result?.line || [];
  const isDraw = !winner && board.every(Boolean);

  function handleClick(i) {
    if (board[i] || winner) return;
    const newBoard = [...board];
    newBoard[i] = isXNext ? "X" : "O";
    setBoard(newBoard);
    const newResult = calculateWinner(newBoard);
    if (newResult) {
      if (newResult.winner === "X") setScoreX((s) => s + 1);
      else setScoreO((s) => s + 1);
    }
    setIsXNext(!isXNext);
  }

  function resetGame() {
    setBoard(initialBoard);
    setIsXNext(true);
  }

  let status;
  if (winner) status = `🎉 Pemain ${winner} Menang!`;
  else if (isDraw) status = "🤝 Seri!";
  else status = `Giliran: ${isXNext ? "X" : "O"}`;

  return (
    <div className="ttt-container">
      <h1 className="ttt-title">Tic Tac Toe</h1>
      <div className="ttt-scoreboard">
        <div className="ttt-score x-score">
          <span className="score-label">Pemain X</span>
          <span className="score-value">{scoreX}</span>
        </div>
        <div className="ttt-score o-score">
          <span className="score-label">Pemain O</span>
          <span className="score-value">{scoreO}</span>
        </div>
      </div>
      <div className={`ttt-status ${winner ? "status-winner" : isDraw ? "status-draw" : ""}`}>{status}</div>
      <div className="ttt-board">
        {board.map((val, i) => (
          <Square key={i} value={val} onClick={() => handleClick(i)} isWinning={winningLine.includes(i)} />
        ))}
      </div>
      <button className="ttt-reset-btn" onClick={resetGame}>
        🔄 Main Lagi
      </button>
    </div>
  );
}
