import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import type { Square } from "./gameLogic";

// Pure UI component for rendering the tic-tac-toe board
interface BoardProps {
  squares: Square[]; // Array is easier to manage than matrix
  onSquareClick: (index: number) => void;
}

const Board: React.FC<BoardProps> = ({ squares, onSquareClick }) => {
  // I used some preexisting style for the buttons
  const renderSquare = (index: number) => {
    const isEmpty = squares[index] === null;

    return (
      <button
        className={`btn rounded-0 border-dark ${
          isEmpty ? "btn-outline-secondary" : "btn-secondary"
        }`}
        style={{
          width: "100px", // Using fixed size for simplicity // TODO MAKE IT A DYNAMIC GRID
          height: "100px",
          fontSize: "24px",
          fontWeight: "bold",
          cursor: isEmpty ? "pointer" : "not-allowed",
          opacity: isEmpty ? 1 : 0.7,
        }}
        onClick={() => onSquareClick(index)}
        onMouseOver={(e) => {
          const darkGray = "#A9A9A9"; /// I like naming colors for clarity
          if (isEmpty) {
            e.currentTarget.style.backgroundColor = darkGray;
          }
        }}
        onMouseOut={(e) => {
          if (isEmpty) {
            e.currentTarget.style.backgroundColor = ""; // Reset to default because we overrode the style
          }
        }}
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
