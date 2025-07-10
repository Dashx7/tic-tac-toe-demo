import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import type { Square } from "./gameLogic";

// Pure UI component for rendering the tic-tac-toe board to
interface BoardProps {
  squares: Square[]; // Array is easier to manage than matrix
  onSquareClick: (index: number) => void;
}

const Board: React.FC<BoardProps> = ({ squares, onSquareClick }) => {
  // I used a prexiting style for the buttons
  const renderSquare = (index: number) => {
    return (
      <button
        className="btn btn-outline-secondary rounded-0 border-dark"
        style={{
          width: "100px",
          height: "100px",
          fontSize: "24px",
          fontWeight: "bold",
        }}
        onClick={() => onSquareClick(index)}
        key={index}
      >
        {squares[index]}
      </button>
    );
  };

  // REndering the board as a 3x3 grid w/ some borrowed bootstrap formatting
  return (
    <div className="container d-flex justify-content-center">
      <div className="board-grid" style={{ width: "300px" }}>
        {[0, 1, 2].map((row) => (
          <div key={row} className="d-flex">
            {[0, 1, 2].map((col) => {
              const index = row * 3 + col;
              return renderSquare(index);
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Board;
