import { useState } from "react";
import Header from "./Header";
import Board from "./Board";
import { createInitialGameState, makeMove, type GameState } from "./gameLogic";

import "./App.css";
import Footer from "./Footer";

function App() {
  const [gameState, setGameState] = useState<GameState>(
    createInitialGameState()
  );

  function handleSquareClick(index: number) {
    const newGameState = makeMove(gameState, index);
    setGameState(newGameState);
  }

  function handleReset() {
    setGameState(createInitialGameState());
  }

  return (
    <>
      <div className="Header">
        <Header currentPlayer={gameState.currentPlayer || "X"} />
      </div>
      <div className="board">
        <Board squares={gameState.board} onSquareClick={handleSquareClick} />
      </div>
      <Footer onReset={handleReset} winner={gameState.winner} />
    </>
  );
}

export default App;
